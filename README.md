# Tab Counter - Edge Extension

A simple browser extension for Microsoft Edge that displays the number of open tabs in the current window.

## Features

- 📊 Displays real-time count of open tabs in the current window
- 🎨 Beautiful gradient UI design
- ⚡ Lightweight and fast

## Installation

1. Open Microsoft Edge
2. Navigate to `edge://extensions/`
3. Enable "Developer mode" using the toggle in the bottom-left corner
4. Click "Load unpacked"
5. Select the folder containing these extension files
6. The Tab Counter icon will appear in your toolbar

## Usage

Simply click the Tab Counter icon in your browser toolbar to see how many tabs are currently open in the active window.

## Files

- `manifest.json` - Extension configuration
- `popup.html` - Popup interface
- `popup.js` - Tab counting logic
- `popup.css` - Styling
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons

## Permissions

This extension requires the `tabs` permission to count the open tabs in the current window.
