// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


// //example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });

// async function getCurrentTab() {/* ... */}
// let tab = await getCurrentTab();
function doInCurrentTab(tabCallback) {
  console.log("idk2");
  chrome.tabs.query(
      { currentWindow: true, active: true },
      function (tabArray) { tabCallback(tabArray[0]); }
  );
}
var activeTabId;
doInCurrentTab( function(tab){
  console.log("idk");
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['test.js']
  });
} );

// "urlFilter" : "app.2dc7cfd7.js",
//       "regexFilter" : "/^https:\\/\\/wearefoodstuff\\.co\\.uk\/js\/app\\.[\\w]*\\.js$/"
// chrome.webRequest.onBeforeRequest.addListener(
//   ({ url }) => {
//     if (!/^https:\/\/wearefoodstuff\.co\.uk\/js\/app\.[\w]*\.js$/.test(url)) return;
//     return {
//       redirectUrl: "https://raw.githubusercontent.com/lollobaldo/input-validation-removal/master/src/edited/app.js"
//     };
//   },
//   {urls: ["*://wearefoodstuff.co.uk/*"]},
//   ["blocking"]
// );
