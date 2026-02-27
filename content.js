console.log("content script running...")


chrome.runtime.onMessage.addListener((message) => {
    console.log(message)
})


/*CSS Changes List
  - Grid lines on the body element  - Layout design?
    - Background - blue
    - Lines - white
*/