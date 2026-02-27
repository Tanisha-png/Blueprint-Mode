console.log("pop up running...")
async function popupMsg() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab)
    let tabId = tab.id
    console.log(tabId)
    const layoutBtn = document.querySelector("#btn")
    layoutBtn.addEventListener('click', (event) => {
        chrome.tabs.sendMessage(tabId, {activate: true})
    });
}

popupMsg()