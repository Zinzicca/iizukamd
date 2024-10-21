
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function hideTabs(tabs) {
    tabs.forEach(tabId => {
        document.getElementById(tabId).style.display = 'none';
    });
}

function showAllTabs() {
    console.log("showAllTabs called"); //debugging line
    const allTabs = document.querySelectorAll('.tab-link');
    allTabs.forEach(tab => {
        tab.style.display = 'block';
    })
}

function hideBackButton(tab) {
    console.log("hideBackButton called with:", tab); // Debugging line
    tab.forEach(tabId => {
        const element = document.getElementById(tabId);
        if (element) {
            element.style.display = 'none';
            console.log("Hid element:", tabId); // Debugging line
        } else {
            console.log("Element not found:", tabId); // Debugging line
        }
    });
}

function showBackButton() {
    const backButton = document.getElementById('backToHome');
    if (backButton) {
        backButton.style.display = 'block';
    }
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.tab-content');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    // Handle the visibility of tab buttons
    const tabsToHide = ['section1Tab', 'section2Tab', 'section3Tab']; // IDs of tabs to hide

    if (pageId === 'page-2') {
        hideTabs(tabsToHide);
        showBackButton();
    }
    else {
        showAllTabs();
        hideBackButton(['backToHome'])
    }
}