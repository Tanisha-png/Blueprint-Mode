console.log("pop up running...")
async function popupMsg() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);


    const layoutBtn = document.querySelector("btn")
    layoutBtn.addEventListener('click', (event) => {

    });
}