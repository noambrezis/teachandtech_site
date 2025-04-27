// Mobile menu implementation for Teach & Tech website
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const nav = document.querySelector('nav');
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(mobileMenuButton, nav.firstChild);

    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Clone navigation links
    const navLinks = document.querySelector('.nav-links').cloneNode(true);
    mobileMenu.appendChild(navLinks);
    document.body.appendChild(mobileMenu);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            color: var(--primary-color);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1002;
        }

        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-color: white;
            z-index: 1001;
            padding: 1rem;
            box-shadow: -2px 0 5px rgba(0,0,0,0.1);
            overflow-y: auto;
        }

        .mobile-menu .nav-links {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-top: 4rem;
        }

        .mobile-menu .nav-links a {
            display: block;
            padding: 1rem;
            font-size: 1.2rem;
            text-align: right;
            text-decoration: none;
            color: var(--text-color);
            width: 100%;
            transition: background-color 0.3s;
        }

        .mobile-menu .nav-links a:hover {
            background-color: var(--light-bg);
        }

        .mobile-menu.active {
            display: block;
        }

        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block;
            }
            
            .nav-links {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        mobileMenuButton.innerHTML = mobileMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Prevent clicks inside the menu from closing it
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 