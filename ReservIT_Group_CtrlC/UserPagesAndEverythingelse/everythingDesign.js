// Dropdown ofr profile and menu
    document.addEventListener('DOMContentLoaded', function() {
        const profileIcon = document.getElementById('UserProfilePic');
        const menuIcon = document.getElementById('MenuBar');
        const profileDropdown = document.getElementById('profileDropdown');
        const menuDropdown = document.getElementById('menuDropdown');

        // profile dropdown
        profileIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            menuDropdown.classList.remove('show');
            profileDropdown.classList.toggle('show');
        });

        // menu dropdown
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.remove('show');
            menuDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function() {
            profileDropdown.classList.remove('show');
            menuDropdown.classList.remove('show');
        });

        profileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        menuDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });



//NavBar Scroll Stickyy
    let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
            // Scrolling down
              navbar.style.top = '-80px'; // hides the navbar (adjust if needed)
            }
            else {
            // Scrolling up
              navbar.style.top = '0';
            }
            lastScrollY = window.scrollY;
        });







// Notifications panel toggle
        const panel = document.getElementById('notificationsPanel');
        const toggle = document.getElementById('notificationToggle');
        const closeBtn = document.getElementById('notificationClose');
        const overlay = document.getElementById('notificationOverlay');

        function openNotifications() {
            panel.style.left = '0px';
            overlay.style.display = 'block';
            toggle.innerHTML = '<i class="fas fa-chevron-left"></i>';
            toggle.style.left = '400px';
        }

        function closeNotifications() {
            panel.style.left = '-400px';
            overlay.style.display = 'none';
            toggle.innerHTML = '<i class="fas fa-chevron-right"></i>';
            toggle.style.left = '0px';
        }

        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (panel.style.left === '0px') {
                closeNotifications();
            } else {
                openNotifications();
            }
        });

        closeBtn.addEventListener('click', closeNotifications);
        overlay.addEventListener('click', closeNotifications);

        // Close notifications when clicking outside
        document.addEventListener('click', function(e) {
            if (!panel.contains(e.target) && e.target !== toggle) {
                closeNotifications();
            }
        });