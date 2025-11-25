// Get the current window ID
chrome.windows.getCurrent((currentWindow) => {
  const currentWindowId = currentWindow.id;
  
  // Get all windows with their tabs
  chrome.windows.getAll({ populate: true }, (windows) => {
    // Calculate current window tab count
    const currentWindowTabs = windows.find(w => w.id === currentWindowId);
    if (currentWindowTabs) {
      document.getElementById('tabCount').textContent = currentWindowTabs.tabs.length;
    }
    
    // Calculate total tab count
    const totalTabCount = windows.reduce((sum, window) => sum + window.tabs.length, 0);
    document.getElementById('totalTabCount').textContent = totalTabCount;
    
    // Sort windows by tab count (descending)
    const sortedWindows = windows.sort((a, b) => b.tabs.length - a.tabs.length);
    
    // Display windows list
    const windowsList = document.getElementById('windowsList');
    windowsList.innerHTML = '';
    
    sortedWindows.forEach((window, index) => {
      const windowItem = document.createElement('div');
      windowItem.className = 'window-item';
      if (window.id === currentWindowId) {
        windowItem.classList.add('current');
      }
      
      // Make window item clickable to switch to that window
      windowItem.style.cursor = 'pointer';
      windowItem.addEventListener('click', () => {
        // Get the active tab in the clicked window
        const activeTab = window.tabs.find(tab => tab.active);
        if (activeTab) {
          // Focus the window and activate the tab
          chrome.windows.update(window.id, { focused: true }, () => {
            chrome.tabs.update(activeTab.id, { active: true });
          });
        }
      });
      
      const windowInfo = document.createElement('div');
      windowInfo.className = 'window-info';
      
      const windowNumber = document.createElement('div');
      windowNumber.className = 'window-number';
      windowNumber.textContent = `Window ${index + 1}`;
      if (window.id === currentWindowId) {
        windowNumber.textContent += ' (Current)';
      }
      
      const windowTitle = document.createElement('div');
      windowTitle.className = 'window-title';
      // Get the title of the active tab in this window
      const activeTab = window.tabs.find(tab => tab.active);
      windowTitle.textContent = activeTab ? activeTab.title : 'No active tab';
      
      const windowCount = document.createElement('span');
      windowCount.className = 'window-count';
      windowCount.textContent = window.tabs.length;
      
      windowInfo.appendChild(windowNumber);
      windowInfo.appendChild(windowTitle);
      windowItem.appendChild(windowInfo);
      windowItem.appendChild(windowCount);
      windowsList.appendChild(windowItem);
    });
  });
});
