document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookieConsent');

    if (!consentStatus) {
        // Show cookie banner if no choice made yet
        showCookieBanner();
    }
});

function showCookieBanner() {
    // Create banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-banner-content">
            <div class="cookie-text">
                <p class="cookie-message">
                    <strong>Vi värdesätter din integritet</strong><br>
                    Denna hemsida använder cookies för att förbättra din upplevelse och ge information om våra tjänster. Genom att fortsätta använda vår hemsida godkänner du vår användning av cookies.
                </p>
            </div>
            <div class="cookie-buttons">
                <button class="cookie-btn cookie-accept" onclick="acceptCookies()">Godkänn alla</button>
                <button class="cookie-btn cookie-settings" onclick="showCookieSettings()">Inställningar</button>
                <button class="cookie-btn cookie-reject" onclick="rejectCookies()">Eftersträd alla</button>
            </div>
        </div>
    `;

    // Style the banner
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(45, 55, 72, 0.95);
        color: white;
        padding: 1.5rem 0;
        z-index: 1000;
        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        border-top: 2px solid #3A7D44;
    `;

    document.body.appendChild(banner);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    console.log('All cookies accepted');
}

function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieBanner();
    console.log('Cookies rejected');
    // Here you could disable non-essential cookies
    // For example: disable analytics, marketing cookies, etc.
}

function showCookieSettings() {
    // Simple settings modal or redirect to privacy policy
    alert('Klicka "Godkänn alla" för att fortsätta använda alla funktioner på hemsidan.\n\nBesök vår Integritetspolicy för mer information om cookies.');
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.remove();
    }
}

// Function to check consent status from other scripts
function hasCookieConsent() {
    return localStorage.getItem('cookieConsent') === 'accepted';
}

// Make functions globally available
window.hasCookieConsent = hasCookieConsent;
window.showCookieSettings = showCookieSettings;
