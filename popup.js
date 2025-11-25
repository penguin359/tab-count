// Get the current window's tabs and display the count
chrome.tabs.query({ currentWindow: true }, (tabs) => {
  const tabCount = tabs.length;
  document.getElementById('tabCount').textContent = tabCount;
});
