document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 0. LANGUAGE CONFIGURATION
    // =========================================
    
    // Default to English or load from LocalStorage
    let currentLang = localStorage.getItem('site-lang') || 'en';

    // THE TRANSLATION DICTIONARY
    const translations = {
        en: {
            // --- NAVBAR ---
            'nav.services': 'Services',
            'nav.about': 'About Us',
            'nav.products': 'Products',
            'nav.dist': 'Distribution',
            'nav.contact': 'Contact',
            
            // --- HERO (INDEX) ---
            'hero.title': 'Powering Modern Industry',
            'hero.desc': 'Reliable engineering solutions and raw material supply chain management. We keep your business moving.',
            'hero.btn': 'View Products',
            
            // --- INDEX PAGE (CARDS LAYOUT) ---
            'serv.title': 'Our Capabilities',
            'serv.viewall': 'View All',
            'serv.card1.title': 'Precision Engineering',
            'serv.card1.desc': 'High-tolerance component manufacturing and structural design.',
            'serv.card2.title': 'Material Supply',
            'serv.card2.desc': 'Direct sourcing of steel, polymers, and industrial raw materials.',
            'serv.card3.title': 'Maintenance & Safety',
            'serv.card3.desc': 'Comprehensive site safety audits and machinery maintenance.',
            'brand.title': 'Official Distributor For',
            
            // --- SERVICES PAGE (DIAMONDS LAYOUT) ---
            'page.services.title': 'OUR VALUES & SERVICES',
            'val.q1.title': 'Quality Products',
            'val.q1.desc': 'Innovating to provide quality tire products based on analysis of mining conditions in Indonesia.',
            'val.q2.title': 'Wide Distribution',
            'val.q2.desc': 'Extensive distribution network, especially in mining areas.',
            'val.q3.title': 'Stock Availability',
            'val.q3.desc': 'Stock availability across the entire distribution network to accelerate delivery.',
            'val.q4.title': 'Trusted Partner',
            'val.q4.desc': 'Trusted by leading mining companies in Indonesia.',

            // --- ABOUT US (UPDATED) ---
            'page.about.title': 'ABOUT US',
            'about.new.p1': 'PT Triputra Permata Makmur, established in June 2025, is a company engaged in the import and distribution of truck and bus tires. We provide high-quality radial tires from China under the RAPID and DEROCK brands. Both brands are known as reliable, strong, and durable Heavy Duty imported tires, specifically designed to meet fleet needs across various road conditions, ranging from mining roads and rocky terrain to asphalt.',
            'about.new.p2': 'Throughout our business journey, PT Triputra Permata Makmur continues to demonstrate significant growth and progress. This is inseparable from our commitment to maintaining product quality, professional work ethics, and building long-term trust with partners and customers. This trust becomes our main capital in creating sustainable cooperation and providing the best solutions for your fleet needs.',
            
            // --- DISTRIBUTION PAGE ---
            'page.dist.title': 'DISTRIBUTION CHANNEL',
            'dist.desc': "To optimize the distribution of products and services to various locations or customers. PT. Triputra Permata Makmur's distribution network is spread throughout Indonesia.",

            // --- PRODUCT CATALOG ---
            'page.products.title': 'PRODUCT CATALOG',
            'prod.back': 'Back to Catalog',
            'prod.specs': 'Technical Specifications',
            'prod.request': 'Request Quote',
            'prod.notfound': 'Product Not Found',
            'prod.return': 'Please return to the products page.',

            // --- PRODUCT CARD DESCRIPTIONS ---
            'card.rd52.desc': 'Suitable for use at mining inside. Short distance with low speed.',
            'card.rs10hd.desc': 'More Load - More Distance. Suitable for steer and free-rolling positions.',
            'card.rd51.desc': 'For medium hauling with bad roads. Excellent stone cleaning design.',
            'card.ra20.desc': 'Suitable for carrying more loads. Low heat generation build-up.',
            'card.rd31hd.desc': 'More Traction - More Loads. Mixed highway and freeway application.',
            'card.rd50hd.desc': 'Special for long hauling with unpaved roads. Extreme load capacity.',
            'card.ra21hd.desc': 'Extreme Heavy Load Purpose. Super steel belt carcass construction.',

            // --- FOOTER ---
            'footer.links': 'Quick Links',
            'footer.desc': 'Engineering the future with precision and integrity.',
            'footer.contact': 'Contact',
        },

        id: {
            // --- NAVBAR ---
            'nav.services': 'Layanan',
            'nav.about': 'Tentang Kami',
            'nav.products': 'Produk',
            'nav.dist': 'Distribusi',
            'nav.contact': 'Hubungi',
            
            // --- HERO (INDEX) ---
            'hero.title': 'Menggerakkan Industri Modern',
            'hero.desc': 'Solusi teknik andal dan manajemen rantai pasok bahan baku.',
            'hero.btn': 'Lihat Produk',

            // --- INDEX PAGE (CARDS LAYOUT) ---
            'serv.title': 'Kemampuan Kami',
            'serv.viewall': 'Lihat Semua',
            'serv.card1.title': 'Teknik Presisi',
            'serv.card1.desc': 'Manufaktur komponen toleransi tinggi dan desain struktural.',
            'serv.card2.title': 'Pasokan Material',
            'serv.card2.desc': 'Sumber langsung baja, polimer, dan bahan baku industri.',
            'serv.card3.title': 'Perawatan & K3',
            'serv.card3.desc': 'Audit keselamatan lokasi yang komprehensif dan pemeliharaan mesin.',
            'brand.title': 'Distributor Resmi Untuk',

            // --- SERVICES PAGE (DIAMONDS LAYOUT) ---
            'page.services.title': 'NILAI & LAYANAN KAMI',
            'val.q1.title': 'Produk Berkualitas',
            'val.q1.desc': 'Berinovasi menyediakan produk ban berkualitas berdasarkan analisa kondisi tambang di Indonesia.',
            'val.q2.title': 'Jaringan Distribusi Luas',
            'val.q2.desc': 'Jaringan distribusi yang luas terutama di daerah pertambangan.',
            'val.q3.title': 'Ketersediaan Barang (Stockist)',
            'val.q3.desc': 'Ketersediaan stok di seluruh jaringan distribusi sehingga mempercepat delivery.',
            'val.q4.title': 'Terpercaya',
            'val.q4.desc': 'Dipercaya oleh perusahaan-perusahaan tambang terkemuka di Indonesia.',

            // --- ABOUT US (UPDATED) ---
            'page.about.title': 'TENTANG KAMI',
            'about.new.p1': 'PT Triputra Permata Makmur, didirikan pada Juni 2025, merupakan perusahaan yang bergerak di bidang impor dan distribusi ban truk dan bus. Kami menghadirkan ban tipe radial berkualitas tinggi yang berasal dari China dengan merek RAPID dan DEROCK. Kedua merek ini dikenal sebagai ban impor Heavy Duty yang andal, kuat, dan tahan lama, dirancang khusus untuk memenuhi kebutuhan armada pada berbagai kondisi jalan mulai dari jalan tambang, jalan berbatu, hingga jalan aspal.',
            'about.new.p2': 'Seiring perjalanan bisnis kami, PT Triputra Permata Makmur terus menunjukkan pertumbuhan dan kemajuan yang signifikan. Hal ini tidak terlepas dari komitmen kami dalam menjaga kualitas produk, profesionalisme kerja, serta membangun kepercayaan jangka panjang dengan para mitra dan pelanggan. Kepercayaan tersebut menjadi modal utama kami dalam menciptakan kerja sama yang berkelanjutan dan memberikan solusi terbaik bagi kebutuhan armada Anda.',

            // --- DISTRIBUTION PAGE ---
            'page.dist.title': 'SALURAN DISTRIBUSI',
            'dist.desc': 'Untuk mengoptimalkan distribusi produk atau layanan ke berbagai lokasi atau pelanggan. Jaringan distribusi PT. Triputra Permata Makmur sudah tersebar diseluruh Indonesia.',

            // --- PRODUCT CATALOG ---
            'page.products.title': 'KATALOG PRODUK',
            'prod.back': 'Kembali ke Katalog',
            'prod.specs': 'Spesifikasi Teknis',
            'prod.request': 'Minta Penawaran',
            'prod.notfound': 'Produk Tidak Ditemukan',
            'prod.return': 'Silakan kembali ke halaman produk.',

            // --- PRODUCT CARD DESCRIPTIONS ---
            'card.rd52.desc': 'Cocok untuk penggunaan di dalam tambang. Jarak pendek dengan kecepatan rendah.',
            'card.rs10hd.desc': 'Muatan Lebih - Jarak Lebih. Cocok untuk posisi steer dan free-rolling.',
            'card.rd51.desc': 'Untuk pengangkutan menengah dengan jalan buruk. Desain pembersih batu yang sangat baik.',
            'card.ra20.desc': 'Cocok untuk membawa muatan lebih banyak. Pembentukan panas rendah.',
            'card.rd31hd.desc': 'Traksi Lebih - Muatan Lebih. Aplikasi campuran jalan raya dan jalan bebas hambatan.',
            'card.rd50hd.desc': 'Khusus untuk pengangkutan jarak jauh dengan jalan tidak beraspal. Kapasitas beban ekstrem.',
            'card.ra21hd.desc': 'Tujuan Muatan Sangat Berat. Konstruksi karkas sabuk baja super.',

            // --- FOOTER ---
            'footer.links': 'Tautan Cepat',
            'footer.desc': 'Merekayasa masa depan dengan presisi dan integritas.',
            'footer.contact': 'Kontak',
        }
    };

    // =========================================
    // 1. NAVBAR & UI LOGIC
    // =========================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    });
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // =========================================
    // 2. PRODUCT DATABASE (BILINGUAL BULLETS)
    // =========================================
    const productDatabase = {
        'rd52': {
            title: "RD52",
            category: "OFFROAD",
            img: "assets/rd52.jpeg", 
            bullets: {
                en: [
                    "Applicable for driving wheels. Suitable for short distance with low speed on mining site.",
                    "Excellent wide pattern design offers traction on bad road conditions.",
                    "Special tread compound offers excellent cut resistance."
                ],
                id: [
                    "Berlaku untuk roda penggerak. Cocok untuk jarak pendek dengan kecepatan rendah di lokasi tambang.",
                    "Desain pola lebar yang sangat baik menawarkan traksi pada kondisi jalan buruk.",
                    "Kompon tapak khusus menawarkan ketahanan potong yang sangat baik."
                ]
            },
            specs: [
                { size: "11.00R20", pr: "18PR", depth: "25.0", load: "6,500 (Dual)", psi: "180" },
                { size: "12.00R20", pr: "20PR", depth: "25.0", load: "6,570 (Dual)", psi: "170" }
            ]
        },
        'rs10hd': {
            title: "RS10HD",
            category: "REGIONAL",
            img: "assets/rs10hd.jpeg",
            bullets: {
                en: [
                    "Wider tread spreads load over a larger area, promoting long, even wear.",
                    "Straight simple rib pattern improves even wearing and efficient water evacuation.",
                    "Cross rib sipes slice through water for solid control on wet roads.",
                    "Decoupling tread design suitable for long distance travel."
                ],
                id: [
                    "Tapak yang lebih lebar menyebarkan beban ke area yang lebih luas, mendukung keausan yang panjang dan merata.",
                    "Pola rusuk lurus sederhana meningkatkan keausan merata dan evakuasi air yang efisien.",
                    "Sipe rusuk silang membelah air untuk kontrol yang solid di jalan basah.",
                    "Desain tapak decoupling cocok untuk perjalanan jarak jauh."
                ]
            },
            specs: [
                { size: "7.50R16LT", pr: "14PR", depth: "13.5", load: "3,300 (Single)", psi: "180" }
            ]
        },
        'rd51': {
            title: "RD51",
            category: "OFFROAD",
            img: "assets/rd51.jpeg",
            bullets: {
                en: [
                    "Drive Pattern, applicable for driving wheels.",
                    "Suitable for medium distance with low speed on mining and bad or hard roads.",
                    "Excellent groove design to help easier self stone cleaning or ejection.",
                    "Strongest on bead and crown to get more mileage on bad road conditions."
                ],
                id: [
                    "Pola Penggerak, berlaku untuk roda penggerak.",
                    "Cocok untuk jarak menengah dengan kecepatan rendah di tambang dan jalan buruk atau keras.",
                    "Desain alur yang sangat baik untuk membantu pembersihan atau pelepasan batu sendiri dengan lebih mudah.",
                    "Terkuat pada bead dan crown untuk mendapatkan jarak tempuh lebih banyak pada kondisi jalan buruk."
                ]
            },
            specs: [
                { size: "11.00R20", pr: "18PR", depth: "24.0", load: "6,500 (Dual)", psi: "180" },
                { size: "12.00R20", pr: "20PR", depth: "25.0", load: "6,570 (Dual)", psi: "170" }
            ]
        },
        'ra20': {
            title: "RA20",
            category: "REGIONAL",
            img: "assets/ra20.jpeg",
            bullets: {
                en: [
                    "Special tread compound and four ribs offering low heat generation build-up.",
                    "Super steel belt carcass enhance high load capacity."
                ],
                id: [
                    "Kompon tapak khusus dan empat rusuk menawarkan pembentukan panas rendah.",
                    "Karkas sabuk baja super meningkatkan kapasitas beban tinggi."
                ]
            },
            specs: [
                { size: "10.00R20", pr: "18PR", depth: "16.0", load: "5,400 (Dual)", psi: "170" }
            ]
        },
        'rd31hd': {
            title: "RD31HD",
            category: "ON & OFF ROAD",
            img: "assets/rd31hd.jpeg",
            bullets: {
                en: [
                    "Mixed highway and freeway application. Drive position of heavy-duty truck for on/off road application.",
                    "Special tread compound and design provide low heat build-up, excellent puncture and cut resistance."
                ],
                id: [
                    "Aplikasi campuran jalan raya dan jalan bebas hambatan. Posisi penggerak truk tugas berat untuk aplikasi on/off road.",
                    "Kompon dan desain tapak khusus memberikan pembentukan panas rendah, ketahanan tusuk dan potong yang sangat baik."
                ]
            },
            specs: [
                { size: "7.50R16LT", pr: "14PR", depth: "14.5", load: "3,300 (Single)", psi: "180" },
                { size: "8.25R16LT", pr: "16PR", depth: "15.2", load: "3,680 (Dual)", psi: "180" }
            ]
        },
        'rd50hd': {
            title: "RD50 (HD)",
            category: "OFFROAD",
            img: "assets/rd50hd.jpeg",
            bullets: {
                en: [
                    "Traction Pattern for driving wheels.",
                    "Suitable for long distance with low speed on mining and bad roads.",
                    "Special tread compound offers excellent cut resistance.",
                    "Reinforced bead area reduces deformation and provides extreme load capacity."
                ],
                id: [
                    "Pola Traksi untuk roda penggerak.",
                    "Cocok untuk jarak jauh dengan kecepatan rendah di tambang dan jalan buruk.",
                    "Kompon tapak khusus menawarkan ketahanan potong yang sangat baik.",
                    "Area bead yang diperkuat mengurangi deformasi dan memberikan kapasitas beban ekstrem."
                ]
            },
            specs: [
                { size: "7.50R16LT(HD)", pr: "14PR", depth: "16.5", load: "3,300 (Dual)", psi: "180" },
                { size: "10.00R20", pr: "18PR", depth: "23.0", load: "6,000 (Dual)", psi: "180" },
                { size: "11.00R20", pr: "18PR", depth: "24.0", load: "6,500 (Dual)", psi: "180" },
                { size: "12.00R20", pr: "20PR", depth: "24.0", load: "6,570 (Dual)", psi: "170" },
                { size: "12.00R24", pr: "20PR", depth: "30.0", load: "6,600 (Dual)", psi: "170" }
            ]
        },
        'ra21hd': {
            title: "RA21 (HD)",
            category: "REGIONAL",
            img: "assets/ra21hd.jpeg",
            bullets: {
                en: [
                    "Special tread compound and design enable low heat build-up, excellent puncture and cut resistance.",
                    "Super steel belt carcass construction enhances casing strength and maximizes tyre load capacity."
                ],
                id: [
                    "Kompon dan desain tapak khusus memungkinkan pembentukan panas rendah, ketahanan tusuk dan potong yang sangat baik.",
                    "Konstruksi karkas sabuk baja super meningkatkan kekuatan casing dan memaksimalkan kapasitas beban ban."
                ]
            },
            specs: [
                { size: "7.50R16LT(HD)", pr: "14PR", depth: "15.0", load: "3,300 (Dual)", psi: "180" },
                { size: "8.25R16LT(HD)", pr: "16PR", depth: "16.0", load: "3,680 (Dual)", psi: "180" },
                { size: "10.00R20", pr: "18PR", depth: "17.0", load: "6,900 (Dual)", psi: "180" },
                { size: "11.00R20", pr: "18PR", depth: "17.0", load: "6,500 (Dual)", psi: "180" }
            ]
        }
    };

    // =========================================
    // 3. RENDER PRODUCT DETAIL
    // =========================================
    function renderProductDetail(lang) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productDatabase[productId];

        if (product) {
            // Basic Info
            document.getElementById('p-title').textContent = product.title;
            document.getElementById('p-category').textContent = product.category;
            
            // Image Logic
            const imgEl = document.getElementById('p-img');
            const placeholder = document.getElementById('p-icon-placeholder');
            imgEl.src = product.img; 
            imgEl.style.display = 'block';
            imgEl.onerror = function() {
                this.style.display = 'none';
                if(placeholder) placeholder.style.display = 'block';
            };
            if(placeholder) placeholder.style.display = 'none';

            // Bullet Points (NOW BILINGUAL)
            const bulletList = document.getElementById('p-bullets');
            bulletList.innerHTML = ''; // clear old
            
            // Safety check: defaults to English if specific lang is missing
            const bulletsToUse = product.bullets[lang] || product.bullets['en'];
            
            bulletsToUse.forEach(bullet => {
                const li = document.createElement('li');
                li.textContent = bullet;
                li.style.marginBottom = "10px";
                bulletList.appendChild(li);
            });

            // Build Spec Table
            const tableContainer = document.getElementById('table-container');
            let tableHTML = `
                <table class="tech-table">
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>PR</th>
                            <th>Depth (mm)</th>
                            <th>PSI</th>
                            <th>Max Load (KG)</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            product.specs.forEach(spec => {
                tableHTML += `
                    <tr>
                        <td><strong>${spec.size}</strong></td>
                        <td>${spec.pr}</td>
                        <td>${spec.depth}</td>
                        <td>${spec.psi}</td>
                        <td>${spec.load}</td>
                    </tr>
                `;
            });

            tableHTML += `</tbody></table>`;
            tableContainer.innerHTML = tableHTML;

        } else {
            // Not Found logic
            document.getElementById('p-title').textContent = translations[lang]['prod.notfound'];
            document.getElementById('p-bullets').innerHTML = '';
            document.getElementById('table-container').style.display = 'none';
        }
    }

    // =========================================
    // 4. LANGUAGE FUNCTIONS
    // =========================================
    function applyLanguage(lang) {
        // Update Static Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Toggle Buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        });

        // Update Detail Page if active
        if (window.location.pathname.includes('product-detail.html')) {
            renderProductDetail(lang);
        }

        localStorage.setItem('site-lang', lang);
        currentLang = lang;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });

    // Initialize
    applyLanguage(currentLang);
});