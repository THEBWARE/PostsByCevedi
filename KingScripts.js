// List of scripts in the PublicScripts folder
const scripts = [
    "script1.lua",
    "script2.lua",
    "script3.lua"
];

// Base URL for the scripts
const baseUrl = "https://thebware.github.io/PostsByCevedi/PublicScripts/";

// Get the container for the script list
const scriptList = document.getElementById("script-list");

// Loop through the scripts and create links
scripts.forEach(script => {
    const scriptUrl = `${baseUrl}${encodeURIComponent(script)}`;
    const loadString = `loadstring(game:HttpGet("${scriptUrl}"))()`;

    const scriptItem = document.createElement("div");
    scriptItem.className = "script-item";

    const scriptName = document.createElement("span");
    scriptName.className = "script-name";
    scriptName.textContent = script;

    const copyButton = document.createElement("button");
    copyButton.className = "quantum-button";
    copyButton.textContent = "Copy Loadstring";
    copyButton.onclick = () => {
        navigator.clipboard.writeText(loadString).then(() => {
            alert(`Copied loadstring for ${script}: \n${loadString}`);
        });
    };

    scriptItem.appendChild(scriptName);
    scriptItem.appendChild(copyButton);
    scriptList.appendChild(scriptItem);
});
