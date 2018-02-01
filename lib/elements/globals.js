export default {
    colors: {
        pink: '#ff456a',
        pinkH: '#cc1f62',
        blue: '#1476fb',
        white: '#ffffff',
        black: '#242424',
        grey1: '#bfbfbf',
        grey2: '#cdcdcd'
    },
    fonts: {
        body: "'Open Sans', sans-serif",
        title: "'Nunito Sans', sans-serif"
    },
    icons: {
        base: function(icon) {
            return (`url(data:image/svg+xml;base64,${icon}) no-repeat center center`)
        },
        android: {
            width:'12px',
            height:'12px',
            display:'inline-block',
            icon:"PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJBbmRyb2lkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDIwIDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0E0QzYzOSIgZD0iTTE1LjEsNi42SDVDNC43LDYuNiw0LjYsNi44LDQuNiw3djguNUM0LjYsMTUuOCw0LjcsMTYsNSwxNmgxLjh2Mi45QzYuOCwxOS41LDcuMywyMCw4LDIwbDAsMA0KCWMwLjcsMCwxLjItMC41LDEuMi0xLjJWMTZoMS43djIuOWMwLDAuNywwLjUsMS4yLDEuMiwxLjJsMCwwYzAuNywwLDEuMi0wLjUsMS4yLTEuMlYxNmgxLjhjMC4yLDAsMC40LTAuMiwwLjQtMC40VjcNCglDMTUuNSw2LjgsMTUuNCw2LjYsMTUuMSw2LjZ6Ii8+DQo8cGF0aCBmaWxsPSIjQTRDNjM5IiBkPSJNMi44LDYuNkwyLjgsNi42Yy0wLjcsMC0xLjIsMC41LTEuMiwxLjJ2NC45YzAsMC43LDAuNSwxLjIsMS4yLDEuMmwwLDBjMC43LDAsMS4yLTAuNSwxLjItMS4yVjcuOA0KCUM0LDcuMiwzLjUsNi42LDIuOCw2LjZ6Ii8+DQo8cGF0aCBmaWxsPSIjQTRDNjM5IiBkPSJNMTcuMyw2LjZMMTcuMyw2LjZjLTAuNywwLTEuMiwwLjUtMS4yLDEuMnY0LjljMCwwLjcsMC41LDEuMiwxLjIsMS4ybDAsMGMwLjcsMCwxLjItMC41LDEuMi0xLjJWNy44DQoJQzE4LjUsNy4yLDE3LjksNi42LDE3LjMsNi42eiIvPg0KPHBhdGggZmlsbD0iI0E0QzYzOSIgZD0iTTUsNmgxMGMwLjMsMCwwLjUtMC4yLDAuNC0wLjVjLTAuMy0xLjYtMS4zLTIuOS0yLjctMy43bDAuOS0xLjVjMC4xLTAuMSwwLTAuMi0wLjEtMC4zYy0wLjEtMC4xLTAuMiwwLTAuMywwLjENCglsLTAuOSwxLjZjLTAuNy0wLjMtMS41LTAuNS0yLjMtMC41Yy0wLjgsMC0xLjYsMC4yLTIuMywwLjVMNi45LDAuMUM2LjgsMCw2LjcsMCw2LjYsMEM2LjUsMC4xLDYuNCwwLjIsNi41LDAuM2wwLjksMS41DQoJQzYsMi42LDUsMy45LDQuNyw1LjVDNC42LDUuOCw0LjgsNiw1LDZ6IE0xMywzLjdjMCwwLjMtMC4yLDAuNS0wLjUsMC41Yy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVjMC0wLjMsMC4yLTAuNSwwLjUtMC41DQoJQzEyLjgsMy4zLDEzLDMuNSwxMywzLjd6IE03LjUsMy4zQzcuOCwzLjMsOCwzLjUsOCwzLjdDOCw0LDcuOCw0LjIsNy41LDQuMkM3LjMsNC4yLDcuMSw0LDcuMSwzLjdTNy4zLDMuMyw3LjUsMy4zeiIvPg0KPC9zdmc+"
        },
        apple: {
            width:'12px',
            height:'12px',
            display:'inline-block',
            icon:"PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJBcHBsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNBOEIxQjgiIGQ9Ik0xNS40LDEwLjZjMC0yLjUsMi4xLTMuOCwyLjItMy44Yy0xLjItMS43LTMtMi0zLjctMmMtMS42LTAuMi0zLDAuOS0zLjgsMC45cy0yLTAuOS0zLjMtMC45DQoJYy0xLjcsMC0zLjMsMS00LjEsMi41QzAuOSwxMC41LDIuMiwxNSwzLjksMTcuNWMwLjgsMS4yLDEuOCwyLjYsMy4yLDIuNWMxLjMtMC4xLDEuNy0wLjgsMy4zLTAuOHMyLDAuOCwzLjMsMC44DQoJYzEuNCwwLDIuMi0xLjIsMy4xLTIuNWMxLTEuNCwxLjQtMi44LDEuNC0yLjhDMTguMSwxNC43LDE1LjUsMTMuNywxNS40LDEwLjZ6Ii8+DQo8cGF0aCBmaWxsPSIjQThCMUI4IiBkPSJNMTIuOSwzLjJjMC43LTAuOCwxLjItMiwxLTMuMmMtMSwwLTIuMiwwLjctMi45LDEuNWMtMC42LDAuOC0xLjIsMS45LTEuMSwzLjFDMTEuMSw0LjcsMTIuMiw0LDEyLjksMy4yeiIvPg0KPC9zdmc+"
        }
    }
}