// components/runningPlatform.js
// platform detection function
const platform = getPlatform();
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
function showPlatform() {
    
    // Get all the content divs
    const windowsContent= [...document.querySelectorAll('.win')];
    const macContent= [...document.querySelectorAll('.mac')];
    const unknownContent = document.getElementById('unknown-content');
    const winCmds = [...document.querySelectorAll('.winCmd')];
    const macCmds = [...document.querySelectorAll('.macCmd')];

// get all the platform buttons
const windowsButton=document.getElementById("showWindows");
const macButton=document.getElementById("showMac");
// Show an alert based on which platform button is pressed.
function ariaAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;
    alertDiv.style.position = 'absolute';
    alertDiv.style.left = '-9999px';
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 1000);
}
if ((windowsContent.length>0 && macContent.length>0 && unknownContent && windowsButton && macButton) || (winCmds.length>0 && macCmds.length>0)) {
// Unhide the relevant content div based on the platform selected, be it automatically or via the buttons
    switch (platform) {
        case 'Windows':
if(windowsContent.length>0) {
    windowsContent.forEach((element, index) => {
        element.style.display = "block";
    });
    }
                if(winCmds.length>0 && macCmds.length>0) {
                    winCmds.forEach((element, index) => {
                element.style.display = "block";
            });
            macCmds.forEach((element, index) => {
                element.style.display = "none";
            });

                }
    
        windowsButton.style.display="none";
            macButton.style.display="block";

            break;
        case 'Mac':
if(macContent.length>0) {
        macContent.forEach((element, index) => {
            element.style.display = "block";
        });
    }

            macButton.style.display="none";
            windowsButton.style.display="block";
            if(winCmds.length>0 && macCmds.length>0) {
                winCmds.forEach((element, index) => {
            element.style.display = "none";
        });
        macCmds.forEach((element, index) => {
            element.style.display = "block";
        });

            }

            break;
default:
            unknownContent.style.display = 'block';
            macButton.style.display="block";
            windowsButton.style.display="block";
            
            break;
    }
windowsButton.addEventListener("click", function() {
if(windowsContent.length>0) {
    ariaAlert('You are now viewing the Windows content for this section.');
        windowsContent.forEach((element, index) => {
            element.style.display = "block";
        });
    }
    windowsButton.style.display="none";
    if(macContent.length>0) {
            macContent.forEach((element, index) => {
                element.style.display = "none";
            });
            }
macButton.style.display="block";
if(winCmds.length>0 && macCmds.length>0) {
    ariaAlert('You are now viewing the Windows keyboard commands for this section.');
    winCmds.forEach((element, index) => {
element.style.display = "block";
});
macCmds.forEach((element, index) => {
element.style.display = "none";
});

}

unknownContent.style.display="none";
});
macButton.addEventListener("click", function() {
    if(windowsContent.length>0) {
            windowsContent.forEach((element, index) => {
                element.style.display = "none";
            });
            }
    windowsButton.style.display="block";
    if(macContent.length>0) {
        ariaAlert('You are now viewing the Mac OS content for this section.');
            macContent.forEach((element, index) => {
                element.style.display = "block";
            });
            }
    macButton.style.display="none";
    if(winCmds.length>0 && macCmds.length>0) {
        ariaAlert('You are now viewing the Mac OS keyboard commands for this section.');
        winCmds.forEach((element, index) => {
    element.style.display = "none";
});
macCmds.forEach((element, index) => {
    element.style.display = "block";
    
});

    }
unknownContent.style.display="none";
    });
}    
}

// Call the showPlatformSpecificContent function once the page is loaded
window.addEventListener('load', showPlatform);
