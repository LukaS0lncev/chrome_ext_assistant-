// background.js // Вызывается, когда пользователь нажимает на действие браузера.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Отправить сообщение на активную вкладку
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });