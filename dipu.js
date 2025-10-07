// Dropdown functionality for navigation menu
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the dropdown menu for this toggle
            const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');
            const arrow = this.querySelector('.dropdown-arrow');
            
            // Close all other dropdowns first
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherMenu = otherToggle.parentElement.querySelector('.dropdown-menu');
                    
                    otherMenu.classList.remove('active');
                    otherToggle.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            if (dropdownMenu.classList.contains('active')) {
                // Close dropdown
                dropdownMenu.classList.remove('active');
                this.classList.remove('active');
            } else {
                // Open dropdown
                dropdownMenu.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            dropdownToggles.forEach(toggle => {
                const dropdownMenu = toggle.parentElement.querySelector('.dropdown-menu');
                
                dropdownMenu.classList.remove('active');
                toggle.classList.remove('active');
            });
        }
    });
    
    // Add click functionality to dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the text of the clicked link
            const linkText = this.textContent.trim();
            
            // You can add your custom functionality here
            console.log('Clicked on:', linkText);
            
            // For now, just show an alert (you can replace this with your actual functionality)
            alert(`You clicked on: ${linkText}`);
            
            // Close the dropdown after clicking
            const dropdownMenu = this.closest('.dropdown-menu');
            const dropdownToggle = this.closest('.nav-item').querySelector('.dropdown-toggle');
            
            dropdownMenu.classList.remove('active');
            dropdownToggle.classList.remove('active');
        });
    });
    
    // Add click functionality to Home link
    const homeLink = document.querySelector('.nav-link:not(.dropdown-toggle)');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Home clicked');
            alert('Home page clicked!');
        });
    }
});