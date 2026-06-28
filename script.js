document.addEventListener('DOMContentLoaded', () => {
    
    // --- Language Switcher (EN / AR) ---
    const translations = {
        en: {
            lang_label: 'AR',
            nav_home: 'Home',
            nav_about: 'About',
            nav_services: 'Services',
            nav_values: 'Values',
            nav_partners: 'Partners',
            nav_customers: 'Customers',
            nav_contact: 'Contact Us',
            hero_title: 'Engineering Experts for<br><span class="text-accent" data-i18n="hero_title_accent">Pharmaceutical Manufacturing</span>',
            hero_title_accent: 'Pharmaceutical Manufacturing',
            hero_subtitle: 'Leading engineering consulting firm with over 26 years of experience across the Middle East. Trusted partner for the Pharma, Cosmetics, Herbal, and Food industries.',
            hero_cta_primary: 'Get in Touch',
            hero_cta_secondary: 'Explore Services',
            stat_years: 'Years Experience',
            stat_partners: 'Trusted Partners',
            stat_gmp: 'GMP Compliant',
            about_title: 'About Murex LLC',
            about_lead: 'Murex LLC is a premier engineering consulting firm specializing in manufacturing solutions, with over 26 years of experience in the pharmaceutical sector.',
            about_desc: 'Through strategic partnerships with globally recognized machinery manufacturers, combined with a strong regional presence and a highly skilled team, we deliver a wide range of advanced equipment and services across the Middle East. Our expertise supports industries including pharmaceuticals, cosmetics, herbal products, and food production.',
            about_wwd_title: 'What We Do',
            about_wwd_p1: 'We offer end-to-end support across the full lifecycle of industrial projects—from initial analysis and design to implementation, validation, and final acceptance. Our services also extend to quality compliance, performance optimization, and advanced technical troubleshooting.',
            about_wwd_p2: 'By leveraging modern technologies and proven methodologies, we help our clients improve efficiency, ensure product quality, and maximize operational productivity across their entire value chain.',
            services_subtitle: 'What We Offer',
            services_title: 'Our Services',
            services_desc: 'Comprehensive engineering solutions tailored for pharmaceutical manufacturing.',
            svc_features_heading: 'Key Features & Deliverables',
            svc_btn_inquire: 'Request Service Consultation',
            svc_facility_feat1: 'Cleanroom Design (ISO 5 - ISO 8 / Class A-D)',
            svc_facility_feat2: 'GMP-Compliant Layouts & HVAC Optimization',
            svc_facility_feat3: 'Workflow Simulation & Scalability Planning',
            svc_project_feat1: 'End-to-End Scheduling & Budget Control',
            svc_project_feat2: 'Comprehensive Risk Assessment & Mitigation',
            svc_project_feat3: 'Supplier Coordination & Site Supervision',
            svc_process_feat1: 'Production Yield Optimization',
            svc_process_feat2: 'Cycle Time Reduction & Waste Minimization',
            svc_process_feat3: 'Process Mapping & Equipment Capacity Matching',
            svc_tech_feat1: '24/7 Rapid Troubleshooting Response',
            svc_tech_feat2: 'Customized Preventive Maintenance Programs',
            svc_tech_feat3: 'On-Site Operational Audits & Calibration',
            svc_gmp_feat1: 'FDA, EMA, and WHO Regulatory Readiness',
            svc_gmp_feat2: 'Quality Management Systems (QMS) Setup',
            svc_gmp_feat3: 'Gap Analysis & Mock Audits',
            svc_equip_feat1: 'Global Procurement Network Integration',
            svc_equip_feat2: 'Supplier Audit & Verification',
            svc_equip_feat3: 'Factory Acceptance Testing (FAT) Support',
            svc_valid_feat1: 'IQ/OQ/PQ Protocol Drafting & Execution',
            svc_valid_feat2: 'Thermal Mapping of Autoclaves & Warehouses',
            svc_valid_feat3: 'Validation Summary Reporting for Regulators',
            svc_auto_feat1: 'PLC & SCADA Architecture Design',
            svc_auto_feat2: 'Data Integrity (21 CFR Part 11 Compliance)',
            svc_auto_feat3: 'Industrial IoT & Smart Sensors Setup',
            svc_spare_feat1: 'High-Precision Reverse Engineering',
            svc_spare_feat2: 'Bespoke Machinery Design & Integration',
            svc_spare_feat3: 'Custom Parts Fabrication with Premium Materials',
            svc_facility_title: 'Facility Design',
            svc_facility_desc: 'State-of-the-art facility layout and cleanroom design. We optimize for seamless workflow, strict regulatory compliance, and future scalability, ensuring your infrastructure meets modern manufacturing demands.',
            svc_project_title: 'Project Management',
            svc_project_desc: 'End-to-end execution of industrial projects. Our dedicated teams ensure timely delivery within budget constraints while maintaining rigorous quality control at every phase of the project lifecycle.',
            svc_process_title: 'Process Engineering',
            svc_process_desc: 'Optimization of manufacturing processes to enhance yield, efficiency, and safety. We analyze and upgrade existing systems using advanced methodologies to maximize your operational throughput.',
            svc_tech_title: 'Technical Support',
            svc_tech_desc: 'Expert troubleshooting, proactive maintenance, and comprehensive operational support to minimize downtime. We provide rapid response and long-term strategies for machinery reliability.',
            svc_gmp_title: 'GMP Compliance',
            svc_gmp_desc: 'Rigorous quality assurance and regulatory adherence. We guide you through complex validation processes ensuring global standards (FDA, EMA, WHO) are consistently met across your facility.',
            svc_equip_title: 'Equipment Sourcing',
            svc_equip_desc: 'Strategic procurement of high-end pharmaceutical machinery. We leverage our global network to source, evaluate, and integrate the best equipment tailored to your specific production needs.',
            svc_valid_title: 'Validation & Qualification',
            svc_valid_desc: 'Comprehensive IQ/OQ/PQ protocols and execution. We ensure all equipment and systems are fully qualified and documented to meet strict pharmaceutical industry regulations.',
            svc_auto_title: 'Automation & Control',
            svc_auto_desc: 'Implementation of advanced SCADA and PLC systems. We help you transition to smart manufacturing, providing real-time data monitoring and enhanced, precise process control.',
            svc_spare_title: 'Manufacturing of Spare Parts and Development of Machinery',
            svc_spare_desc: 'Custom engineering, fabrication of critical spare parts, and bespoke machinery development. We design, manufacture, and integrate specialized components to optimize your production efficiency and extend equipment lifespan.',
            values_subtitle: 'Our Philosophy',
            values_title: 'Core Values',
            val_quality_title: 'Quality',
            val_quality_desc: 'Commitment to delivering high-standard engineering solutions that stand the test of time.',
            val_trust_title: 'Trust',
            val_trust_desc: 'Long-term partnerships built on reliability, transparency, and consistent results.',
            val_passion_title: 'Passion',
            val_passion_desc: 'Deep dedication to innovation, excellence, and pushing the boundaries of engineering.',
            val_agility_title: 'Agility',
            val_agility_desc: 'Fast, adaptive solutions tailored to meet the ever-evolving needs of the industry.',
            strategy_title: 'Moving Responsibly Towards <br/><span class="text-accent" style="display: inline-block; margin-top: 0.5rem;" data-i18n="strategy_title_accent">A Sustainable Future</span>',
            strategy_title_accent: 'A Sustainable Future',
            strategy_desc: 'Integrating eco-friendly practices and sustainable engineering solutions into every stage of the manufacturing lifecycle.',
            partners_subtitle: 'Global Network',
            partners_title: 'Our Partners',
            partners_desc: 'We collaborate with globally recognized manufacturers to deliver best-in-class solutions.',
            customers_subtitle: 'Our Clients',
            customers_title: 'Who We Serve',
            customers_desc: 'We proudly serve some of the local leading companies, delivering reliable solutions that consistently meet the highest standards of quality and on-time performance. This commitment has earned us the trust of our clients and positioned us as their preferred partner.',
            contact_title: 'Get in Touch',
            contact_desc: 'Ready to enhance your manufacturing facility? Contact us to discuss your project requirements.',
            contact_address_label: 'Address',
            contact_address: 'Damascus, Syria',
            contact_phone_label: 'Phone',
            contact_email_label: 'Email',
            form_name: 'Full Name',
            form_name_ph: 'Enter your full name',
            form_email: 'Email Address',
            form_email_ph: 'Enter your email address',
            form_phone: 'Phone Number',
            form_phone_ph: 'Enter your phone number',
            form_subject: 'Subject',
            form_subject_ph: 'Enter the subject of your inquiry',
            form_message: 'Your Message',
            form_message_ph: 'Type your message here...',
            form_submit: 'Request Consultation',
            footer_copy: '© 2026 Murex LLC. All rights reserved.'
        },
        ar: {
            lang_label: 'EN',
            nav_home: 'الرئيسية',
            nav_about: 'من نحن',
            nav_services: 'خدماتنا',
            nav_values: 'قيمنا',
            nav_partners: 'شركاؤنا',
            nav_customers: 'عملاؤنا',
            nav_contact: 'تواصل معنا',
            hero_title: 'خبراء هندسيون في<br><span class="text-accent" data-i18n="hero_title_accent">التصنيع الدوائي</span>',
            hero_title_accent: 'التصنيع الدوائي',
            hero_subtitle: 'شركة استشارات هندسية رائدة بخبرة تزيد عن 26 عامًا في الشرق الأوسط. شريك موثوق في قطاعات الأدوية، ومستحضرات التجميل، والأعشاب، والصناعات الغذائية.',
            hero_cta_primary: 'تواصل معنا',
            hero_cta_secondary: 'استكشف خدماتنا',
            stat_years: 'سنوات خبرة',
            stat_partners: 'شريك موثوق',
            stat_gmp: 'متوافق مع GMP',
            about_title: 'عن Murex LLC',
            about_lead: 'Murex LLC هي شركة استشارات هندسية متميزة متخصصة في حلول التصنيع، بخبرة تزيد عن 26 عامًا في القطاع الدوائي.',
            about_desc: 'من خلال شراكات استراتيجية مع مصنّعي آلات معترف بهم عالميًا، إلى جانب حضور إقليمي قوي وفريق عمل عالي الكفاءة، نقدم مجموعة واسعة من المعدات والخدمات المتقدمة في جميع أنحاء الشرق الأوسط. تشمل خبراتنا قطاعات الأدوية، ومستحضرات التجميل، والمنتجات العشبية، والإنتاج الغذائي.',
            about_wwd_title: 'ماذا نفعل',
            about_wwd_p1: 'نقدم دعمًا شاملاً عبر دورة حياة المشاريع الصناعية بالكامل — من التحليل الأولي والتصميم إلى التنفيذ والتأهيل والقبول النهائي. تمتد خدماتنا أيضًا إلى الامتثال للجودة وتحسين الأداء واستكشاف الأخطاء التقنية المتقدمة.',
            about_wwd_p2: 'من خلال الاستفادة من التقنيات الحديثة والمنهجيات المثبتة، نساعد عملاءنا على تحسين الكفاءة وضمان جودة المنتج وتعظيم الإنتاجية التشغيلية عبر سلسلة القيمة بأكملها.',
            services_subtitle: 'ما نقدمه',
            services_title: 'خدماتنا',
            services_desc: 'حلول هندسية شاملة مصممة خصيصًا للتصنيع الدوائي.',
            svc_features_heading: 'الميزات والخدمات الرئيسية',
            svc_btn_inquire: 'طلب استشارة للخدمة',
            svc_facility_feat1: 'تصميم الغرف النظيفة (ISO 5 - ISO 8 / فئة A-D)',
            svc_facility_feat2: 'مخططات متوافقة مع GMP وتحسين أنظمة HVAC',
            svc_facility_feat3: 'محاكاة تدفق العمل وتخطيط التوسع المستقبلي',
            svc_project_feat1: 'جدولة المشاريع المتكاملة والتحكم في الميزانية',
            svc_project_feat2: 'تقييم شامل للمخاطر واستراتيجيات الحد منها',
            svc_project_feat3: 'تنسيق الموردين والإشراف على الموقع',
            svc_process_feat1: 'تحسين إنتاجية عمليات التصنيع',
            svc_process_feat2: 'تقليل وقت الدورة والحد من الهدر',
            svc_process_feat3: 'رسم خرائط العمليات ومطابقة سعة المعدات',
            svc_tech_feat1: 'استجابة سريعة لحل الأعطال على مدار الساعة',
            svc_tech_feat2: 'برامج صيانة وقائية مخصصة',
            svc_tech_feat3: 'عمليات التدقيق التشغيلي في الموقع والمعايرة',
            svc_gmp_feat1: 'التحضير لمتطلبات هيئات الغذاء والدواء (FDA, EMA, WHO)',
            svc_gmp_feat2: 'إعداد وتأسيس أنظمة إدارة الجودة (QMS)',
            svc_gmp_feat3: 'تحليل الفجوات ومحاكاة عمليات التدقيق',
            svc_equip_feat1: 'التكامل مع شبكة التوريد العالمية',
            svc_equip_feat2: 'تدقيق الموردين والتحقق من كفاءتهم',
            svc_equip_feat3: 'دعم اختبارات القبول في المصنع (FAT)',
            svc_valid_feat1: 'صياغة وتنفيذ بروتوكولات IQ/OQ/PQ',
            svc_valid_feat2: 'التخطيط الحراري للمعقمات والمستودعات',
            svc_valid_feat3: 'تقارير ملخص التحقق والتأهيل للجهات التنظيمية',
            svc_auto_feat1: 'تصميم هيكلية أنظمة التحكم PLC & SCADA',
            svc_auto_feat2: 'تأمين سلامة البيانات (توافق 21 CFR Part 11)',
            svc_auto_feat3: 'إعداد إنترنت الأشياء الصناعي والمستشعرات الذكية',
            svc_spare_feat1: 'الهندسة العكسية عالية الدقة',
            svc_spare_feat2: 'تصميم وتكامل آلات متخصصة حسب الطلب',
            svc_spare_feat3: 'تصنيع قطع الغيار المخصصة بمواد ممتازة',
            svc_facility_title: 'تصميم المنشآت',
            svc_facility_desc: 'تصميم مرافق وغرف نظيفة بأحدث المواصفات. نعمل على تحسين سير العمل والامتثال التنظيمي الصارم وقابلية التوسع المستقبلية لضمان تلبية بنيتك التحتية لمتطلبات التصنيع الحديثة.',
            svc_project_title: 'إدارة المشاريع',
            svc_project_desc: 'تنفيذ شامل للمشاريع الصناعية. تضمن فرقنا المتخصصة التسليم في الوقت المحدد ضمن الميزانية المحددة مع الحفاظ على مراقبة جودة صارمة في كل مرحلة من مراحل دورة حياة المشروع.',
            svc_process_title: 'هندسة العمليات',
            svc_process_desc: 'تحسين عمليات التصنيع لتعزيز الإنتاجية والكفاءة والسلامة. نحلل الأنظمة القائمة ونطورها باستخدام منهجيات متقدمة لتعظيم إنتاجيتك التشغيلية.',
            svc_tech_title: 'الدعم الفني',
            svc_tech_desc: 'استكشاف أخطاء متخصص وصيانة استباقية ودعم تشغيلي شامل لتقليل وقت التوقف. نقدم استجابة سريعة واستراتيجيات طويلة الأمد لموثوقية الآلات.',
            svc_gmp_title: 'الامتثال لممارسات التصنيع الجيد',
            svc_gmp_desc: 'ضمان جودة صارم والتزام تنظيمي. نرشدك خلال عمليات التأهيل المعقدة لضمان استيفاء المعايير العالمية (FDA, EMA, WHO) باستمرار عبر منشأتك.',
            svc_equip_title: 'توريد المعدات',
            svc_equip_desc: 'توريد استراتيجي لآلات دوائية عالية الجودة. نستفيد من شبكتنا العالمية للحصول على أفضل المعدات وتقييمها ودمجها بما يتناسب مع احتياجات إنتاجك المحددة.',
            svc_valid_title: 'التأهيل والتحقق',
            svc_valid_desc: 'بروتوكولات IQ/OQ/PQ شاملة وتنفيذها. نضمن أن جميع المعدات والأنظمة مؤهلة بالكامل وموثقة لتلبية لوائح الصناعة الدوائية الصارمة.',
            svc_auto_title: 'الأتمتة والتحكم',
            svc_auto_desc: 'تطبيق أنظمة SCADA و PLC المتقدمة. نساعدك في الانتقال إلى التصنيع الذكي من خلال توفير مراقبة بيانات في الوقت الفعلي وتحكم محسّن ودقيق بالعمليات.',
            svc_spare_title: 'تصنيع قطع الغيار وتطوير الآلات',
            svc_spare_desc: 'هندسة مخصصة وتصنيع قطع غيار حيوية وتطوير آلات مصممة حسب الطلب. نصمم ونصنع وندمج مكونات متخصصة لتحسين كفاءة إنتاجك وإطالة عمر المعدات.',
            values_subtitle: 'فلسفتنا',
            values_title: 'قيمنا الأساسية',
            val_quality_title: 'الجودة',
            val_quality_desc: 'التزام بتقديم حلول هندسية عالية المعايير تصمد أمام اختبار الزمن.',
            val_trust_title: 'الثقة',
            val_trust_desc: 'شراكات طويلة الأمد مبنية على الموثوقية والشفافية والنتائج المتسقة.',
            val_passion_title: 'الشغف',
            val_passion_desc: 'تفانٍ عميق في الابتكار والتميز وتجاوز حدود الهندسة.',
            val_agility_title: 'المرونة',
            val_agility_desc: 'حلول سريعة ومتكيفة مصممة لتلبية الاحتياجات المتطورة باستمرار للصناعة.',
            strategy_title: 'نتحرك بمسؤولية نحو <br/><span class="text-accent" style="display: inline-block; margin-top: 0.5rem;" data-i18n="strategy_title_accent">مستقبل مستدام</span>',
            strategy_title_accent: 'مستقبل مستدام',
            strategy_desc: 'دمج الممارسات الصديقة للبيئة وحلول الهندسة المستدامة في كل مرحلة من مراحل دورة حياة التصنيع.',
            partners_subtitle: 'شبكة عالمية',
            partners_title: 'شركاؤنا',
            partners_desc: 'نتعاون مع مصنّعين معترف بهم عالميًا لتقديم أفضل الحلول.',
            customers_subtitle: 'عملاؤنا',
            customers_title: 'من نخدم',
            customers_desc: 'نفخر بخدمة بعض الشركات المحلية الرائدة، حيث نقدم حلولًا موثوقة تلبي باستمرار أعلى معايير الجودة والأداء في الوقت المحدد. هذا الالتزام أكسبنا ثقة عملائنا وجعلنا شريكهم المفضل.',
            contact_title: 'تواصل معنا',
            contact_desc: 'هل أنت مستعد لتحسين منشأتك التصنيعية؟ تواصل معنا لمناقشة متطلبات مشروعك.',
            contact_address_label: 'العنوان',
            contact_address: 'دمشق، سوريا',
            contact_phone_label: 'الهاتف',
            contact_email_label: 'البريد الإلكتروني',
            form_name: 'الاسم الكامل',
            form_name_ph: 'أدخل اسمك الكامل',
            form_email: 'البريد الإلكتروني',
            form_email_ph: 'أدخل بريدك الإلكتروني',
            form_phone: 'رقم الهاتف',
            form_phone_ph: 'أدخل رقم هاتفك',
            form_subject: 'الموضوع',
            form_subject_ph: 'أدخل موضوع استفسارك',
            form_message: 'رسالتك',
            form_message_ph: 'اكتب رسالتك هنا...',
            form_submit: 'طلب استشارة',
            footer_copy: '© 2026 Murex LLC. جميع الحقوق محفوظة.'
        }
    };

    let currentLang = localStorage.getItem('murex_lang') || 'en';
    let activateServiceTile = null;

    // --- Sticky Navbar ---
    const navbar = document.getElementById('navbar');
    let currentViewId = '#view-home';

    
    function updateNavbar() {
        if (window.scrollY > 50 || currentViewId !== '#view-home') {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar);

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            
            // Toggle icon between list and x
            const icon = mobileToggle.querySelector('i');
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });

        // Close menu when a link is clicked
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.replace('ph-x', 'ph-list');
            });
        });
    }

    // --- View Switching Logic ---
    const navLinks = document.querySelectorAll('.nav-links a, .hero-actions a[href^="#view-"]');
    const views = document.querySelectorAll('.view');
    
    function switchView(targetId) {
        currentViewId = targetId;
        // Hide all views
        views.forEach(view => {
            view.classList.remove('active-view');
        });
        
        // Show target view
        const targetView = document.getElementById(targetId.replace('#', ''));
        if (targetView) {
            targetView.classList.add('active-view');
        }
        
        // Update nav active state
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active-nav');
            }
        });
        
        window.scrollTo(0, 0);
        updateNavbar();
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#view-')) {
                switchView(targetId);
            }
        });
    });

    // --- Services Console Showcase Logic ---
    const serviceTiles = document.querySelectorAll('.service-tile');
    const showcasePanel = document.querySelector('.service-showcase-panel');
    const showcaseIcon = document.getElementById('showcase-icon');
    const showcaseTitle = document.getElementById('showcase-title');
    const showcaseDesc = document.getElementById('showcase-desc');
    const showcaseFeaturesList = document.getElementById('showcase-features-list');
    const showcaseCta = document.getElementById('showcase-cta');
    const contactFormModal = document.getElementById('contactModal');
    const subjectInput = document.getElementById('subject');

    const serviceKeys = [
        'svc_facility',
        'svc_project',
        'svc_process',
        'svc_tech',
        'svc_gmp',
        'svc_equip',
        'svc_valid',
        'svc_auto',
        'svc_spare'
    ];

    const serviceIcons = [
        'ph-factory',
        'ph-projector-screen-chart',
        'ph-git-merge',
        'ph-wrench',
        'ph-certificate',
        'ph-truck',
        'ph-clipboard-text',
        'ph-cpu',
        'ph-gear'
    ];

    activateServiceTile = function(index) {
        if (index < 0 || index >= serviceKeys.length) return;
        
        // Update active class on tiles
        serviceTiles.forEach((tile, idx) => {
            if (idx === index) {
                tile.classList.add('active');
                tile.setAttribute('aria-pressed', 'true');
            } else {
                tile.classList.remove('active');
                tile.setAttribute('aria-pressed', 'false');
            }
        });

        // Trigger animation transition in showcase
        if (showcasePanel) {
            showcasePanel.classList.remove('showcase-fade-animation');
            void showcasePanel.offsetWidth; // Reflow to reset CSS animation
            showcasePanel.classList.add('showcase-fade-animation');
        }

        const dict = translations[currentLang] || translations.en;
        const keyPrefix = serviceKeys[index];
        const iconClass = serviceIcons[index];

        // Update showcase icon, title, description
        if (showcaseIcon) {
            showcaseIcon.className = `ph ${iconClass}`;
        }
        if (showcaseTitle) {
            showcaseTitle.textContent = dict[keyPrefix + '_title'] || '';
            showcaseTitle.setAttribute('data-i18n', keyPrefix + '_title');
        }
        if (showcaseDesc) {
            showcaseDesc.textContent = dict[keyPrefix + '_desc'] || '';
            showcaseDesc.setAttribute('data-i18n', keyPrefix + '_desc');
        }

        // Update showcase key features
        if (showcaseFeaturesList) {
            showcaseFeaturesList.innerHTML = '';
            for (let i = 1; i <= 3; i++) {
                const featKey = `${keyPrefix}_feat${i}`;
                const featText = dict[featKey];
                if (featText) {
                    const li = document.createElement('li');
                    li.textContent = featText;
                    li.setAttribute('data-i18n', featKey);
                    showcaseFeaturesList.appendChild(li);
                }
            }
        }
        
        // Setup CTA button action to open contact modal with prefilled subject
        if (showcaseCta) {
            showcaseCta.onclick = function(e) {
                e.preventDefault();
                if (contactFormModal) {
                    contactFormModal.classList.add('active');
                    if (subjectInput) {
                        const serviceName = dict[keyPrefix + '_title'] || '';
                        if (currentLang === 'ar') {
                            subjectInput.value = `استفسار حول ${serviceName}`;
                        } else {
                            subjectInput.value = `Inquiry about ${serviceName}`;
                        }
                    }
                }
            };
        }
    }

    if (serviceTiles.length > 0) {
        // Activate first tile on load
        activateServiceTile(0);

        serviceTiles.forEach((tile, index) => {
            tile.addEventListener('click', () => activateServiceTile(index));
            tile.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activateServiceTile(index);
                }
            });
        });
    }


    // --- Marquee Cloning for Infinite Loop ---
    const marqueeTracks = document.querySelectorAll('.marquee-track');
    marqueeTracks.forEach(track => {
        const children = Array.from(track.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            track.appendChild(clone);
        });
    });

    // --- Contact Modal Logic ---
    const modal = document.getElementById('contactModal');
    const openBtns = document.querySelectorAll('.open-contact-modal, a[href="#contact"]');
    const closeBtns = document.querySelectorAll('.close-modal');
    
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after animating once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Contact Form — Real Email via Web3Forms ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            // Show loading state
            btn.textContent = 'Sending...';
            btn.disabled = true;

            try {
                const formData = new FormData(contactForm);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Success state
                    btn.textContent = '✓ Message Sent!';
                    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    btn.style.boxShadow = '0 10px 20px -5px rgba(16,185,129,0.4)';
                    contactForm.reset();

                    // Reset button after 4 seconds
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                        btn.style.boxShadow = '';
                    }, 4000);
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            } catch (err) {
                // Error state
                btn.textContent = '✗ Failed — Try Again';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                btn.style.boxShadow = '0 10px 20px -5px rgba(239,68,68,0.4)';
                btn.disabled = false;
                console.error('Form error:', err);

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.boxShadow = '';
                }, 3000);
            }
        });
    }



    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('murex_lang', lang);

        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const dict = translations[lang];

        // Update all text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // For elements that contain HTML (like hero_title, strategy_title), use innerHTML
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Re-sync active service tile with new language
        const activeTile = document.querySelector('.service-tile.active');
        if (activeTile && typeof activateServiceTile === 'function') {
            const index = parseInt(activeTile.getAttribute('data-index'), 10);
            activateServiceTile(index);
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', lang === 'ar'
                ? 'Murex LLC هي شركة استشارات هندسية رائدة، متخصصة في مجال التصنيع، بخبرة تزيد عن 20 عامًا في الصناعة الدوائية.'
                : 'Murex LLC is a leading engineering consulting firm, specialized in the manufacturing domain, with over 20 years of experience in the pharmaceutical industry.'
            );
        }
    }

    // Language toggle button click
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // Apply saved language on load
    if (currentLang !== 'en') {
        setLanguage(currentLang);
    }
});
