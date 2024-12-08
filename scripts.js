function goToPage4() {
    // Specify the URL of the page to navigate to
    const url = "ABOUT.html"; // Change this to the path of your page
    // Navigate to the specified URL within the website
    window.location.href = url;
}
  // JavaScript function to navigate to another page within the website
   function goToPage() {
    // Specify the relative URL of the page you want to go to
    const url = "HOT.html"; // Change this to the actual relative URL of the page
    // Navigate to the specified page within the website
    window.location.href = url;
}
function goToPage2() {
    // Specify the URL of the page to navigate to
    const url = "COLD.html"; // Change this to the path of your page
    // Navigate to the specified URL within the website
    window.location.href = url;
}
function goToPage3() {
    // Specify the URL of the page to navigate to
    const url = "PASTRIES.html"; // Change this to the path of your page
    // Navigate to the specified URL within the website
    window.location.href = url;
}
    // Select the links and sections by ID
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const aboutSection = document.getElementById('about');
    const homeSection = document.getElementById('home');

    // Add event listeners for the links
    homeLink.addEventListener('click', function () {
        homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    aboutLink.addEventListener('click', function () {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });