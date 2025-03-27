function copyLink(url, event) {
    navigator.clipboard.writeText(url).then(() => {
        let tooltip = document.createElement("div");
        tooltip.innerText = "Link copied!";
        tooltip.style.position = "absolute";
        tooltip.style.background = "#000";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "14px";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.2)";
        tooltip.style.zIndex = "1000";

        let button = event.target;
        let rect = button.getBoundingClientRect();
        tooltip.style.top = `${rect.top - 30}px`;
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.transform = "translateX(-50%)";

        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}
