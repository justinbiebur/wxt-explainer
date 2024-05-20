export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log('content script');
    const timeStampDiv = document.createElement('div');
    timeStampDiv.textContent = '';
    document.body.appendChild(timeStampDiv);

    browser.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        timeStampDiv.textContent = "time stamp is " + request.message;
      }
    );
  },
});
