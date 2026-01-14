document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 0. LANGUAGE CONFIGURATION
    // =========================================
    let currentLang = localStorage.getItem('site-lang') || 'en';

    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.about': 'About Us',
            'nav.products': 'Products',
            'nav.dist': 'Distribution',
            'nav.contact': 'Contact',
            'hero.title': 'Powering Modern Industry',
            'hero.desc': 'Reliable engineering solutions and raw material supply chain management. We keep your business moving.',
            'hero.btn': 'View Products',
            'serv.title': 'Our Capabilities',
            'serv.viewall': 'View All',
            'serv.card1.title': 'Precision Engineering',
            'serv.card1.desc': 'High-tolerance component manufacturing and structural design.',
            'serv.card2.title': 'Material Supply',
            'serv.card2.desc': 'Direct sourcing of steel, polymers, and industrial raw materials.',
            'serv.card3.title': 'Maintenance & Safety',
            'serv.card3.desc': 'Comprehensive site safety audits and machinery maintenance.',
            'brand.title': 'Official Distributor For',
            'page.services.title': 'OUR VALUES & SERVICES',
            'val.q1.title': 'Quality Products',
            'val.q1.desc': 'Innovating to provide quality tire products based on analysis of mining conditions in Indonesia.',
            'val.q2.title': 'Wide Distribution',
            'val.q2.desc': 'Extensive distribution network, especially in mining areas.',
            'val.q3.title': 'Stock Availability',
            'val.q3.desc': 'Stock availability across the entire distribution network to accelerate delivery.',
            'val.q4.title': 'Trusted Partner',
            'val.q4.desc': 'Trusted by leading mining companies in Indonesia.',
            'page.about.title': 'ABOUT US',
            'about.new.p1': 'PT Triputra Permata Makmur, established in June 2025, is a company engaged in the import and distribution of truck and bus tires. We provide high-quality radial tires from China under the RAPID and DEROCK brands. Both brands are known as reliable, strong, and durable Heavy Duty imported tires, specifically designed to meet fleet needs across various road conditions, ranging from mining roads and rocky terrain to asphalt.',
            'about.new.p2': 'Throughout our business journey, PT Triputra Permata Makmur continues to demonstrate significant growth and progress. This is inseparable from our commitment to maintaining product quality, professional work ethics, and building long-term trust with partners and customers. This trust becomes our main capital in creating sustainable cooperation and providing the best solutions for your fleet needs.',
            'page.dist.title': 'DISTRIBUTION CHANNEL',
            'dist.desc': "To optimize the distribution of products and services to various locations or customers. PT. Triputra Permata Makmur's distribution network is spread throughout Indonesia.",
            'page.products.title': 'PRODUCT CATALOG',
            'prod.back': 'Back to Catalog',
            'prod.specs': 'Technical Specifications',
            'prod.request': 'Request Quote',
            'prod.notfound': 'Product Not Found',
            'prod.return': 'Please return to the products page.',
            'card.rd52.desc': 'Suitable for use at mining inside. Short distance with low speed.',
            'card.rs10hd.desc': 'More Load - More Distance. Suitable for steer and free-rolling positions.',
            'card.rd51.desc': 'For medium hauling with bad roads. Excellent stone cleaning design.',
            'card.ra20.desc': 'Suitable for carrying more loads. Low heat generation build-up.',
            'card.rd31hd.desc': 'More Traction - More Loads. Mixed highway and freeway application.',
            'card.rd50hd.desc': 'Special for long hauling with unpaved roads. Extreme load capacity.',
            'card.ra21hd.desc': 'Extreme Heavy Load Purpose. Super steel belt carcass construction.',
            'footer.links': 'Quick Links',
            'footer.desc': 'Engineering the future with precision and integrity.',
            'footer.contact': 'Contact'
        },
        id: {
            'nav.home': 'Beranda',
            'nav.services': 'Layanan',
            'nav.about': 'Tentang Kami',
            'nav.products': 'Produk',
            'nav.dist': 'Distribusi',
            'nav.contact': 'Hubungi',
            'hero.title': 'Menggerakkan Industri Modern',
            'hero.desc': 'Solusi teknik andal dan manajemen rantai pasok bahan baku.',
            'hero.btn': 'Lihat Produk',
            'serv.title': 'Kemampuan Kami',
            'serv.viewall': 'Lihat Semua',
            'serv.card1.title': 'Teknik Presisi',
            'serv.card1.desc': 'Manufaktur komponen toleransi tinggi dan desain struktural.',
            'serv.card2.title': 'Pasokan Material',
            'serv.card2.desc': 'Sumber langsung baja, polimer, dan bahan baku industri.',
            'serv.card3.title': 'Perawatan & K3',
            'serv.card3.desc': 'Audit keselamatan lokasi yang komprehensif dan pemeliharaan mesin.',
            'brand.title': 'Distributor Resmi Untuk',
            'page.services.title': 'NILAI & LAYANAN KAMI',
            'val.q1.title': 'Produk Berkualitas',
            'val.q1.desc': 'Berinovasi menyediakan produk ban berkualitas berdasarkan analisa kondisi tambang di Indonesia.',
            'val.q2.title': 'Jaringan Distribusi Luas',
            'val.q2.desc': 'Jaringan distribusi yang luas terutama di daerah pertambangan.',
            'val.q3.title': 'Ketersediaan Barang (Stockist)',
            'val.q3.desc': 'Ketersediaan stok di seluruh jaringan distribusi sehingga mempercepat delivery.',
            'val.q4.title': 'Terpercaya',
            'val.q4.desc': 'Dipercaya oleh perusahaan-perusahaan tambang terkemuka di Indonesia.',
            'page.about.title': 'TENTANG KAMI',
            'about.new.p1': 'PT Triputra Permata Makmur, didirikan pada Juni 2025, merupakan perusahaan yang bergerak di bidang impor dan distribusi ban truk dan bus. Kami menghadirkan ban tipe radial berkualitas tinggi yang berasal dari China dengan merek RAPID dan DEROCK. Kedua merek ini dikenal sebagai ban impor Heavy Duty yang andal, kuat, dan tahan lama, dirancang khusus untuk memenuhi kebutuhan armada pada berbagai kondisi jalan mulai dari jalan tambang, jalan berbatu, hingga jalan aspal.',
            'about.new.p2': 'Seiring perjalanan bisnis kami, PT Triputra Permata Makmur terus menunjukkan pertumbuhan dan kemajuan yang signifikan. Hal ini tidak terlepas dari komitmen kami dalam menjaga kualitas produk, profesionalisme kerja, serta membangun kepercayaan jangka panjang dengan para mitra dan pelanggan. Kepercayaan tersebut menjadi modal utama kami dalam menciptakan kerja sama yang berkelanjutan dan memberikan solusi terbaik bagi kebutuhan armada Anda.',
            'page.dist.title': 'SALURAN DISTRIBUSI',
            'dist.desc': 'Untuk mengoptimalkan distribusi produk atau layanan ke berbagai lokasi atau pelanggan. Jaringan distribusi PT. Triputra Permata Makmur sudah tersebar diseluruh Indonesia.',
            'page.products.title': 'KATALOG PRODUK',
            'prod.back': 'Kembali ke Katalog',
            'prod.specs': 'Spesifikasi Teknis',
            'prod.request': 'Minta Penawaran',
            'prod.notfound': 'Produk Tidak Ditemukan',
            'prod.return': 'Silakan kembali ke halaman produk.',
            'card.rd52.desc': 'Cocok untuk penggunaan di dalam tambang. Jarak pendek dengan kecepatan rendah.',
            'card.rs10hd.desc': 'Muatan Lebih - Jarak Lebih. Cocok untuk posisi steer dan free-rolling.',
            'card.rd51.desc': 'Untuk pengangkutan menengah dengan jalan buruk. Desain pembersih batu yang sangat baik.',
            'card.ra20.desc': 'Cocok untuk membawa muatan lebih banyak. Pembentukan panas rendah.',
            'card.rd31hd.desc': 'Traksi Lebih - Muatan Lebih. Aplikasi campuran jalan raya dan jalan bebas hambatan.',
            'card.rd50hd.desc': 'Khusus untuk pengangkutan jarak jauh dengan jalan tidak beraspal. Kapasitas beban ekstrem.',
            'card.ra21hd.desc': 'Tujuan Muatan Sangat Berat. Konstruksi karkas sabuk baja super.',
            'footer.links': 'Tautan Cepat',
            'footer.desc': 'Merekayasa masa depan dengan presisi dan integritas.',
            'footer.contact': 'Kontak'
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
    // 2. PRODUCT DATABASE
    // =========================================
    const productDatabase = {
        'rd52': {
            title: "RD52",
            category: "OFFROAD",
            img: "assets/rd52.jpeg", 
            bullets: {
                en: ["Applicable for driving wheels. Suitable for short distance with low speed on mining site.", "Excellent wide pattern design offers traction.", "Special tread compound offers excellent cut resistance."],
                id: ["Berlaku untuk roda penggerak. Cocok untuk jarak pendek dengan kecepatan rendah.", "Desain pola lebar menawarkan traksi.", "Kompon tapak khusus menawarkan ketahanan potong."]
            },
            specs: [
                { overload: "200%", size: "11.00R20", pr: "18PR", depth: "25.0", index: "152/149 F", type: "TT", psi: "180", load: "6,500 (Dual)" },
                { overload: "180%", size: "12.00R20", pr: "20PR", depth: "25.0", index: "156/153 F", type: "TT", psi: "170", load: "6,570 (Dual)" }
            ]
        },
        'rs10hd': {
            title: "RS10HD",
            category: "REGIONAL",
            img: "assets/rs10hd.jpeg",
            bullets: {
                en: ["Wider tread spreads load over a larger area.", "Straight rib pattern improves even wearing.", "Cross rib sipes for solid control on wet roads."],
                id: ["Tapak lebih lebar menyebarkan beban.", "Pola rusuk lurus meratakan keausan.", "Sipe rusuk silang untuk kontrol di jalan basah."]
            },
            specs: [
                { overload: "250%", size: "7.50R16LT", pr: "14PR", depth: "13.5", index: "122/118 L", type: "TT", psi: "180", load: "3,300 (Single)" }
            ]
        },
        'rd51': {
            title: "RD51",
            category: "OFFROAD",
            img: "assets/rd51.jpeg",
            bullets: {
                en: ["Drive Pattern, applicable for driving wheels.", "Excellent groove design for self stone cleaning.", "Strongest bead and crown for bad roads."],
                id: ["Pola Penggerak untuk roda penggerak.", "Desain alur untuk pembersihan batu mandiri.", "Bead dan crown paling kuat untuk jalan buruk."]
            },
            specs: [
                { overload: "200%", size: "11.00R20", pr: "18PR", depth: "24.0", index: "152/149 F", type: "TT", psi: "180", load: "6,500 (Dual)" },
                { overload: "180%", size: "12.00R20", pr: "20PR", depth: "25.0", index: "156/153 F", type: "TT", psi: "170", load: "6,570 (Dual)" }
            ]
        },
        'ra20': {
            title: "RA20",
            category: "REGIONAL",
            img: "assets/ra20.jpeg",
            bullets: {
                en: ["Low heat generation build-up.", "Super steel belt carcass enhances load capacity."],
                id: ["Pembentukan panas rendah.", "Karkas sabuk baja super meningkatkan kapasitas beban."]
            },
            specs: [
                { overload: "180%", size: "10.00R20", pr: "18PR", depth: "16.0", index: "149/146 K", type: "TT", psi: "170", load: "5,400 (Dual)" }
            ]
        },
        'rd31hd': {
            title: "RD31HD",
            category: "ON & OFF ROAD",
            img: "assets/rd31hd.jpeg",
            bullets: {
                en: ["Mixed highway and freeway application.", "Special tread compound provides cut resistance."],
                id: ["Aplikasi campuran jalan raya dan bebas hambatan.", "Kompon khusus memberikan ketahanan potong."]
            },
            specs: [
                { overload: "250%", size: "7.50R16LT", pr: "14PR", depth: "14.5", index: "122/118 L", type: "TT", psi: "180", load: "3,300 (Single)" },
                { overload: "230%", size: "8.25R16LT", pr: "16PR", depth: "15.2", index: "128/124 L", type: "TT", psi: "180", load: "3,680 (Dual)" }
            ]
        },
        'rd50hd': {
            title: "RD50 (HD)",
            category: "OFFROAD",
            img: "assets/rd50hd.jpeg",
            bullets: {
                en: ["Traction Pattern for driving wheels.", "Reinforced bead area reduces deformation.", "Special tread compound offers cut resistance."],
                id: ["Pola Traksi untuk roda penggerak.", "Area bead diperkuat mengurangi deformasi.", "Kompon khusus memberikan ketahanan potong."]
            },
            specs: [
                { overload: "250%", size: "7.50R16LT(HD)", pr: "14PR", depth: "16.5", index: "122/118 F", type: "TT", psi: "180", load: "3,300 (Dual)" },
                { overload: "200%", size: "10.00R20", pr: "18PR", depth: "23.0", index: "149/146 F", type: "TT", psi: "180", load: "6,000 (Dual)" },
                { overload: "200%", size: "11.00R20", pr: "18PR", depth: "24.0", index: "152/149 F", type: "TT", psi: "180", load: "6,500 (Dual)" },
                { overload: "180%", size: "12.00R20", pr: "20PR", depth: "24.0", index: "156/153 F", type: "TT", psi: "170", load: "6,570 (Dual)" },
                { overload: "180%", size: "12.00R24", pr: "20PR", depth: "30.0", index: "160/157 F", type: "TT", psi: "170", load: "6,600 (Dual)" }

            ]
        },
        'ra21hd': {
            title: "RA21 (HD)",
            category: "REGIONAL",
            img: "assets/ra21hd.jpeg",
            bullets: {
                en: ["Extreme Heavy Load Purpose.", "Super steel belt carcass construction.", "Low heat build-up design."],
                id: ["Tujuan Muatan Sangat Berat.", "Konstruksi karkas sabuk baja super.", "Desain pembentukan panas rendah."]
            },
            specs: [
                { overload: "250%", size: "7.50R16LT(HD)", pr: "14PR", depth: "15.0", index: "122/118 L", type: "TT", psi: "180", load: "3,300 (Dual)" },
                { overload: "230%", size: "8.25R16LT(HD)", pr: "16PR", depth: "16.0", index: "128/124 L", type: "TT", psi: "180", load: "3,680 (Dual)" },
                { overload: "230%", size: "10.00R20", pr: "18PR", depth: "17.0", index: "149/146 K", type: "TT", psi: "180", load: "6,900 (Dual)" },
                { overload: "200%", size: "11.00R20", pr: "18PR", depth: "17.0", index: "152/149 K", type: "TT", psi: "180", load: "6,500 (Dual)" }
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
            document.getElementById('p-title').textContent = product.title;
            document.getElementById('p-category').textContent = product.category;
            
            const imgEl = document.getElementById('p-img');
            const placeholder = document.getElementById('p-icon-placeholder');
            imgEl.src = product.img; 
            imgEl.style.display = 'block';
            imgEl.onerror = function() {
                this.style.display = 'none';
                if(placeholder) placeholder.style.display = 'block';
            };
            if(placeholder) placeholder.style.display = 'none';

            const bulletList = document.getElementById('p-bullets');
            bulletList.innerHTML = ''; 
            const bulletsToUse = product.bullets[lang] || product.bullets['en'];
            bulletsToUse.forEach(bullet => {
                const li = document.createElement('li');
                li.textContent = bullet;
                li.style.marginBottom = "10px";
                bulletList.appendChild(li);
            });

            const tableContainer = document.getElementById('table-container');
            let tableHTML = `
                <div class="table-wrapper">
                    <table class="tech-table">
                        <thead>
                            <tr>
                                <th>Overloading</th>
                                <th>Size</th>
                                <th>PR</th>
                                <th>Tread Depth</th>
                                <th>Service Index</th>
                                <th>Type</th>
                                <th>Air Pressure (PSI)</th>
                                <th>Max Load Capacity (KG)</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            product.specs.forEach(spec => {
                tableHTML += `
                    <tr>
                        <td>${spec.overload}</td>
                        <td><strong>${spec.size}</strong></td>
                        <td>${spec.pr}</td>
                        <td>${spec.depth}</td>
                        <td>${spec.index}</td>
                        <td>${spec.type}</td>
                        <td>${spec.psi}</td>
                        <td>${spec.load}</td>
                    </tr>
                `;
            });

            tableHTML += `</tbody></table></div>`;
            tableContainer.innerHTML = tableHTML;

        } else {
            const titleEl = document.getElementById('p-title');
            if(titleEl) titleEl.textContent = translations[lang]['prod.notfound'];
            const container = document.getElementById('table-container');
            if(container) container.style.display = 'none';
        }
    }

    // =========================================
    // 4. LANGUAGE FUNCTIONS
    // =========================================
    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        if (window.location.pathname.includes('product-detail.html')) {
            renderProductDetail(lang);
        }

        localStorage.setItem('site-lang', lang);
        currentLang = lang;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });

    applyLanguage(currentLang);
});