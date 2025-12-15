document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL NAVBAR EFFECT (Transparent -> White)
    const navbar = document.querySelector('.navbar');
    // Only apply if navbar is meant to be fixed (homepage)
    if (navbar && !navbar.style.position.includes('relative')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. SCROLL REVEAL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // 3. MOBILE HAMBURGER MENU
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // 4. FAQ ACCORDION LOGIC
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            const icon = this.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-plus')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
        });
    }

    // 5. PRODUCT DETAIL PAGE LOGIC (DATABASE)
    const productDatabase = {
        'derock-mining': {
            title: "Derock Super Mining XL",
            category: "HEAVY DUTY TIRES",
            img: "assets/product-derock.jpg", 
            description: "Engineered for the toughest terrains. The Derock Mining XL features cut-resistant compounds and an extra-deep tread depth to ensure longevity in quarry and mining operations.",
            brand: "Derock",
            code: "DR-500-XL",
            app: "Mining / Quarry / Off-Road"
        },
        'rapid-highway': {
            title: "Rapid Highway Star",
            category: "COMMERCIAL TIRES",
            img: "assets/product-rapid.jpg", 
            description: "Maximize your fleet's efficiency. The Highway Star offers low rolling resistance for fuel economy and a specialized rib design for wet weather stability.",
            brand: "Rapid",
            code: "RP-HWAY-22",
            app: "Logistics / Highway Transport"
        },
        'ind-oil': {
            title: "TPM Hydraulic 68",
            category: "INDUSTRIAL LUBRICANTS",
            img: "assets/product-oil.jpg", 
            description: "Premium anti-wear hydraulic oil designed for high-pressure industrial systems. Provides excellent oxidation stability and corrosion protection.",
            brand: "TPM Oils",
            code: "TPM-HYD-68",
            app: "Hydraulic Systems / Heavy Machinery"
        },
        'tools-jack': {
            title: "Hydraulic Jack 50T",
            category: "TOOLS & HARDWARE",
            img: "assets/product-jack.jpg", 
            description: "Heavy-duty lifting jack with a 50-ton capacity. Constructed from high-grade steel with safety overload protection.",
            brand: "TPM Tools",
            code: "JACK-50T",
            app: "Workshop / Field Repair"
        }
    };

    // Check if we are on the detail page
    if (window.location.pathname.includes('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productDatabase[productId];

        if (product) {
            // Fill Data
            document.getElementById('p-title').textContent = product.title;
            document.getElementById('p-category').textContent = product.category;
            document.getElementById('p-desc').textContent = product.description;
            document.getElementById('p-brand').textContent = product.brand;
            document.getElementById('p-code').textContent = product.code;
            document.getElementById('p-app').textContent = product.app;

            // Handle Image
            const imgEl = document.getElementById('p-img');
            imgEl.src = product.img; 
            imgEl.onerror = function() {
                this.style.display = 'none';
                document.getElementById('p-icon-placeholder').style.display = 'block';
            };
        } else {
            // Product Not Found
            document.getElementById('p-title').textContent = "Product Not Found";
            document.getElementById('p-desc').textContent = "Please return to the products page.";
            document.querySelector('.specs-box').style.display = 'none';
        }
    }

});