document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 0. LANGUAGE CONFIGURATION
    // =========================================
    
    // Default to English or load from LocalStorage
    let currentLang = localStorage.getItem('site-lang') || 'en';

    // THE TRANSLATION DICTIONARY
    // You will use these keys (e.g., 'nav.home') in your HTML later.
const translations = {
    en: {
        'nav.services': 'Services',
        'nav.about': 'About Us',
        'nav.products': 'Products',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'hero.title': 'Powering Modern Industry',
        'hero.desc': 'Reliable engineering solutions and raw material supply chain management. We keep your business moving.',
        'hero.btn': 'View Products',
        
        // Index Page Keys
        'serv.title': 'Our Capabilities',
        'serv.viewall': 'View All',
        'serv.card1.title': 'Precision Engineering',
        'serv.card1.desc': 'High-tolerance component manufacturing and structural design.',
        'serv.card2.title': 'Material Supply',
        'serv.card2.desc': 'Direct sourcing of steel, polymers, and industrial raw materials.',
        'serv.card3.title': 'Maintenance & Safety',
        'serv.card3.desc': 'Comprehensive site safety audits and machinery maintenance.',
        'brand.title': 'Official Distributor For',
        
        // Footer Keys
        'footer.links': 'Quick Links',
        'footer.desc': 'Engineering the future with precision and integrity.',
        'footer.contact': 'Contact',
        
        // products.html Keys
        'page.products.title': 'PRODUCT CATALOG',
        'card.derock.cat': 'Heavy Tires',
        'card.derock.title': 'Derock Super Mining',
        'card.derock.desc': 'Heavy duty compound for rocky terrain.',
        'card.rapid.cat': 'Commercial',
        'card.rapid.title': 'Rapid Highway Star',
        'card.rapid.desc': 'Long-distance durability for logistics fleets.',
        'card.oil.cat': 'Lubricants',
        'card.oil.title': 'TPM Hydraulic 68',
        'card.oil.desc': 'High-viscosity oil for heavy machinery.',
        'card.jack.cat': 'Tools',
        'card.jack.title': 'Hydraulic Jack 50T',
        'card.jack.desc': '50-Ton lifting capacity for heavy equipment.',
        
        // product-detail.html Keys
        'prod.back': 'Back to Catalog',
        'prod.specs': 'Specifications',
        'prod.specs.brand': 'Brand',
        'prod.specs.code': 'Model Code',
        'prod.specs.app': 'Application',
        'prod.request': 'Request Quote', // Button text
        'prod.notfound': 'Product Not Found',
        'prod.return': 'Please return to the products page.',

        // faq.html Keys
        'page.faq.title': 'F.A.Q.',
        'faq.q1': 'Do you ship internationally?',
        'faq.a1': 'Yes, we have logistics partners that handle shipping to major industrial hubs across Asia and Europe.',
        'faq.q2': 'What is the warranty on tires?',
        'faq.a2': 'All our heavy-duty tires come with a standard 12-month manufacturer warranty against defects.',
        'faq.q3': 'Can I request a custom part?',
        'faq.a3': 'Absolutely. Visit our Services page to learn about our Custom Fabrication options or contact us via WhatsApp.',
        'faq.q4': 'What payment methods do you accept?',
        'faq.a4': 'We accept Bank Transfers (BCA/Mandiri) for local clients, and Letter of Credit (L/C) for large international orders.',
        
        // about.html Keys
        'page.about.title': 'WHO WE ARE',
        'about.h2': 'DRIVING INDUSTRY FORWARD SINCE 2010',
        'about.p1': 'TPM Industrial started as a small tire distributor and has grown into a comprehensive industrial solutions provider. We believe in raw power, precision engineering, and unbreakable supply chains.',
        'about.h3': 'OUR MISSION',
        'about.p2': 'To provide high-grade industrial components with zero-delay logistics. We partner with the world\'s leading manufacturers like Derock and Rapid to bring you quality you can trust.',
        
        // services.html Keys
        'page.services.title': 'OUR SERVICES',
        'service.card1.title': 'Custom Fabrication',
        'service.card1.desc': "We don't just sell parts; we make them. Our workshop creates custom fittings for unique machinery requirements.",
        'service.card2.title': '24/7 Logistics',
        'service.card2.desc': 'Our fleet is ready to deliver critical components anywhere in the region within 24 hours.',
        'service.card3.title': 'Safety Audits',
        'service.card3.desc': 'Certified engineers inspect your site to ensure full compliance with industrial safety regulations.',
        'service.card4.title': 'On-Site Repair',
        'service.card4.desc': 'Our mobile mechanic teams can perform emergency repairs on heavy loaders and excavators directly at your site.',

    },
    id: {
        'nav.services': 'Layanan',
        'nav.about': 'Tentang Kami',
        'nav.products': 'Produk',
        'nav.faq': 'FAQ',
        'nav.contact': 'Hubungi',
        'hero.title': 'Menggerakkan Industri Modern',
        'hero.desc': 'Solusi teknik andal dan manajemen rantai pasok bahan baku. Kami menjaga bisnis Anda terus bergerak.',
        'hero.btn': 'Lihat Produk',

        // Index Page Keys
        'serv.title': 'Kemampuan Kami',
        'serv.viewall': 'Lihat Semua',
        'serv.card1.title': 'Teknik Presisi',
        'serv.card1.desc': 'Manufaktur komponen toleransi tinggi dan desain struktural.',
        'serv.card2.title': 'Pasokan Material',
        'serv.card2.desc': 'Sumber langsung baja, polimer, dan bahan baku industri.',
        'serv.card3.title': 'Perawatan & K3',
        'serv.card3.desc': 'Audit keselamatan lokasi yang komprehensif dan pemeliharaan mesin.',
        'brand.title': 'Distributor Resmi Untuk',

        // Footer Keys
        'footer.links': 'Tautan Cepat',
        'footer.desc': 'Merekayasa masa depan dengan presisi dan integritas.',
        'footer.contact': 'Kontak',

        // products.html Keys
        'page.products.title': 'KATALOG PRODUK',
        'card.derock.cat': 'Ban Alat Berat',
        'card.derock.title': 'Derock Super Mining',
        'card.derock.desc': 'Kompon tugas berat untuk medan berbatu.',
        'card.rapid.cat': 'Komersial',
        'card.rapid.title': 'Rapid Highway Star',
        'card.rapid.desc': 'Daya tahan jarak jauh untuk armada logistik.',
        'card.oil.cat': 'Pelumas',
        'card.oil.title': 'TPM Hydraulic 68',
        'card.oil.desc': 'Oli viskositas tinggi untuk alat berat.',
        'card.jack.cat': 'Perkakas',
        'card.jack.title': 'Dongkrak Hidrolik 50T',
        'card.jack.desc': 'Kapasitas angkat 50 ton untuk alat berat.',

        // product-detail.html Keys
        'prod.back': 'Kembali ke Katalog',
        'prod.specs': 'Spesifikasi',
        'prod.specs.brand': 'Merek',
        'prod.specs.code': 'Kode Model',
        'prod.specs.app': 'Aplikasi',
        'prod.request': 'Minta Penawaran',
        'prod.notfound': 'Produk Tidak Ditemukan',
        'prod.return': 'Silakan kembali ke halaman produk.',

        // faq.html Keys
        'page.faq.title': 'F.A.Q.',
        'faq.q1': 'Apakah Anda mengirim secara internasional?',
        'faq.a1': 'Ya, kami memiliki mitra logistik yang menangani pengiriman ke pusat industri utama di seluruh Asia dan Eropa.',
        'faq.q2': 'Apa garansi ban?',
        'faq.a2': 'Semua ban alat berat kami dilengkapi dengan garansi pabrik standar 12 bulan terhadap cacat.',
        'faq.q3': 'Bisakah saya meminta bagian yang dipesan khusus?',
        'faq.a3': 'Tentu. Kunjungi halaman Layanan kami untuk mempelajari opsi Fabrikasi Kustom kami atau hubungi kami melalui WhatsApp.',
        'faq.q4': 'Metode pembayaran apa yang Anda terima?',
        'faq.a4': 'Kami menerima Transfer Bank (BCA/Mandiri) untuk klien lokal, dan Letter of Credit (L/C) untuk pesanan internasional besar.',

        // about.html Keys
        'page.about.title': 'SIAPA KAMI',
        'about.h2': 'MEMAJUKAN INDUSTRI SEJAK 2010',
        'about.p1': 'TPM Industrial dimulai sebagai distributor ban kecil dan telah berkembang menjadi penyedia solusi industri yang komprehensif. Kami percaya pada kekuatan mentah, rekayasa presisi, dan rantai pasokan yang tidak terputus.',
        'about.h3': 'MISI KAMI',
        'about.p2': 'Menyediakan komponen industri bermutu tinggi dengan logistik tanpa penundaan. Kami bermitra dengan produsen terkemuka dunia seperti Derock dan Rapid untuk memberikan kualitas yang dapat Anda percaya.',
        
        // services.html Keys
        'page.services.title': 'LAYANAN KAMI',
        'service.card1.title': 'Fabrikasi Kustom',
        'service.card1.desc': 'Kami tidak hanya menjual suku cadang; kami membuatnya. Bengkel kami menciptakan perlengkapan kustom untuk kebutuhan mesin yang unik.',
        'service.card2.title': 'Logistik 24/7',
        'service.card2.desc': 'Armada kami siap mengirimkan komponen penting di mana saja di wilayah ini dalam waktu 24 jam.',
        'service.card3.title': 'Audit Keselamatan',
        'service.card3.desc': 'Insinyur bersertifikat memeriksa lokasi Anda untuk memastikan kepatuhan penuh terhadap peraturan keselamatan industri.',
        'service.card4.title': 'Perbaikan di Tempat',
        'service.card4.desc': 'Tim mekanik bergerak kami dapat melakukan perbaikan darurat pada pemuat berat dan ekskavator langsung di lokasi Anda.',
    }
};
    // =========================================
    // 1. SCROLL NAVBAR EFFECT
    // =========================================
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.style.position.includes('relative')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // =========================================
    // 2. SCROLL REVEAL ANIMATION
    // =========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // =========================================
    // 3. MOBILE HAMBURGER MENU
    // =========================================
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

    // =========================================
    // 4. FAQ ACCORDION LOGIC
    // =========================================
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

    // =========================================
    // 5. PRODUCT DATABASE (BILINGUAL)
    // =========================================
    // I updated the structure: title, category, description, and app are now Objects {en: "...", id: "..."}
    const productDatabase = {
        'derock-mining': {
            title: { en: "Derock Super Mining XL", id: "Derock Super Mining XL" },
            category: { en: "HEAVY DUTY TIRES", id: "BAN ALAT BERAT" },
            img: "assets/product-derock.jpg", 
            description: { 
                en: "Engineered for the toughest terrains. The Derock Mining XL features cut-resistant compounds and an extra-deep tread depth to ensure longevity in quarry and mining operations.",
                id: "Dirancang untuk medan terberat. Derock Mining XL memiliki kompon tahan potong dan tapak ekstra dalam untuk memastikan umur panjang dalam operasi tambang dan galian."
            },
            brand: "Derock",
            code: "DR-500-XL",
            app: { en: "Mining / Quarry / Off-Road", id: "Tambang / Galian / Off-Road" }
        },
        'rapid-highway': {
            title: { en: "Rapid Highway Star", id: "Rapid Highway Star" },
            category: { en: "COMMERCIAL TIRES", id: "BAN KOMERSIAL" },
            img: "assets/product-rapid.jpg", 
            description: { 
                en: "Maximize your fleet's efficiency. The Highway Star offers low rolling resistance for fuel economy and a specialized rib design for wet weather stability.",
                id: "Maksimalkan efisiensi armada Anda. Highway Star menawarkan hambatan gulir rendah untuk hemat bahan bakar dan desain rusuk khusus untuk stabilitas cuaca basah."
            },
            brand: "Rapid",
            code: "RP-HWAY-22",
            app: { en: "Logistics / Highway Transport", id: "Logistik / Angkutan Jalan Raya" }
        },
        'ind-oil': {
            title: { en: "TPM Hydraulic 68", id: "TPM Hydraulic 68" },
            category: { en: "INDUSTRIAL LUBRICANTS", id: "PELUMAS INDUSTRI" },
            img: "assets/product-oil.jpg", 
            description: { 
                en: "Premium anti-wear hydraulic oil designed for high-pressure industrial systems. Provides excellent oxidation stability and corrosion protection.",
                id: "Oli hidrolik anti-aus premium yang dirancang untuk sistem industri tekanan tinggi. Memberikan stabilitas oksidasi dan perlindungan korosi yang sangat baik."
            },
            brand: "TPM Oils",
            code: "TPM-HYD-68",
            app: { en: "Hydraulic Systems / Heavy Machinery", id: "Sistem Hidrolik / Alat Berat" }
        },
        'tools-jack': {
            title: { en: "Hydraulic Jack 50T", id: "Dongkrak Hidrolik 50T" },
            category: { en: "TOOLS & HARDWARE", id: "PERKAKAS & HARDWARE" },
            img: "assets/product-jack.jpg", 
            description: { 
                en: "Heavy-duty lifting jack with a 50-ton capacity. Constructed from high-grade steel with safety overload protection.",
                id: "Dongkrak angkat tugas berat dengan kapasitas 50 ton. Dibuat dari baja bermutu tinggi dengan perlindungan kelebihan beban."
            },
            brand: "TPM Tools",
            code: "JACK-50T",
            app: { en: "Workshop / Field Repair", id: "Bengkel / Perbaikan Lapangan" }
        }
    };

    // =========================================
    // 6. LANGUAGE LOGIC FUNCTIONS
    // =========================================

    // Function to apply language to the page
    function applyLanguage(lang) {
        // 1. Update all static text with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // 2. Update Toggle Buttons Styling
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // 3. Re-render Product Details if we are on that page
        if (window.location.pathname.includes('product-detail.html')) {
            renderProductDetail(lang);
        }

        // 4. Save to storage
        localStorage.setItem('site-lang', lang);
        currentLang = lang;
    }

    // Function specifically for Product Detail Page
    function renderProductDetail(lang) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productDatabase[productId];

        if (product) {
            // Notice we use [lang] to access the correct string
            document.getElementById('p-title').textContent = product.title[lang];
            document.getElementById('p-category').textContent = product.category[lang];
            document.getElementById('p-desc').textContent = product.description[lang];
            document.getElementById('p-app').textContent = product.app[lang];
            
            // Fixed fields (Brand/Code usually don't change)
            document.getElementById('p-brand').textContent = product.brand;
            document.getElementById('p-code').textContent = product.code;

            const imgEl = document.getElementById('p-img');
            imgEl.src = product.img; 
            imgEl.onerror = function() {
                this.style.display = 'none';
                const placeholder = document.getElementById('p-icon-placeholder');
                if(placeholder) placeholder.style.display = 'block';
            };
        } else {
            const titleEl = document.getElementById('p-title');
            const descEl = document.getElementById('p-desc');
            const specsBox = document.querySelector('.specs-box');

            if(titleEl) titleEl.textContent = translations[lang]['prod.notfound'];
            if(descEl) descEl.textContent = translations[lang]['prod.return'];
            if(specsBox) specsBox.style.display = 'none';
        }
    }

    // Event Listeners for Switch Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            applyLanguage(selectedLang);
        });
    });

    // Initialize Language on Load
    applyLanguage(currentLang);

});