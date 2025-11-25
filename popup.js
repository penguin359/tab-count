// Get the current window's tabs and display the count
chrome.tabs.query({ currentWindow: true }, (tabs) => {
  const tabCount = tabs.length;
  document.getElementById('tabCount').textContent = tabCount;
});

// Get all tabs across all windows and display the total count
chrome.tabs.query({}, (tabs) => {
  const totalTabCount = tabs.length;
  document.getElementById('totalTabCount').textContent = totalTabCount;
});
