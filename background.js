// Update badge with current window tab count
function updateBadge() {
  chrome.windows.getCurrent({ populate: true }, (window) => {
    if (window && window.tabs) {
      const tabCount = window.tabs.length;
      chrome.action.setBadgeText({ text: tabCount.toString() });
      chrome.action.setBadgeBackgroundColor({ color: '#764ba2' });
    }
  });
}

// Update badge when tabs are created, removed, or updated
chrome.tabs.onCreated.addListener(updateBadge);
chrome.tabs.onRemoved.addListener(updateBadge);
chrome.tabs.onAttached.addListener(updateBadge);
chrome.tabs.onDetached.addListener(updateBadge);

// Update badge when windows change focus
chrome.windows.onFocusChanged.addListener(updateBadge);

// Initial badge update
updateBadge();
