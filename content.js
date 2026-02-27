console.log("content script running...")


chrome.runtime.onMessage.addListener((message) => {
    // console.log(message.activate) // True
    if (message.activate === true) {
        document.body.style.transition = 'background-color 0.7s ease';

        setTimeout(() => {
            document.body.style.backgroundColor = "#0241A2";
            document.body.style.backgroundImage =
                "linear-gradient(rgba(255, 255, 255, .1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .1) 1px, transparent 1px)"
            document.body.style.backgroundSize = "20px 20px";
        }, 50)

        document.querySelectorAll('div, span, button, strong').forEach(el => {
            el.style.cssText += 'background-color: rgba(2, 65, 162, 0.3) !important; border: 1px solid rgba(255, 255, 255, 0.5) !important; color: white !important'
        })

        document.querySelectorAll('p, h1, h2, h3, div, header, footer, li, a').forEach(el => {
            el.style.setProperty('color', 'white', 'important');
        });

        document.querySelectorAll('img, video, svg, canvas, span').forEach(media => {
            media.style.filter = "grayscale(100%) contrast(200%) brightness(1.2) opacity(0.7)";

        })

        console.log("Blueprint Mode Activated 😎");
    }

})


/*CSS Changes List
    - Grid lines on the body element  - Layout design?
    - Background - blue - Access the body - Image? Generate Grid lines?
    - Div - Transparents
    - Text Color - White
    - Borders - White
    - Images?

*/