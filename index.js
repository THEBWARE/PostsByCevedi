// Function to filter posts based on search input
function searchPosts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const description = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Add event listener to the search input for real-time filtering
document.getElementById('searchInput').addEventListener('input', searchPosts);

// Function to show theater view
function showHolotheater(theaterId) {
    document.getElementById('postList').style.display = 'none';
    document.getElementById('searchBar').style.display = 'none';
    document.getElementById(theaterId).style.display = 'block';
}

// Function to go back to posts
function goBackToPosts() {
    document.querySelectorAll('.holo-theater').forEach(theater => {
        theater.style.display = 'none';
    });
    document.getElementById('postList').style.display = 'block';
    document.getElementById('searchBar').style.display = 'flex';
}

// Functions for Quantum Alert
function showQuantumAlert() {
    document.getElementById('quantumOverlay').style.display = 'block';
    document.getElementById('quantumAlert').style.display = 'block';
}

function hideQuantumAlert() {
    document.getElementById('quantumOverlay').style.display = 'none';
    document.getElementById('quantumAlert').style.display = 'none';
}

// Functions for Xeno Alert
function showXenoAlert() {
    document.getElementById('xenoOverlay').style.display = 'block';
    document.getElementById('xenoAlert').style.display = 'block';
}

function hideXenoAlert() {
    document.getElementById('xenoOverlay').style.display = 'none';
    document.getElementById('xenoAlert').style.display = 'none';
}

// Functions for LDPlayer Alert
function showLdPlayerAlert() {
    document.getElementById('ldPlayerOverlay').style.display = 'block';
    document.getElementById('ldPlayerAlert').style.display = 'block';
}

function hideLdPlayerAlert() {
    document.getElementById('ldPlayerOverlay').style.display = 'none';
    document.getElementById('ldPlayerAlert').style.display = 'none';
}

// Functions for Atlantis Alert
function showAtlantisAlert() {
    document.getElementById('atlantisOverlay').style.display = 'block';
    document.getElementById('atlantisAlert').style.display = 'block';
}

function hideAtlantisAlert() {
    document.getElementById('atlantisOverlay').style.display = 'none';
    document.getElementById('atlantisAlert').style.display = 'none';
}

// Functions for Cevor Executor Alert
function showCevorExecutorAlert() {
    document.getElementById('cevorExecutorOverlay').style.display = 'block';
    document.getElementById('cevorExecutorAlert').style.display = 'block';
}

function hideCevorExecutorAlert() {
    document.getElementById('cevorExecutorOverlay').style.display = 'none';
    document.getElementById('cevorExecutorAlert').style.display = 'none';
}

// Event listeners for overlays
document.getElementById('quantumOverlay').addEventListener('click', hideQuantumAlert);
document.getElementById('xenoOverlay').addEventListener('click', hideXenoAlert);
document.getElementById('ldPlayerOverlay').addEventListener('click', hideLdPlayerAlert);
document.getElementById('atlantisOverlay').addEventListener('click', hideAtlantisAlert);
document.getElementById('cevorExecutorOverlay').addEventListener('click', hideCevorExecutorAlert);

// Function to copy text to clipboard with fallback
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Copied to clipboard!'))
            .catch(() => fallbackCopyToClipboard(text));
    } else {
        fallbackCopyToClipboard(text);
    }
}

// Fallback method for copying text to clipboard
function fallbackCopyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('Copied to clipboard!');
    } catch (err) {
        alert('Failed to copy text. Please manually copy the text.');
    }
    document.body.removeChild(textarea);
}

// Function to copy the script to clipboard
function copyScript() {
    const scriptCode = document.getElementById('scriptCode').textContent;
    copyToClipboard(scriptCode);
}

// Function to copy the Thao Hub script to clipboard
function copyThaoHubScript() {
    const scriptCode = document.getElementById('thaoHubScriptCode').textContent;
    copyToClipboard(scriptCode);
}

// Function to copy the Cevor MM2V5 script to clipboard
function copyCevorMM2Script() {
    const scriptCode = document.getElementById('cevorMM2ScriptCode').textContent;
    copyToClipboard(scriptCode);
}

// Function to copy the AI Scripts 2025 script to clipboard
function copyAIScripts() {
    const scriptCode = document.getElementById('aiScriptsCode').textContent;
    copyToClipboard(scriptCode);
}

// Function to show SSS Theater
function showSSSTheater() {
    const school = prompt("Enter your school name:");
    if (school && school.toLowerCase() === "west lakes preparatory academy") {
        document.getElementById('postList').style.display = 'none';
        document.getElementById('searchBar').style.display = 'none';
        document.getElementById('sssTheater').style.display = 'block';
        document.getElementById('sssVideo').src = "https://drive.google.com/file/d/1tAKhQB3Dp7gwC4hQ-2w8olcdT3vw1ThO/preview";
    } else {
        document.getElementById('postList').style.display = 'none';
        document.getElementById('searchBar').style.display = 'none';
        document.getElementById('sssTheater').style.display = 'block';
        document.getElementById('sssVideo').style.display = 'none';
        document.getElementById('sssAccessDenied').style.display = 'block';
    }
}

// Function to show SSS Download Alert
function showSSSDownloadAlert() {
    document.getElementById('sssOverlay').style.display = 'block';
    document.getElementById('sssDownloadAlert').style.display = 'block';
}

// Function to hide SSS Download Alert
function hideSSSDownloadAlert() {
    document.getElementById('sssOverlay').style.display = 'none';
    document.getElementById('sssDownloadAlert').style.display = 'none';
}

// Event listener for SSS overlay
document.getElementById('sssOverlay').addEventListener('click', hideSSSDownloadAlert);
