// components/runningPlatform.js
// platform detection function
function getPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('win') !== -1) {
        return 'Windows';
    } else if (userAgent.indexOf('mac') !== -1) {
        return 'Mac';
    } else {
        return 'Unknown';
    }
}

// Function to unhide the content div based on the platform
function showPlatformRequirements() {
    const platform = getPlatform();

    // Get all the content divs
    const windowsRequirements= document.getElementById('windows-requirements');
    const macRequirements = document.getElementById('mac-requirements');
    const unknownContent = document.getElementById('unknown-content');

    // Show the relevant content div based on the platform
    switch (platform) {
        case 'Windows':
            windowsRequirements.style.display = 'block';
            break;
        case 'Mac':
            macRequirements.style.display = 'block';
            break;
        default:
            unknownContent.style.display = 'block';
            break;
    }
}

// Call the showPlatformSpecificContent function once the page is loaded
window.addEventListener('load', showPlatformRequirements);
