document.addEventListener('DOMContentLoaded', function() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navItems = [
        { name: 'Hem', href: 'index.html' },
        { name: 'Guider', href: 'guider.html' },
        { name: 'Artiklar', href: 'artiklar.html' },
        { name: 'Produkter', href: 'produkter.html' },
        { name: 'Nyheter', href: 'nyheter.html' },
        { name: 'Om oss', href: 'om.html' }
    ];

    let menuLinks = '';
    navItems.forEach(item => {
        const isActive = item.href === currentPage;
        const className = isActive ? 'text-primary px-3 py-2 rounded-md text-sm font-medium border-b-2 border-primary' : 'text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium';
        menuLinks += `<a href="${item.href}" class="${className}">${item.name}</a>`;
    });

    const mobileMenuLinks = menuLinks.replace(/class="[^"]*"/g, 'class="block px-6 py-4 text-lg font-medium text-secondary hover:text-primary hover:bg-gray-50 transition duration-300"');

    const navHTML = `
<nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <a href="index.html" class="inline-flex items-center">
                    <i data-feather="shield" class="text-primary h-8 w-8"></i>
                    <span class="ml-2 text-xl font-bold text-secondary">KRISGUIDEN</span>
                </a>
            </div>
            <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                ${menuLinks}
            </div>
            <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Öppna meny</span>
                    <i data-feather="menu" class="block h-6 w-6"></i>
                </button>
            </div>
        </div>
    </div>
</nav>

<!-- Mobile menu overlay and panel -->
<div class="md:hidden">
    <!-- Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity duration-300"></div>
    
    <!-- Slide-in panel -->
    <div id="mobile-menu" class="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300">
        <div class="flex justify-between items-center p-6 border-b">
            <h3 class="text-lg font-semibold text-secondary">Meny</h3>
            <button id="mobile-menu-close" class="p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100">
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
        </div>
        <div class="p-4">
            ${mobileMenuLinks}
        </div>
    </div>
</div>
    `;

    navPlaceholder.innerHTML = navHTML;

    // Mobile menu toggle functionality
    const menuButton = navPlaceholder.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (menuButton && mobileMenu && mobileMenuOverlay && mobileMenuClose) {
        const openMobileMenu = () => {
            menuButton.setAttribute('aria-expanded', 'true');
            mobileMenuOverlay.classList.remove('hidden');
            mobileMenu.classList.remove('translate-x-full');
            
            // Change icon to X
            const icon = menuButton.querySelector('i[data-feather]');
            if (icon) {
                icon.setAttribute('data-feather', 'x');
                if (typeof feather !== 'undefined') {
                    feather.replace(icon);
                }
            }
        };

        const closeMobileMenu = () => {
            menuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            
            // Change icon back to menu
            const icon = menuButton.querySelector('i[data-feather]');
            if (icon) {
                icon.setAttribute('data-feather', 'menu');
                if (typeof feather !== 'undefined') {
                    feather.replace(icon);
                }
            }
        };

        // Open menu when hamburger button is clicked
        menuButton.addEventListener('click', openMobileMenu);

        // Close menu when close button is clicked
        mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close menu when overlay is clicked
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a menu link
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                closeMobileMenu();
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
                closeMobileMenu();
            }
        });

        // Prevent closing when clicking inside the menu panel
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Re-initialize Feather icons if needed (assuming Feather is loaded elsewhere)
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
