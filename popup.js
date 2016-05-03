function getCurrentTabUrl(callback) {
    chrome.tabs.query({ url: ['*://*.youtube.com/*', '*://youtube.com/*',
                                '*://*.twitter.com/*', '*://twitter.com/*',
                                '*://*.facebook.com/*', '*://facebook.com/*',
                                '*://*.reddit.com/*', '*://reddit.com/*',]
    }, function(tabs) {
        // foo bar stuff here
        callback(tabs);
    });
}

function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(tabs) {
        for (tab in tabs) {
            chrome.tabs.get(tabs[tab].id, function(tab) {
                var sites = ['twitter', 'facebook', 'reddit', 'youtube']
                if (tab.title != 'undefined') {
                    if (sites.indexOf(tab.title.toLowerCase()) >= 1) {
                        alert(tab.title);
                    }
                }
            })
        }
    })
});
