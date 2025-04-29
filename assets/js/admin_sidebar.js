// assets/js/admin_sidebar.js

document.addEventListener('DOMContentLoaded', () => {
    const currencyBtn = document.getElementById('currencyBtn');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/admin/currency/modal');
                const modalHTML = await response.text();
                document.body.insertAdjacentHTML('beforeend', modalHTML);
                const modal = document.getElementById('currencyModal');
                if (modal) {
                    modal.style.display = 'block';
                    modal.querySelector('.close').addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
            } catch (error) {
                console.error('Error fetching currency modal:', error);
            }
        });
    }
    const toggleButton = document.getElementById('admin-sidebar-toggle-btn');
    const sidebar = document.getElementById('admin-sidebar');

    function toggleAdminSidebar(e) {
        e.preventDefault();
        if (sidebar && toggleButton) {
            sidebar.classList.toggle('close');
            toggleButton.classList.toggle('rotate');
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleAdminSidebar);
    }

    // Store sidebar state in localStorage
    if (sidebar) {
        const sidebarState = localStorage.getItem('sidebarState');
        if (sidebarState === 'closed') {
            sidebar.classList.add('close');
            toggleButton?.classList.add('rotate');
        }

        // Update localStorage when sidebar state changes
        const observer = new MutationObserver(() => {
            localStorage.setItem('sidebarState', 
                sidebar.classList.contains('close') ? 'closed' : 'open'
            );
        });

        observer.observe(sidebar, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
});

// If you have submenus, you'll need these functions adapted
// function toggleSubMenu(button){ ... }
// function closeAllSubMenus(){ ... }

// Initial state check (optional): ensure sidebar starts closed if desired
document.addEventListener('DOMContentLoaded', () => {
    const currencyBtn = document.getElementById('currencyBtn');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/admin/currency/modal');
                const modalHTML = await response.text();
                document.body.insertAdjacentHTML('beforeend', modalHTML);
                const modal = document.getElementById('currencyModal');
                if (modal) {
                    modal.style.display = 'block';
                    modal.querySelector('.close').addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
            } catch (error) {
                console.error('Error fetching currency modal:', error);
            }
        });
    }
    if (sidebar && !sidebar.classList.contains('close')) {
        // Or uncomment below if you want it open by default
        // sidebar.classList.add('close'); 
    }
    if (toggleButton && !toggleButton.classList.contains('rotate')){
        // toggleButton.classList.add('rotate');
    }
});

// --- Animated Logout Button --- //
document.addEventListener('DOMContentLoaded', () => {
    const currencyBtn = document.getElementById('currencyBtn');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/admin/currency/modal');
                const modalHTML = await response.text();
                document.body.insertAdjacentHTML('beforeend', modalHTML);
                const modal = document.getElementById('currencyModal');
                if (modal) {
                    modal.style.display = 'block';
                    modal.querySelector('.close').addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
            } catch (error) {
                console.error('Error fetching currency modal:', error);
            }
        });
    } // Ensure DOM is loaded

    const logoutButtonStates = {
        'default': {
            '--figure-duration': '100',
            '--transform-figure': 'none',
            '--walking-duration': '100',
            '--transform-arm1': 'none',
            '--transform-wrist1': 'none',
            '--transform-arm2': 'none',
            '--transform-wrist2': 'none',
            '--transform-leg1': 'none',
            '--transform-calf1': 'none',
            '--transform-leg2': 'none',
            '--transform-calf2': 'none'
        },
        'hover': {
            '--figure-duration': '100',
            '--transform-figure': 'translateX(1.5px)',
            '--walking-duration': '100',
            '--transform-arm1': 'rotate(-5deg)',
            '--transform-wrist1': 'rotate(-15deg)',
            '--transform-arm2': 'rotate(5deg)',
            '--transform-wrist2': 'rotate(6deg)',
            '--transform-leg1': 'rotate(-10deg)',
            '--transform-calf1': 'rotate(5deg)',
            '--transform-leg2': 'rotate(20deg)',
            '--transform-calf2': 'rotate(-20deg)'
        },
        'walking1': {
            '--figure-duration': '300',
            '--transform-figure': 'translateX(11px)',
            '--walking-duration': '300',
            '--transform-arm1': 'translateX(-4px) translateY(-2px) rotate(120deg)',
            '--transform-wrist1': 'rotate(-5deg)',
            '--transform-arm2': 'translateX(4px) rotate(-110deg)',
            '--transform-wrist2': 'rotate(-5deg)',
            '--transform-leg1': 'translateX(-3px) rotate(80deg)',
            '--transform-calf1': 'rotate(-30deg)',
            '--transform-leg2': 'translateX(4px) rotate(-60deg)',
            '--transform-calf2': 'rotate(20deg)'
        },
        'walking2': {
            '--figure-duration': '400',
            '--transform-figure': 'translateX(17px)',
            '--walking-duration': '300',
            '--transform-arm1': 'rotate(60deg)',
            '--transform-wrist1': 'rotate(-15deg)',
            '--transform-arm2': 'rotate(-45deg)',
            '--transform-wrist2': 'rotate(6deg)',
            '--transform-leg1': 'rotate(-5deg)',
            '--transform-calf1': 'rotate(10deg)',
            '--transform-leg2': 'rotate(10deg)',
            '--transform-calf2': 'rotate(-20deg)'
        },
        'falling1': {
            '--figure-duration': '1600',
            '--walking-duration': '400',
            '--transform-arm1': 'rotate(-60deg)',
            '--transform-wrist1': 'none',
            '--transform-arm2': 'rotate(30deg)',
            '--transform-wrist2': 'rotate(120deg)',
            '--transform-leg1': 'rotate(-30deg)',
            '--transform-calf1': 'rotate(-20deg)',
            '--transform-leg2': 'rotate(20deg)'
        },
        'falling2': {
            '--walking-duration': '300',
            '--transform-arm1': 'rotate(-100deg)',
            '--transform-arm2': 'rotate(-60deg)',
            '--transform-wrist2': 'rotate(60deg)',
            '--transform-leg1': 'rotate(80deg)',
            '--transform-calf1': 'rotate(20deg)',
            '--transform-leg2': 'rotate(-60deg)'
        },
        'falling3': {
            '--walking-duration': '500',
            '--transform-arm1': 'rotate(-30deg)',
            '--transform-wrist1': 'rotate(40deg)',
            '--transform-arm2': 'rotate(50deg)',
            '--transform-wrist2': 'none',
            '--transform-leg1': 'rotate(-30deg)',
            '--transform-leg2': 'rotate(20deg)',
            '--transform-calf2': 'none'
        }
    };

    document.querySelectorAll('.logoutButton').forEach(button => {
        // Check if button already has state to avoid re-initializing if script runs multiple times
        if (button.state) return; 

        button.state = 'default'

        // function to transition a button from one state to the next
        let updateButtonState = (button, state) => {
            if (logoutButtonStates[state]) {
                button.state = state
                for (let key in logoutButtonStates[state]) {
                    // Check if the property exists and is a number before parsing
                    let value = logoutButtonStates[state][key];
                    // Ensure CSS variables related to time are treated as numbers for calculation if needed later
                    if (key.endsWith('duration') && !isNaN(parseFloat(value))) {
                        button.style.setProperty(key, `${parseFloat(value)}ms`); // Ensure unit is added if just number
                    } else {
                         button.style.setProperty(key, value);
                    }
                }
            }
        }

        // mouse hover listeners on button
        button.addEventListener('mouseenter', () => {
            if (button.state === 'default') {
                updateButtonState(button, 'hover')
            }
        });
        button.addEventListener('mouseleave', () => {
            if (button.state === 'hover') {
                updateButtonState(button, 'default')
            }
        });

        // click listener on button
        button.addEventListener('click', () => {
            // Prevent triggering animation if already in progress
            if (button.state !== 'default' && button.state !== 'hover') {
                return; 
            }

            button.classList.add('clicked');
            updateButtonState(button, 'walking1');
            setTimeout(() => {
                button.classList.add('door-slammed');
                updateButtonState(button, 'walking2');
                setTimeout(() => {
                    button.classList.add('falling');
                    updateButtonState(button, 'falling1');
                    setTimeout(() => {
                        updateButtonState(button, 'falling2');
                        setTimeout(() => {
                            updateButtonState(button, 'falling3');
                            // --- MODIFICATION --- //
                            // Redirect after the final animation state (falling3) duration
                            // Use a fixed delay or calculate based on falling3 duration? Using fixed 1000ms like original example for now.
                            setTimeout(() => {
                                // Redirect to Symfony logout path
                                window.location.href = '/logout'; 
                                // No need to reset classes/state as we are navigating away
                            }, 500); // Duration of falling3 state
                        }, logoutButtonStates['falling2']['--walking-duration']);
                    }, logoutButtonStates['falling1']['--walking-duration']);
                }, logoutButtonStates['walking2']['--figure-duration']);
            }, logoutButtonStates['walking1']['--figure-duration']);
        });
    });
});