document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Navbar ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a, .nav-btn, .hero-actions a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get navbar height for offset calculation
                const navbarHeight = navbar.offsetHeight;
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
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

    // --- Contact Form Submission Prevent ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Basic simulation of form submission
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.classList.replace('btn-primary', 'btn-outline');
                btn.style.backgroundColor = '#14b8a6';
                btn.style.color = 'white';
                btn.style.borderColor = '#14b8a6';
                
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.classList.replace('btn-outline', 'btn-primary');
                    btn.style = '';
                }, 3000);
            }, 1500);
        });
    }

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
