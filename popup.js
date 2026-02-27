console.log("pop up running...")
async function popupMsg() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab)
    console.log([tab])

    const layoutBtn = document.querySelector("btn")
    layoutBtn.addEventListener('click', (event) => {

    });
}