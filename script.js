/* ==========================================================================
   R8 FRISEUR - CORE JAVASCRIPT LOGIC (HERREN & DAMEN SECTIONS)
   ========================================================================== */

// --- i18n Translations Dictionary ---
const translations = {
    de: {
        docTitle: "R8 Friseur | Mörfelden-Walldorf",
        navHome: "Startseite",
        navAbout: "Über Uns",
        navServices: "Leistungen & Preise",
        navContact: "Kontakt & Anfahrt",
        navBookBtn: "Termin Buchen",
        navBooking: "Termin Buchen",
        walkInBadge: "Ohne Termin möglich",
        tabHerren: "Herren",
        tabDamen: "Damen",
        portalTitle: "Willkommen bei R8 Friseur",
        portalSubtitle: "Bitte wählen Sie Ihren gewünschten Salon-Bereich:",
        portalHerrenTag: "BARBERSHOP",
        portalHerrenTitle: "HERREN / ERKEK",
        portalHerrenDesc: "Herrenhaarschnitte, Skin Fades, Bartpflege, Konturen & Pflege-Rituale",
        portalHerrenBtn: "Herrenbereich Betreten",
        portalDamenTag: "HAIR & BEAUTY",
        portalDamenTitle: "DAMEN / KADIN",
        portalDamenDesc: "Damenschnitte, Föhnen & Styling, Balayage, Coloration, Keratin & Pflege",
        portalDamenBtn: "Damenbereich Betreten",
        currentSectionLabel: "Herren Salon",
        currentSectionLabelDamen: "Damen Salon",
        heroTitle: 'Perfekter Cut & <span class="mono-gradient-text">Präzise Bartpflege</span>',
        heroSubtitle: "Willkommen beim Herrenbereich von R8 Friseur in Mörfelden-Walldorf. Wir bieten Ihnen professionelle Herrenhaarschnitte, moderne Fades und erstklassiges Styling.",
        heroTitleDamen: 'Eleganter Style & <span class="mono-gradient-text">Perfekte Haarpflege</span>',
        heroSubtitleDamen: "Willkommen beim Damenbereich von R8 Friseur in Mörfelden-Walldorf. Wir bieten Ihnen exklusive Schnitte, Balayage, Coloration und traumhaftes Styling.",
        heroBookBtn: "Online Termin Buchen",
        stat1Title: "Professionelle Fades",
        stat1Sub: "Exakte Übergänge & Styles",
        stat2Title: "Ohne Termin",
        stat2Sub: "Einfach vorbeikommen",
        statusChecking: "Status wird geprüft...",
        statusOpen: "Jetzt Geöffnet",
        statusClosed: "Derzeit Geschlossen",
        hoursMonFri: "Mo - Fr:",
        hoursSat: "Samstag:",
        hoursSun: "Sonntag:",
        hoursClosed: "Geschlossen",
        aboutTag: "ÜBER UNSEREN SALON",
        aboutTitle: "R8 Friseur – Tradition trifft auf modernen Style",
        aboutDesc1: "In der Westendstraße 3 in Mörfelden-Walldorf bieten wir mehr als nur Haarschnitte – wir bieten ein erstklassiges Pflegeritual für Sie & Ihn.",
        aboutDesc2: "Egal ob präziser Skin Fade, klassischer Schnitt, Balayage oder wohltuende Haarbehandlung: Bei uns stehen höchste Präzision und Ihre Zufriedenheit an erster Stelle.",
        feat1Title: "Präzise Schnitte & Coloration",
        feat1Desc: "Saubere Fades, Balayage und individuelle Schnitttechniken.",
        feat2Title: "Premium Pflege",
        feat2Desc: "Bartpflege, Hot-Towel, Keratin und hochwertige Produkte.",
        feat3Title: "Spontan oder mit Termin",
        feat3Desc: "Online buchen, anrufen oder einfach vorbeikommen.",
        satisfactionText: "Kundenzufriedenheit",
        servicesTag: "ANGEBOT & LEISTUNGEN",
        servicesTitle: "Unsere Leistungen & Preise",
        servicesSub: "Erstklassige Qualität zu fairen Preisen. Wählen Sie Ihre gewünschte Leistung aus.",
        popularBadge: "Beliebt",
        comboBadge: "BESTER DEAL",
        // Herren Services
        service1Title: "Herrenhaarschnitt",
        service1Desc: "Klassischer oder moderner Haarschnitt inklusive Beratung, Waschen & Styling.",
        service2Title: "Präzise Bartpflege",
        service2Desc: "Formen, Konturenschnitt mit Rasiermesser & pflegendes Bartöl.",
        service3Title: "Haar & Bart Komplett",
        service3Desc: "Das Rundum-Sorglos-Paket: Haarschnitt, Fade, Komplett-Bartpflege & Waschen.",
        service4Title: "Kinderhaarschnitt",
        service4Desc: "Geduldiger & moderner Haarschnitt für Kinder (bis 12 Jahre).",
        service5Title: "Gesichtspflege & Maske",
        service5Desc: "Tiefenreinigung mit Gesichtsmaske für frische Haut.",
        // Damen Services
        damenS1Title: "Damenschnitt & Styling",
        damenS1Desc: "Individuelle Typberatung, Waschen, präziser Schnitt & Föhn-Styling.",
        damenS2Title: "Waschen & Föhnen",
        damenS2Desc: "Entspannende Haarwäsche mit Pflegekur, Föhnwelle oder Glätten.",
        damenS3Title: "Balayage / Strähnen",
        damenS3Desc: "Kreative Farbverläufe, Strähnentechnik inklusive Veredelung & Glossing.",
        damenS4Title: "Haaransatz & Färbung",
        damenS4Desc: "Schonende Coloration, brillante Farbergebnisse & Farbglanzversiegelung.",
        damenS5Title: "Keratin & Tiefenpflege",
        damenS5Desc: "Intensive Reparaturbehandlung für seidenweiches und glänzendes Haar.",
        damenS6Title: "Augenbrauen Zupfen & Form",
        damenS6Desc: "Perfekte Konturen mit Fadentechnik und optionales Färben.",
        selectServiceBtn: "Wählen & Buchen",
        fullPriceTitle: "Vollständige Preisübersicht (Herren)",
        damenPriceTitle: "Vollständige Preisübersicht (Damen)",
        // Herren Prices
        p1Name: "Professioneller Herrenhaarschnitt",
        p1Sub: "Scheren- oder Maschinenschnitt mit Finisher",
        p2Name: "Bart Trimmen & Konturen",
        p2Sub: "Präzisionsrasur und Konturenformung",
        p3Name: "Haarschnitt + Bart + Kopfwaschen",
        p3Sub: "Vollständiges Styling- & Pflegepaket",
        p4Name: "Kinderhaarschnitt",
        p4Sub: "Für Jugendliche & Kinder",
        p5Name: "Gesichtsmaske & Porenreinigung",
        p5Sub: "Wohltuende Gesichtsbehandlung",
        // Damen Prices
        dp1Name: "Damenschnitt, Waschen & Föhnen",
        dp1Sub: "Kompletter Haarschnitt inkl. Föhn-Styling",
        dp2Name: "Waschen & Föhnen / Styling",
        dp2Sub: "Pflegewäsche mit Locken- oder Glättstyling",
        dp3Name: "Balayage / Ombré & Glossing",
        dp3Sub: "Premium Farbverlauf mit Veredelung",
        dp4Name: "Haaransatz & Komplettfärbung",
        dp4Sub: "Farbfrische & Grauabdeckung mit Schutzpflege",
        dp5Name: "Keratin & Intensiv-Haarkur",
        dp5Sub: "Tiefenaufbau & Anti-Frizz Glanzpflege",
        dp6Name: "Augenbrauen Zupfen & Färben",
        dp6Sub: "Präzise Fadentechnik & Farbdesign",
        bookingTag: "ONLINE RESERVIERUNG",
        bookingTitle: "Wunschtermin Vereinbaren",
        bookingSub: "Wählen Sie Ihren gewünschten Friseur, Datum und Uhrzeit aus. Sie erhalten sofort eine Bestätigung.",
        lblBarber: "Friseur / Barber Wählen",
        barber1Role: "Master Stylist & Fade Spezialist",
        barber2Role: "Bart- & Haar-Experte",
        stylist1Role: "Master Hair Stylist & Color Expertin",
        stylist2Role: "Schnitt-, Föhn- & Balayage-Spezialistin",
        lblService: "Gewünschte Leistung",
        phSelectService: "Bitte Leistung wählen...",
        lblDate: "Datum & Uhrzeit Wählen",
        dateHelp: "Sonntags ist der Salon geschlossen.",
        lblTime: "Freie Uhrzeit Auswählen",
        timeSlotPlaceholder: "Bitte wählen Sie zuerst links ein Datum aus, um die verfügbaren Zeiten zu sehen.",
        lblName: "Ihre Daten",
        phName: "Vor- & Nachname",
        lblPhone: "Telefonnummer",
        phPhone: "Telefonnummer",
        lblNotes: "Anmerkungen (Optional)",
        phNotes: "Anmerkungen (Optional)",
        btnConfirmBooking: "Termin Jetzt Verbindlich Buchen",
        contactTag: "KONTAKT & STANDORT",
        contactTitle: "Besuchen Sie Uns in Mörfelden-Walldorf",
        addrLabel: "Adresse",
        phoneLabel: "Telefon & Terminvereinbarung",
        walkInSub: "Besuche auch ohne Termin möglich",
        instaLabel: "Instagram",
        instaSub: "Termine & Styles auf Instagram",
        hoursLabel: "Öffnungszeiten",
        footerTagline: "Ihr erstklassiger Herren- & Damenfriseur in Mörfelden-Walldorf.",
        adminBtn: "Yönetici Paneli",
        allRights: "Alle Rechte vorbehalten.",
        modalSuccessTitle: "Termin Erfolgreich Gebucht!",
        modalCloseBtn: "Verstanden",
        slotAvailableText: "Frei",
        slotBookedText: "Belegt",
        sundayClosedText: "Sonntags ist der Salon geschlossen. Bitte wählen Sie Montag bis Samstag.",
        selectTimeAlert: "Bitte wählen Sie eine freie Uhrzeit aus."
    },
    tr: {
        docTitle: "R8 Friseur | Mörfelden-Walldorf",
        navHome: "Ana Sayfa",
        navAbout: "Hakkımızda",
        navServices: "Hizmetler & Fiyatlar",
        navContact: "İletişim & Konum",
        navBookBtn: "Randevu Al",
        navBooking: "Randevu Al",
        walkInBadge: "Terminsiz de gelebilirsiniz",
        tabHerren: "Erkek",
        tabDamen: "Kadın",
        portalTitle: "R8 Friseur'a Hoş Geldiniz",
        portalSubtitle: "Lütfen hizmet almak istediğiniz salon bölümünü seçin:",
        portalHerrenTag: "BARBERSHOP",
        portalHerrenTitle: "ERKEK / HERREN",
        portalHerrenDesc: "Erkek saç kesimleri, Skin Fades, sakal bakımı, kontur ve bakım ritüelleri",
        portalHerrenBtn: "Erkek Bölümüne Giriş",
        portalDamenTag: "HAIR & BEAUTY",
        portalDamenTitle: "KADIN / DAMEN",
        portalDamenDesc: "Kadın saç kesimi, fön & şekillendirme, balyaj, boya, keratin ve bakım",
        portalDamenBtn: "Kadın Bölümüne Giriş",
        currentSectionLabel: "Erkek Salonu",
        currentSectionLabelDamen: "Kadın Salonu",
        heroTitle: 'Mükemmel Kesim & <span class="mono-gradient-text">Hassas Sakal Bakımı</span>',
        heroSubtitle: "Mörfelden-Walldorf'taki R8 Friseur Erkek Bölümü'ne hoş geldiniz. Profesyonel erkek saç kesimleri, modern fade stilleri ve kaliteli sakal bakımı sunuyoruz.",
        heroTitleDamen: 'Zarif Stil & <span class="mono-gradient-text">Kusursuz Saç Bakımı</span>',
        heroSubtitleDamen: "Mörfelden-Walldorf'taki R8 Friseur Kadın Bölümü'ne hoş geldiniz. Profesyonel kesim, balyaj, renklendirme ve özel bakım hizmetleri sunuyoruz.",
        heroBookBtn: "Online Randevu Al",
        stat1Title: "Profesyonel Fades",
        stat1Sub: "Kusursuz geçişler & stiller",
        stat2Title: "Terminsiz Giriş",
        stat2Sub: "Doğrudan gelebilirsiniz",
        statusChecking: "Durum kontrol ediliyor...",
        statusOpen: "Şu An Açık",
        statusClosed: "Şu An Kapalı",
        hoursMonFri: "Pzt - Cuma:",
        hoursSat: "Cumartesi:",
        hoursSun: "Pazar:",
        hoursClosed: "Kapalı",
        aboutTag: "SALONUMUZ HAKKINDA",
        aboutTitle: "R8 Friseur – Gelenek ve Modern Stil Bir Arada",
        aboutDesc1: "Mörfelden-Walldorf Westendstraße 3 adresinde kadın ve erkek için ayrı bölümlerimizde birinci sınıf kuaförlük ve bakım deneyimi sunuyoruz.",
        aboutDesc2: "Pratik Skin Fade, klasik kesimler, balyaj veya sıcak havlu destekli sakal bakımı: Bizim için en önemli şey hassasiyet ve memnuniyetinizdir.",
        feat1Title: "Hassas Kesim & Renklendirme",
        feat1Desc: "Kafa yapısına özel kesimler, modern balyaj ve boya teknikleri.",
        feat2Title: "Premium Bakım",
        feat2Desc: "Ustura ile sakal tasarımı, keratin ve besleyici saç bakımı.",
        feat3Title: "Randevulu veya Randevusuz",
        feat3Desc: "İster online randevu alın, ister direkt uğrayın.",
        satisfactionText: "Müşteri Memnuniyeti",
        servicesTag: "HİZMETLER & FİYATLAR",
        servicesTitle: "Hizmetlerimiz ve Fiyat Listesi",
        servicesSub: "Uygun fiyatlarla birinci sınıf kalite. Aradığınız hizmeti seçin.",
        popularBadge: "Popüler",
        comboBadge: "EN İYİ PAKET",
        // Herren Services
        service1Title: "Erkek Saç Kesimi",
        service1Desc: "Klasik veya modern saç kesimi, yıkama ve stil verme dahil.",
        service2Title: "Hassas Sakal Bakımı",
        service2Desc: "Sakal şekillendirme, ustura konturu ve bakım yağı.",
        service3Title: "Saç & Sakal Komple",
        service3Desc: "Tam bakım paketi: Saç kesimi, fade, sakal tasarımı ve yıkama.",
        service4Title: "Çocuk Saç Kesimi",
        service4Desc: "Çocuklar için özel ve sabırlı kesim (12 yaşa kadar).",
        service5Title: "Cilt Bakımı & Maske",
        service5Desc: "Ferah bir cilt için siyah nokta ve gözenek maskesi.",
        // Damen Services
        damenS1Title: "Kadın Saç Kesimi & Fön",
        damenS1Desc: "Kişiye özel kesim, yıkama ve fön ile şekillendirme.",
        damenS2Title: "Yıkama & Fön / Şekillendirme",
        damenS2Desc: "Bakım kürüyle saç yıkama, dalgalı veya düz fön.",
        damenS3Title: "Balyaj / Röfle Komple",
        damenS3Desc: "Doğal geçişli balyaj teknikleri ve cila uygulaması.",
        damenS4Title: "Dip Boya & Komple Boya",
        damenS4Desc: "Saçı koruyan kaliteli boyalar ve renk sabitleme.",
        damenS5Title: "Keratin & Yoğun Bakım",
        damenS5Desc: "İpeksi parlaklık ve elektriklenmeyi önleyen onarıcı bakım.",
        damenS6Title: "Kaş Alma & Şekillendirme",
        damenS6Desc: "İple hassas kaş tasarımı ve isteğe bağlı renklendirme.",
        selectServiceBtn: "Seç & Randevu Al",
        fullPriceTitle: "Tüm Fiyat Listesi (Erkek)",
        damenPriceTitle: "Tüm Fiyat Listesi (Kadın)",
        // Herren Prices
        p1Name: "Profesyonel Erkek Saç Kesimi",
        p1Sub: "Makas veya makine kesimi ve şekillendirme",
        p2Name: "Sakal Düzeltme & Kontur",
        p2Sub: "Hassas tıraş ve çizgi belirleme",
        p3Name: "Saç + Sakal + Yıkama Komple",
        p3Sub: "Eksiksiz stil ve bakım paketi",
        p4Name: "Çocuk Saç Kesimi",
        p4Sub: "Gençler ve çocuklar için",
        p5Name: "Yüz Maskesi & Derin Temizlik",
        p5Sub: "Rahatlatıcı cilt bakımı",
        // Damen Prices
        dp1Name: "Kadın Saç Kesimi, Yıkama & Fön",
        dp1Sub: "Eksiksiz kesim ve fön şekillendirme",
        dp2Name: "Yıkama & Fön Şekillendirme",
        dp2Sub: "Bakımlı yıkama ve stil fönü",
        dp3Name: "Balyaj / Ombre & Cila",
        dp3Sub: "Lüks renk geçişleri ve parlaklık",
        dp4Name: "Dip & Komple Saç Boyama",
        dp4Sub: "Canlı renkler ve beyaz kapama",
        dp5Name: "Keratin & Yoğun Saç Maskesi",
        dp5Sub: "Derinlemesine onarım ve pürüzsüzlük",
        dp6Name: "Kaş Alma & Boyama",
        dp6Sub: "İple kaş alımı ve form tasarımı",
        bookingTag: "ONLINE RANDEVU",
        bookingTitle: "Randevunuzu Oluşturun",
        bookingSub: "Personeli, tarih ve saatinizi seçin. Anında onay alın.",
        lblBarber: "Personel / Kuaför Seçin",
        barber1Role: "Usta Berber & Fade Uzmanı",
        barber2Role: "Sakal & Saç Uzmanı",
        stylist1Role: "Usta Kadın Kuaförü & Renk Uzmanı",
        stylist2Role: "Kesim, Fön & Balyaj Uzmanı",
        lblService: "Hizmet Seçimi",
        phSelectService: "Lütfen bir hizmet seçin...",
        lblDate: "Tarih & Saat Seçin",
        dateHelp: "Pazar günleri salonumuz kapalıdır.",
        lblTime: "Uygun Saati Seçin",
        timeSlotPlaceholder: "Uygun saatleri görmek için lütfen soldan bir tarih seçin.",
        lblName: "Bilgileriniz",
        phName: "Adınız ve Soyadınız",
        lblPhone: "Telefon Numaranız",
        phPhone: "Telefon Numaranız",
        lblNotes: "Notlar (İsteğe Bağlı)",
        phNotes: "Anmerkungen (Optional)",
        btnConfirmBooking: "Randevuyu Onayla",
        contactTag: "İLETİŞİM & KONUM",
        contactTitle: "Bizi Mörfelden-Walldorf'ta Ziyaret Edin",
        addrLabel: "Adres",
        phoneLabel: "Telefon & Randevu",
        walkInSub: "Randevusuz ziyaretler de mümkündür",
        instaLabel: "Instagram",
        instaSub: "Instagram üzerinden iletişim ve örnekler",
        hoursLabel: "Çalışma Saatleri",
        footerTagline: "Mörfelden-Walldorf'taki birinci sınıf kadın ve erkek kuaförünüz.",
        adminBtn: "Yönetici Paneli",
        allRights: "Tüm hakları saklıdır.",
        modalSuccessTitle: "Randevunuz Oluşturuldu!",
        modalCloseBtn: "Tamam",
        slotAvailableText: "Boş",
        slotBookedText: "Dolu",
        sundayClosedText: "Pazar günleri salonumuz kapalıdır. Lütfen Pazartesi - Cumartesi arası bir gün seçin.",
        selectTimeAlert: "Lütfen uygun bir randevu saati seçin."
    },
    en: {
        docTitle: "R8 Friseur | Mörfelden-Walldorf",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services & Prices",
        navContact: "Contact & Location",
        navBookBtn: "Book Now",
        navBooking: "Book Now",
        walkInBadge: "Walk-ins Welcome",
        tabHerren: "Men",
        tabDamen: "Women",
        portalTitle: "Welcome to R8 Friseur",
        portalSubtitle: "Please select your salon section:",
        portalHerrenTag: "BARBERSHOP",
        portalHerrenTitle: "MEN / HERREN",
        portalHerrenDesc: "Men's haircuts, skin fades, beard grooming & sharp contours",
        portalHerrenBtn: "Enter Men's Section",
        portalDamenTag: "HAIR & BEAUTY",
        portalDamenTitle: "WOMEN / DAMEN",
        portalDamenDesc: "Women's cuts, blow-dry styling, balayage, coloring & keratin treatments",
        portalDamenBtn: "Enter Women's Section",
        currentSectionLabel: "Men's Salon",
        currentSectionLabelDamen: "Women's Salon",
        heroTitle: 'Sharp Cuts & <span class="mono-gradient-text">Precision Beard Care</span>',
        heroSubtitle: "Welcome to R8 Friseur Men's Section in Mörfelden-Walldorf. We offer professional haircuts, modern fades, and premium grooming.",
        heroTitleDamen: 'Elegant Style & <span class="mono-gradient-text">Hair Excellence</span>',
        heroSubtitleDamen: "Welcome to R8 Friseur Women's Section in Mörfelden-Walldorf. Discover signature cuts, balayage, coloring, and luxury hair care.",
        heroBookBtn: "Book Online Appointment",
        stat1Title: "Professional Fades",
        stat1Sub: "Flawless transitions & styles",
        stat2Title: "Walk-ins Welcome",
        stat2Sub: "Just drop by anytime",
        statusChecking: "Checking status...",
        statusOpen: "Open Now",
        statusClosed: "Currently Closed",
        hoursMonFri: "Mon - Fri:",
        hoursSat: "Saturday:",
        hoursSun: "Sunday:",
        hoursClosed: "Closed",
        aboutTag: "ABOUT OUR SHOP",
        aboutTitle: "R8 Friseur – Tradition Meets Modern Style",
        aboutDesc1: "Located at Westendstraße 3 in Mörfelden-Walldorf, we provide separate dedicated sections for men and women.",
        aboutDesc2: "Whether it's a precision skin fade, classic cut, balayage, or hot-towel beard treatment: customer satisfaction is our top priority.",
        feat1Title: "Precision Cuts & Color",
        feat1Desc: "Custom fade transitions and modern balayage coloring.",
        feat2Title: "Premium Hair Care",
        feat2Desc: "Beard styling, keratin masks, and luxury hair treatments.",
        feat3Title: "Walk-in or Appointment",
        feat3Desc: "Book online, call us, or just walk in.",
        satisfactionText: "Customer Satisfaction",
        servicesTag: "SERVICES & PRICING",
        servicesTitle: "Our Services & Price List",
        servicesSub: "Premium quality at fair prices. Select your desired service.",
        popularBadge: "Popular",
        comboBadge: "BEST DEAL",
        // Herren Services
        service1Title: "Men's Haircut",
        service1Desc: "Classic or modern haircut including consultation, wash & styling.",
        service2Title: "Beard Grooming",
        service2Desc: "Beard shaping, razor line up & nourishing beard oil.",
        service3Title: "Hair & Beard Full Package",
        service3Desc: "The ultimate package: haircut, fade, full beard shaping & wash.",
        service4Title: "Kids Haircut",
        service4Desc: "Patient & stylish haircut for kids (up to 12 years).",
        service5Title: "Facial Care & Mask",
        service5Desc: "Deep pore cleansing face mask for skin refresh.",
        // Damen Services
        damenS1Title: "Women's Haircut & Styling",
        damenS1Desc: "Custom consultation, wash, precision cut & blow-dry styling.",
        damenS2Title: "Wash & Blow-Dry",
        damenS2Desc: "Nourishing wash with blowout waves or straight styling.",
        damenS3Title: "Balayage / Highlights",
        damenS3Desc: "Seamless balayage transition including glossing & hair mask.",
        damenS4Title: "Root & Full Hair Color",
        damenS4Desc: "Gentle coloration, radiant color results & shine seal.",
        damenS5Title: "Keratin & Deep Conditioning",
        damenS5Desc: "Intensive repair treatment for silky soft, frizz-free hair.",
        damenS6Title: "Eyebrow Threading & Shape",
        damenS6Desc: "Sharp thread shaping with optional tinting.",
        selectServiceBtn: "Select & Book",
        fullPriceTitle: "Complete Price Overview (Men)",
        damenPriceTitle: "Complete Price Overview (Women)",
        // Herren Prices
        p1Name: "Professional Men's Haircut",
        p1Sub: "Scissors or clipper cut with styling finish",
        p2Name: "Beard Trim & Contours",
        p2Sub: "Precision shave and line shaping",
        p3Name: "Haircut + Beard + Hair Wash",
        p3Sub: "Full styling & grooming package",
        p4Name: "Kids Haircut",
        p4Sub: "For youths & kids",
        p5Name: "Face Mask & Pore Care",
        p5Sub: "Refreshing skin treatment",
        // Damen Prices
        dp1Name: "Women's Cut, Wash & Blow-Dry",
        dp1Sub: "Full signature haircut and blowout finish",
        dp2Name: "Wash, Blow-Dry & Styling",
        dp2Sub: "Care wash with curl or straight blowout",
        dp3Name: "Balayage / Ombré & Glossing",
        dp3Sub: "Premium color transition and shine seal",
        dp4Name: "Root & Full Hair Coloration",
        dp4Sub: "Color refresh and grey coverage protection",
        dp5Name: "Keratin & Intensive Hair Mask",
        dp5Sub: "Deep bond repair & anti-frizz shine",
        dp6Name: "Eyebrow Threading & Tint",
        dp6Sub: "Precise threading and tint design",
        bookingTag: "ONLINE BOOKING",
        bookingTitle: "Book Your Appointment",
        bookingSub: "Choose your preferred staff, date and time. Get instant confirmation.",
        lblBarber: "Select Your Stylist",
        barber1Role: "Master Stylist & Fade Specialist",
        barber2Role: "Beard & Hair Specialist",
        stylist1Role: "Master Hair Stylist & Color Expert",
        stylist2Role: "Cut, Blowout & Balayage Specialist",
        lblService: "Select Service",
        phSelectService: "Please choose a service...",
        lblDate: "Select Date & Time",
        dateHelp: "The salon is closed on Sundays.",
        lblTime: "Select Available Time",
        timeSlotPlaceholder: "Please select a date on the left to see available time slots.",
        lblName: "Your Details",
        phName: "Full Name",
        lblPhone: "Phone Number",
        phPhone: "Phone Number",
        lblNotes: "Notes (Optional)",
        phNotes: "Notes (Optional)",
        btnConfirmBooking: "Confirm Booking Now",
        contactTag: "CONTACT & LOCATION",
        contactTitle: "Visit Us in Mörfelden-Walldorf",
        addrLabel: "Address",
        phoneLabel: "Phone & Appointments",
        walkInSub: "Walk-in visits welcome without appointment",
        instaLabel: "Instagram",
        instaSub: "Book & explore styles on Instagram",
        hoursLabel: "Working Hours",
        footerTagline: "Your premier hair salon & barbershop in Mörfelden-Walldorf.",
        adminBtn: "Admin Panel",
        allRights: "All rights reserved.",
        modalSuccessTitle: "Appointment Booked Successfully!",
        modalCloseBtn: "Got it",
        slotAvailableText: "Available",
        slotBookedText: "Booked",
        sundayClosedText: "The salon is closed on Sundays. Please select Monday to Saturday.",
        selectTimeAlert: "Please select an available time slot."
    }
};

let currentLang = 'de';
let currentGender = 'herren'; // 'herren' | 'damen'

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Staff Cards Selection Click Listeners
    const barberCard1 = document.getElementById('barberCard1');
    const barberCard2 = document.getElementById('barberCard2');
    const stylistCard1 = document.getElementById('stylistCard1');
    const stylistCard2 = document.getElementById('stylistCard2');

    if (barberCard1) barberCard1.addEventListener('click', () => selectBarber('Ahmet (Master Barber)'));
    if (barberCard2) barberCard2.addEventListener('click', () => selectBarber('Can (Beard & Style)'));
    if (stylistCard1) stylistCard1.addEventListener('click', () => selectBarber('Elena (Balayage Expert)'));
    if (stylistCard2) stylistCard2.addEventListener('click', () => selectBarber('Aylin (Styling & Cut)'));

    // 3. Set Min Date
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.addEventListener('change', handleDateChange);
    }

    // 4. Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }

    // 5. Live Store Status Check
    updateLiveBusinessStatus();
    setInterval(updateLiveBusinessStatus, 60000);

    // 6. Check saved gender preference or show portal overlay
    const savedGender = localStorage.getItem('r8_gender_section');
    if (savedGender === 'herren' || savedGender === 'damen') {
        chooseGenderSection(savedGender, true);
    } else {
        openGenderPortal();
    }

    // 7. Initial language setup
    changeLanguage(currentLang);
}

// --- Gender Section Selection & Switching ---
function openGenderPortal() {
    const portal = document.getElementById('genderPortalModal');
    if (portal) {
        portal.classList.add('active');
    }
}
window.openGenderPortal = openGenderPortal;

function chooseGenderSection(gender, skipScroll) {
    currentGender = gender;
    localStorage.setItem('r8_gender_section', gender);

    // Close portal modal
    const portal = document.getElementById('genderPortalModal');
    if (portal) {
        portal.classList.remove('active');
    }

    // Update navbar buttons
    const tabHerren = document.getElementById('tabHerren');
    const tabDamen = document.getElementById('tabDamen');
    if (tabHerren && tabDamen) {
        if (gender === 'herren') {
            tabHerren.classList.add('active');
            tabDamen.classList.remove('active');
        } else {
            tabDamen.classList.add('active');
            tabHerren.classList.remove('active');
        }
    }

    // Update hidden input
    const genderInput = document.getElementById('selectedGender');
    if (genderInput) {
        genderInput.value = gender === 'damen' ? 'Damen' : 'Herren';
    }

    // Toggle Services Cards
    const herrenServicesGrid = document.getElementById('herrenServicesGrid');
    const damenServicesGrid = document.getElementById('damenServicesGrid');
    if (herrenServicesGrid && damenServicesGrid) {
        if (gender === 'herren') {
            herrenServicesGrid.style.display = 'grid';
            damenServicesGrid.style.display = 'none';
        } else {
            herrenServicesGrid.style.display = 'none';
            damenServicesGrid.style.display = 'grid';
        }
    }

    // Toggle Price Tables
    const herrenPriceTable = document.getElementById('herrenPriceTable');
    const damenPriceTable = document.getElementById('damenPriceTable');
    if (herrenPriceTable && damenPriceTable) {
        if (gender === 'herren') {
            herrenPriceTable.style.display = 'block';
            damenPriceTable.style.display = 'none';
        } else {
            herrenPriceTable.style.display = 'none';
            damenPriceTable.style.display = 'block';
        }
    }

    // Toggle Staff Selection in Booking Wizard
    const herrenBarbersGrid = document.getElementById('herrenBarbersGrid');
    const damenStylistsGrid = document.getElementById('damenStylistsGrid');
    if (herrenBarbersGrid && damenStylistsGrid) {
        if (gender === 'herren') {
            herrenBarbersGrid.style.display = 'grid';
            damenStylistsGrid.style.display = 'none';
            selectBarber('Ahmet (Master Barber)');
        } else {
            herrenBarbersGrid.style.display = 'none';
            damenStylistsGrid.style.display = 'grid';
            selectBarber('Elena (Balayage Expert)');
        }
    }

    // Toggle Service Tiles in Booking Wizard
    const herrenServiceTiles = document.getElementById('herrenServiceTiles');
    const damenServiceTiles = document.getElementById('damenServiceTiles');
    if (herrenServiceTiles && damenServiceTiles) {
        if (gender === 'herren') {
            herrenServiceTiles.style.display = 'grid';
            damenServiceTiles.style.display = 'none';
            syncServiceSelect('Herrenhaarschnitt');
            const r = document.querySelector('input[name="serviceRadio"][value="Herrenhaarschnitt"]');
            if (r) r.checked = true;
        } else {
            herrenServiceTiles.style.display = 'none';
            damenServiceTiles.style.display = 'grid';
            syncServiceSelect('Damenschnitt & Styling');
            const r = document.querySelector('input[name="serviceRadioDamen"][value="Damenschnitt & Styling"]');
            if (r) r.checked = true;
        }
    }

    // Update Hero text and badge
    updateHeroForGender();

    const dateInput = document.getElementById('bookingDate');
    if (dateInput && dateInput.value) {
        renderTimeSlots(dateInput.value);
    }
}
window.chooseGenderSection = chooseGenderSection;

function updateHeroForGender() {
    const dict = translations[currentLang];
    const heroTitle = document.getElementById('heroMainTitle');
    const heroSub = document.getElementById('heroMainSubtitle');
    const heroBadge = document.getElementById('heroGenderBadge');

    if (currentGender === 'herren') {
        if (heroTitle && dict.heroTitle) heroTitle.innerHTML = dict.heroTitle;
        if (heroSub && dict.heroSubtitle) heroSub.textContent = dict.heroSubtitle;
        if (heroBadge) heroBadge.innerHTML = `<i class="fa-solid fa-scissors"></i> <span>${dict.currentSectionLabel || 'Herren Salon'}</span>`;
    } else {
        if (heroTitle && dict.heroTitleDamen) heroTitle.innerHTML = dict.heroTitleDamen;
        if (heroSub && dict.heroSubtitleDamen) heroSub.textContent = dict.heroSubtitleDamen;
        if (heroBadge) heroBadge.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span>${dict.currentSectionLabelDamen || 'Damen Salon'}</span>`;
    }
}

// --- Barber & Staff Selection Logic ---
function selectBarber(barberName) {
    const barberInput = document.getElementById('selectedBarber');
    if (barberInput) {
        barberInput.value = barberName;
    }

    const card1 = document.getElementById('barberCard1');
    const card2 = document.getElementById('barberCard2');
    const stylist1 = document.getElementById('stylistCard1');
    const stylist2 = document.getElementById('stylistCard2');

    [card1, card2, stylist1, stylist2].forEach(c => {
        if (c) c.classList.remove('selected');
    });

    if ((barberName.includes('Ahmet') || barberName === 'Berber 1') && card1) card1.classList.add('selected');
    if ((barberName.includes('Can') || barberName === 'Berber 2') && card2) card2.classList.add('selected');
    if ((barberName.includes('Elena') || barberName.includes('Stylistin 1')) && stylist1) stylist1.classList.add('selected');
    if ((barberName.includes('Aylin') || barberName.includes('Stylistin 2')) && stylist2) stylist2.classList.add('selected');

    const dateInput = document.getElementById('bookingDate');
    if (dateInput && dateInput.value) {
        renderTimeSlots(dateInput.value);
    }
}
window.selectBarber = selectBarber;

// --- Sync Service Selection Helper ---
function syncServiceSelect(val) {
    const sel = document.getElementById('serviceSelect');
    if (sel) {
        sel.value = val;
    }
}
window.syncServiceSelect = syncServiceSelect;

// --- Service Card Quick Selection ---
function quickSelectService(serviceName) {
    syncServiceSelect(serviceName);

    // Sync radio in Herren or Damen grid
    const radioH = document.querySelector(`input[name="serviceRadio"][value="${serviceName}"]`);
    if (radioH) radioH.checked = true;

    const radioD = document.querySelector(`input[name="serviceRadioDamen"][value="${serviceName}"]`);
    if (radioD) radioD.checked = true;

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
}
window.quickSelectService = quickSelectService;

// --- i18n Language Switcher Logic ---
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    if (dict.docTitle) {
        document.title = dict.docTitle;
    }

    document.querySelectorAll('[data-ph-i18n]').forEach(el => {
        const key = el.getAttribute('data-ph-i18n');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    updateLiveBusinessStatus();
    updateHeroForGender();

    const dateInput = document.getElementById('bookingDate');
    if (dateInput && dateInput.value) {
        renderTimeSlots(dateInput.value);
    }
}
window.changeLanguage = changeLanguage;

// --- Live Business Hours Check ---
function updateLiveBusinessStatus() {
    const dot = document.getElementById('statusDot');
    const label = document.getElementById('statusLabel');
    if (!dot || !label) return;

    const dict = translations[currentLang];
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTimeVal = hour * 100 + minute;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
        if (currentTimeVal >= 900 && currentTimeVal < 1900) {
            isOpen = true;
        }
    } else if (day === 6) {
        if (currentTimeVal >= 900 && currentTimeVal < 1800) {
            isOpen = true;
        }
    }

    if (isOpen) {
        dot.className = 'status-dot';
        label.textContent = dict.statusOpen;
    } else {
        dot.className = 'status-dot closed';
        label.textContent = dict.statusClosed;
    }
}

// --- Calendar & Time Slot Logic ---
function handleDateChange(e) {
    const selectedDateStr = e.target.value;
    renderTimeSlots(selectedDateStr);
}

function renderTimeSlots(dateStr) {
    const slotsContainer = document.getElementById('timeSlotsContainer');
    const selectedTimeInput = document.getElementById('selectedTimeSlot');
    if (!slotsContainer || !selectedTimeInput) return;

    selectedTimeInput.value = '';
    slotsContainer.innerHTML = '';

    const dict = translations[currentLang];
    const dateObj = new Date(dateStr);
    const dayOfWeek = dateObj.getDay();

    if (dayOfWeek === 0) {
        slotsContainer.innerHTML = `
            <div class="slots-placeholder">
                <i class="fa-solid fa-store-slash"></i>
                <p style="color: var(--status-closed); font-weight: 600;">${dict.sundayClosedText}</p>
            </div>
        `;
        return;
    }

    // Mo-Fr: last slot at 18:15 (9:00 + 12 slots of 45min = 18:00), Sa: last at 17:15
    const maxMinutes = (dayOfWeek === 6) ? (17 * 60 + 15) : (18 * 60 + 15);

    const timeSlots = [];
    let totalMin = 9 * 60; // start at 09:00
    while (totalMin <= maxMinutes) {
        const h = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        const hourStr = h < 10 ? `0${h}` : `${h}`;
        const minStr = m < 10 ? `0${m}` : `${m}`;
        timeSlots.push(`${hourStr}:${minStr}`);
        totalMin += 45;
    }

    // Selected Barber / Stylist for separate calendar schedule
    const defaultStaff = currentGender === 'damen' ? 'Elena (Balayage Expert)' : 'Ahmet (Master Barber)';
    const selectedBarber = document.getElementById('selectedBarber')?.value || defaultStaff;

    const appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    const bookedTimes = appointments
        .filter(app => {
            if (app.date !== dateStr || app.status === 'Storniert') return false;
            const appB = app.barber || 'Ahmet (Master Barber)';
            if (selectedBarber.includes('Ahmet')) return appB.includes('Ahmet') || appB === 'Berber 1';
            if (selectedBarber.includes('Can')) return appB.includes('Can') || appB === 'Berber 2';
            if (selectedBarber.includes('Elena')) return appB.includes('Elena') || appB.includes('Stylistin 1');
            if (selectedBarber.includes('Aylin')) return appB.includes('Aylin') || appB.includes('Stylistin 2');
            return appB === selectedBarber;
        })
        .map(app => app.time);

    timeSlots.forEach(time => {
        const isBooked = bookedTimes.includes(time);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `time-slot-btn ${isBooked ? 'booked' : ''}`;
        btn.innerHTML = `
            <span>${time}</span>
            <small>${isBooked ? dict.slotBookedText : dict.slotAvailableText}</small>
        `;

        if (!isBooked) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTimeInput.value = time;
            });
        } else {
            btn.disabled = true;
        }

        slotsContainer.appendChild(btn);
    });
}

// --- Booking Form Submit Handler ---
function handleBookingSubmit(e) {
    e.preventDefault();

    const gender = currentGender === 'damen' ? 'Damen' : 'Herren';
    const defaultStaff = gender === 'Damen' ? 'Elena (Balayage Expert)' : 'Ahmet (Master Barber)';
    const barber = document.getElementById('selectedBarber')?.value || defaultStaff;
    
    let service = document.getElementById('serviceSelect').value;
    if (gender === 'Herren') {
        const selectedRadio = document.querySelector('input[name="serviceRadio"]:checked');
        if (selectedRadio) service = selectedRadio.value;
    } else {
        const selectedRadioD = document.querySelector('input[name="serviceRadioDamen"]:checked');
        if (selectedRadioD) service = selectedRadioD.value;
    }

    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('selectedTimeSlot').value;
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const notes = document.getElementById('customerNotes').value.trim();

    const dict = translations[currentLang];

    if (!time) {
        alert(dict.selectTimeAlert);
        return;
    }

    const newAppointment = {
        id: Date.now(),
        gender,
        barber,
        service,
        date,
        time,
        name,
        phone,
        notes,
        status: 'Bekliyor',
        createdAt: new Date().toISOString()
    };

    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    appointments.push(newAppointment);
    localStorage.setItem('barberAppointments', JSON.stringify(appointments));

    // Send Email Notification to Habapli7@gmail.com
    sendEmailNotification(newAppointment);

    const modalMsg = document.getElementById('modalMessage');
    if (modalMsg) {
        modalMsg.innerHTML = `
            <strong>Salon / Bölüm:</strong> ${escapeHtml(gender)}<br>
            <strong>Personel / Stylist:</strong> ${escapeHtml(barber)}<br>
            <strong>Kunde / Name:</strong> ${escapeHtml(name)}<br>
            <strong>Datum:</strong> ${formatDisplayDate(date)} | <strong>Uhrzeit:</strong> ${time}<br>
            <strong>Leistung:</strong> ${escapeHtml(service)}<br>
            <strong>Telefon:</strong> ${escapeHtml(phone)}<br>
            <div style="margin-top: 8px; font-size: 0.82rem; color: var(--cyber-teal);">
                <i class="fa-solid fa-envelope"></i> E-Mail Benachrichtigung an Salon gesendet!
            </div>
        `;
    }

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active');
    }

    document.getElementById('booking-form').reset();
    document.getElementById('selectedTimeSlot').value = '';
    selectBarber(barber);
    renderTimeSlots(date);
}

// --- Email Notification Dispatcher ---
const NOTIFICATION_EMAIL = "Habapli7@gmail.com";

function sendEmailNotification(appointment) {
    const formattedDate = formatDisplayDate(appointment.date);
    const genderLabel = appointment.gender || (appointment.barber?.includes('Stylistin') ? 'Damen' : 'Herren');
    
    const payload = {
        _subject: `💈 YENİ TERMİN [${genderLabel.toUpperCase()} - ${appointment.barber || 'Personel'}]: ${appointment.name} - ${formattedDate} (${appointment.time})`,
        _template: "table",
        _captcha: "false",
        "Salon / Bölüm": genderLabel,
        "Personel / Kuaför": appointment.barber || "Belirtilmemiş",
        "Müşteri Adı / Name": appointment.name,
        "Telefon / Phone": appointment.phone,
        "Tarih / Date": formattedDate,
        "Saat / Time": appointment.time,
        "Hizmet / Service": appointment.service,
        "Notlar / Notes": appointment.notes || "Yok / Keine",
        "Randevu Durumu": appointment.status || "Bekliyor",
        "Kayıt Zamanı": new Date().toLocaleString('de-DE')
    };

    fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Email notification sent successfully to " + NOTIFICATION_EMAIL, data);
    })
    .catch(error => {
        console.warn("Email notification delivery warning:", error);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
    }
}
window.closeBookingModal = closeBookingModal;

function formatDisplayDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
}
