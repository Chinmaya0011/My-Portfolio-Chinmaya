 // Function to scroll to the top of the page
 function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show or hide the "Go to Top" button based on the scroll position
window.onscroll = function() {
    showGoToTopButton();
};

function showGoToTopButton() {
    var button = document.getElementById("goToTopBtn");

    // Display the button when the user scrolls down 20px from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}