import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    "en": {
        About: "About",
        Community: "Community",
        WhatWeDo: "What we do",
        Partners: "Partners",
        Events: "Events",
        Contact: "Contact",
        Welcome: "Welcome to VGG Garden!",
        GardenDef: "Vollguter Gemeinschaftsgarten (VGG) is a Neukölln-based community project located in the heart of the Kindl Kiez. VGG is a garden. VGG is a platform for experimentation, where you can explore the worlds of plants and herbs and where you can build installations from recycled material. It is a place to learn from each other, to lern about bees, how to repair your bike, how to weld, how to prepare dumplings for a large community or discover all about composting. VGG is a platform for artists and performers. For some, VGG is a home. VGG is a place to meet and hang out. VGG is an open community of people who like to create ideas, cook and build things together and get their hands dirty. Everyone is welcome, we take care of all beds and plants jointly. Simply being there and participating makes you part of VGG. We believe in bio- and social diversity. We do not tolerate racism, sexism and any other form of discrimination. We are proud of our diversity and make space to appreciate all living things. We believe in the three permaculture ethics: earth care, people care, fair share. COME AND JOIN US!",
        OpeningHours: "Opening Hours: the Garden is always open for you! Your fellow gardeners often meet on Saturday afternoons.Contact us and come around!",
        GetInTouch: "(Get in touch)",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest!",
        Title1: "VGG Garden",
        Desc1: "Sunny and flowery times!",
        Title2: "VGG Garden",
        Desc2: "Before everything started...",
        Title3: "VGG Garden",
        Desc3: "Weekly meeting where we share food and love <3",
        GardenerMonth: "Our awsome gardener of this month is... Olivia",
        GardenerDesc: "This month, mother nature has chosen Olivia as the gardener of the month. Oli is one of the foundation of the garden and her knowledge together with her shinny spirit make her an incredible asset for the garden!",
        CommDesc: "VGG garden is composed of a wide variety of people where everyone is welcome. We are gardeners, builders, party bees with different background, culture, colors, gender and talents",
        CommP1: "Ritsuko, a learning gardener / a learning nurse. here for fun, joy and inspiraton with the garden community.",
        CommP2: "Edith, Flowers lover and software developer, here to grow plants and spirituality.",
        CommP3: "Olivia is a permaculture enthusiast and an architect, has a strong fascination for natural life cycles and believes in community empowerment through social action.",
        CommP4: "Fabian is a hyperactive maker with a special interest in people, art and technology. Loves spontaneous interactions and stands for a human-, animal- and plant-friendly collective development of the Kindl area.",
        CommP5: "Ina is passionate about sustainability and founder of a social business building a circular economy system for textiles. She is here to meet people who also want to make a change and are inspired to have a positive impact on how we live and grow together.",
        CommP6: "Inga likes to garden and learn more about all kinds of plants. She believes in community and the power of civil society involvement and thinks it's important to preserve open spaces like this garden in cities. Her work is in digitization to reduce food waste.",
        CommP7: "Felix. Food enthusiast. Gardener. Entrepreneur. Creator. Friend.",
        CommP8: "Blown in from the Windy City,  meet Sam.  Her favorite activity in the garden is pulling vegetables out of the soil and dancing with her hoop.",
        CommP9: "Sampson, former farmer in Cote d‘Ivoire, is bringing knowledge on cultivation of tomatoes and flowers from his homeland to the garden.",
        CommP10: "Jennie is a happy amateur, eager to learn new things and loves the empowerment that comes from bringing people together in communities. Believes we all would feel better if we’d spend more time with Mother Nature.",
        WWDDesc: "Our activities in the garden vary to a great extent. We cultivate the entire area ourselves making sure that beds are built and maintained, we plant flowers, herbs, fruit and vegetables, we make sure that we water the plants regularly and that the garden stays clean. Through our activities we offer workshops, for example soap workshop, bicycle repair workshop, clothing exchanges, seed exchange etc. We also organize events e.g. garden parties, garden-cinema, flea markets and much more. The garden is also a meeting point for many neighbours* and should invite you to stay without the pressure of consumption.",
        Pic1: "Pastatafel",
        Pic2: "Growing wilderness",
        Pic3: "Painting action with MAKE",
        Pic4: "Winter moods",
        Pic5: "Clothes swap market ",
        Pic6: "Pink sunset",
        Pic7: "Upcycling workshop",
        Pic8: "Witches gathering",
        Pic9: "Wood upcycling for laying in the sun",
        Pic10: "Pastatafel piedina workshop",
        Pic11: "Flower power",
        Pic12: "Painting action with Morgana",
        Pic13: "Metallic worm in the plants",
        Pic14: "Building action",
        Pic15: "Enjoying the sunset",
        Pic16: "The locomotive is about to leave",
        Pic17: "The three little pigs",
        Pic18: "Vona's Bells",
        Pic19: "Concert in the garden",
        Pic20: "The owls are not what they seam",
        Pic21: "Cinema night with Vaginal Davis and Arsenal - Institut für Film und Videokunst e.V.",
        Pic22: "Pollinating bee ©Anna-Maria Ihle",
        Pic23: "Garden vibe ©Anna-Maria Ihle",
        Pic24: "An:ton dj set ©Anna-Maria Ihle",
        Pic25: "Making friends in the garden ©Anna-Maria Ihle",
        Pic26: "Cooking is loving ©Anna-Maria Ihle",
        Pic27: "Bluming times",
        Pic28: "Welcome and take your trash <3",
        Pic29: "Garden fest ©Anna-Maria Ihle",
        Pic30: "Flamenco Dancers ©Anna-Maria Ihle",
        Pic31: "Bailando Rodriguez dj set ©Anna-Maria Ihle",
        Pic32: "Markusen at Herbstfest",
        Pic33: "Pollinating bee",
        Pic34: "Garden experiments",
        Pic35: "Neighbours",
        Pic36: "Patato tower system",
        Pic37: "Garden berries",
        Pic38: "Garden lemonade",
        Pic39: "Spring salad",
        Pic40: "Sommer seeds collection",
        Pic41: "Vegetables, bread and love ©Anna-Maria Ihle",
        Pic42: "Garden party",
        PartnerDesc: "VGG has great partners with whom we work together and who support us: ",
        ZH: "Zuhause - Zuhause e.V. is a diverse collective of artists. The Vollguter Gemeinschaftsgarten was initiated in 2017 by Zuhause e.V. ",
        IZ: "Information centre - The information centre on the Vollgut was planned by 36 architecture students* as a DesignBuild project of the Natural Building Lab and is located in the middle of the Vollgut community garden.",
        Stif: "The Edith Maryon is a Foundation that works to remove land from speculation so that it can be used in a socially responsible manner by themselves or by others. The VGG is located in such a property.",
        FriendsDesc: "We join forces with other great initiatives that have like-minded visions. Together we aim to realize communities, greener cities and flurishing societies as we envision them!",
        EventDesc: "We usually meet on Saturday afternoons in VGG to take care of the garden, fix and build things and hung out together. Contact us beforehand and come and join us. For other events check out our facebook page. Come and join us!",
        ContactDesc: "Questions? Ideas? Contributions? Reach out any time!",
        FN: "First Name",
        LN: "Last Name ",
        Email: "Email",
        tandCagree: "I agree with the terms and conditions",
        PtandCagree: "Please agree with the terms and conditions",
        Submit: "Submit",
        YourMessage: "Your message",
        GeneralInfo: "General Information:",
        Covid: "Covid-19",
        GeneralInfoDesc: "To keep us all healthy, please keep a minimum of 1.5 meters away from people who are not living with you when out in public.When sitting in parks or other green spaces, you must keep a 5-meter distance(that’s roughly 16.5 feet) from others.",
        ThankYou: "Thank you!",
        Thank: "Thank you",
        ThankMessage: "for reaching out to us. We will come back to you as soon as possible!",
        Close: "Close",
        tandC: "TandC",
        TermsAndConditions: " Terms and Conditions",
        tandcDesc1: " Like most similar websites, this site uses cookies. On this page we explain more about cookies and how we use them.By using this website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.",
        AboutCookies: "About cookies",
        tandcDesc2: "Cookies are files, often including unique identifiers, that are sent by web servers to web browsers, and which may then be sent back to the server each time the browser requests a page from the server.Cookies can be used by web servers to identify and track users as they navigate different pages on a website, and to identify users returning to a website.Cookies may be either persistent cookies or session cookies.A persistent cookie consists of a text file sent by a web server to a web browser, which will be stored by the browser and will remain valid until its set expiry date(unless deleted by the user before the expiry date).A session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.",
        CookiesWebsite: "Cookies on this website",
        tandcDesc3: " We use both session cookies and persistent cookies on this website."

    },
    "de": {
        About: "Über uns",
        Community: "Gemeinschaft",
        WhatWeDo: "Was wir machen",
        Partners: "Partner",
        Events: "Veranstaltungen",
        Contact: "Kontakt",
        Welcome: "Willkommen im Vollguter Gemeinschaftsgarten!",
        GardenDef: "Der Vollguter Gemeinschaftsgarten (VGG) ist ein Neuköllner Gemeinschaftsprojekt, das im Herzen des Kindl Kiez liegt. Der VGG ist ein Garten. VGG ist eine Experimentierplattform, auf der du die Pflanzen- und Kräuterwelten erkunden und Installationen aus Recyclingmaterial bauen kannst. Es ist ein Ort, um voneinander zu lernen, über Bienen, wie man sein Fahrrad repariert, wie man schweißt, wie man Dumplings für eine große Gemeinschaft zubereitet oder alles über Kompostierung entdeckt. Die VGG ist eine Plattform für Künstler und Performer. Für einige ist die VGG ein Zuhause. Die VGG ist ein Ort der Begegnung und des Zusammenseins. VGG ist eine offene Gemeinschaft von Menschen, die gerne Ideen entwickeln, gemeinsam kochen, bauen und sich dabei die Hände schmutzig machen! Jede*r ist willkommen, wir kümmern uns gemeinsam um alle Beete und Pflanzen. Dabei zu sein, macht dich zu einem Teil des VGG. Wir glauben an die biologische und soziale Vielfalt. Wir tolerieren keinen Rassismus, Sexismus und andere Formen der Diskriminierung. Wir sind stolz auf unsere Vielfalt und schaffen Raum für die Wertschätzung aller Lebewesen. Wir glauben an die drei Ethiken der Permakultur: Sorge um die Erde, Sorge um die Menschen, gerechter Anteil. Komm vorbei, wir freuen uns auf dich!",
        OpeningHours: "Öffnungszeiten: Der Garten ist immer für Dich geöffnet! Deine Mitgärtnerinnen und Mitgärtner treffen sich oft am Samstagnachmittag.Kontaktier uns und kommvorbei",
        WeSigned: "Wir haben das ",
        Urban: "'Urban Gardening Manifest' mitgezeichnet.",
        Title1: "Vollguter Gemeinschaftsgarten",
        Desc1: "Sonnige und blumige Zeiten!",
        Title2: "Vollguter Gemeinschaftsgarten",
        Desc2: "Bevor alles angefangen hat...",
        Title3: "Vollguter Gemeinschaftsgarten",
        Desc3: "Wöchentliche Treffen, bei denen wir Essen und Liebe teilen <3",
        GardenerMonth: "Gärtner*in des Monats",
        GardenerDesc: "In diesem Monat hat Mutter Natur Olivia zur Gärtnerin des Monats gewählt. Oli ist eine der Säulen des Gartens und ihr Wissen zusammen mit ihrem glänzenden Geist machen sie zu einer unglaublichen Bereicherung für den Garten!",
        CommDesc: "Im Garten sind eine Vielzahl unterschiedlicher Menschen aktiv. Jeder und jede kann die eigenen Ideen, Interessen und Fertigkeiten einbringen. Neben den Aktiven, besuchen viele Nachbar*innen den Garten regelmäßig. Der Garten ist offen für alle, die respektvoll mit dem Ort und den Mitmenschen umgehen. Wir sind Gärtner*innen, Gartenaktivist*innen, Partybienen mit unterschiedlichen Hintergründen, Kulturen, Geschlechtern und Begabungen.",
        CommP1: "Ritsuko, eine lernende Gärtnerin / eine lernende Krankenschwester. Hier für Spaß, Freude und Inspiration mit dem Gartengemeinschaft.",
        CommP2: "Edith, Blumenliebhaberin und Software-Entwicklerin; hier, um Pflanzen und Spiritualität zu züchten.",
        CommP3: "Olivia ist eine Architektin und Permakultur-Enthusiastin, hat eine starke Faszination für natürliche Lebenszyklen und glaubt an die Ermächtigung der Gemeinschaft durch soziales Handeln.",
        CommP4: "Fabian ist ein hyperaktiver Macher mit besonderem Interesse an Menschen, Kunst und Technik, liebt das spontane miteinander und steht ein für eine menschen- , tier- und pflanzenfreundliche, kollektive Entwicklung des Kindl-Areals.",
        CommP5: "Ina engagiert sich leidenschaftlich für Nachhaltigkeit und ist hier, um Menschen zu treffen, die ebenfalls inspiriert sind, einen positiven Einfluss darauf zu nehmen, wie wir zusammen leben und wachsen. Sie ist Gründerin eines Social Business, das ein Kreislaufwirtschaftssystem für Textilindustrie aufbaut.",
        CommP6: "Inga mag gärtnern und Neues über alle Arten von Pflanzen zu lernen. Sie glaubt an Gemeinschaft und die Kraft von zivilgesellschaftlichem Engagement und findet es wichtig Freiräume wie diesen Garten in Städten zu erhalten. Hauptamtlich arbeitet sie daran durch Digitalisierung Lebensmittelverschwendung zu reduzieren.",
        CommP7: "Felix. Food-Enthusiast. Gärtner. Unternehmer. Macher. Freund.",
        CommP8: "Von der windigen Stadt herbeigeweht, meet Sam. Ihre Lieblingsbeschäftigung im Garten ist es, Gemüse aus der Erde zu ernten und mit ihrem Reifen zu tanzen.",
        CommP9: "Sampson, ehemaliger Farmer von der Côte d'Ivoire, bringt das Wissen über den Anbau von Tomaten und Blumen aus seiner Heimat in den Garten ein.",
        CommP10: "Jennie ist eine fröhliche Amateurin, lernbegierig und liebt die Kraft, die daraus erwächst, Menschen in Gemeinschaften zusammenzubringen. Sie glaubt, dass wir uns alle besser fühlen würden, wenn wir mehr Zeit mit Mutter Natur verbringen würden.",

        WWDDesc: "Unsere Aktivitäten im Garten sind sehr vielfältig. Wir bewirtschaften die komplette Fläche selbst: wir sorgen dafür dass Beete gebaut und in Stand gehalten werden, wir bepflanzen sie mit Blumen, Kräutern, Obst und Gemüse, wir stellen sicher, dass wir regelmäßig gießen und dass der Garten sauber bleibt. Über unsere Aktionen bieten wir Workshops an z.B.: Repair- Workshops, Kleidertausch, Samen- Tausch etc. Wir veranstalten auch Events z.B.Gartenfeste, Garten-Kino, Flohmarkt u.v.m.Der Garten ist zudem Treffpunkt für viele Nachbar * innen und soll zum Verweilen einladen ohne Konsumzwang. ",
        Pic1: "Pastatafel",
        Pic2: "Wachsende Wildnis",
        Pic3: "Mal-Aktion mit MAKE",
        Pic4: "Winterstimmungen",
        Pic5: "Kleidertausch-Markt",
        Pic6: "Pinker Sonnenuntergang",
        Pic7: "Upcycling workshop",
        Pic8: "Feuerritual",
        Pic9: "Holz-Upcycling für Sonnen-Bänke",
        Pic10: "Pastatafel piedina workshop",
        Pic11: "Flower power",
        Pic12: "Malaktion mit Morgana",
        Pic13: "Metall-Wurm in den Pflanzen",
        Pic14: "Bau-Aktion",
        Pic15: "Den Sonnenuntergang genießen",
        Pic16: "Kinder-Lokomotive",
        Pic17: "Die drei kleinen Schweine",
        Pic18: "Vonas Glocken",
        Pic19: "Gartenkonzert",
        Pic20: "Garten-Eulen",
        Pic21: "Garten-Kino mit Vaginal Davis und dem Arsenal-Institut- Institut für Film und Videokunst e.V.",
        Pic22: "Bestäubende Biene ©Anna-Maria Ihle",
        Pic23: "Garten vibe ©Anna-Maria Ihle",
        Pic24: "An:ton DJ Set ©Anna-Maria Ihle",
        Pic25: "Neue Freunde finden im Garten ©Anna-Maria Ihle",
        Pic26: "Kochen ist Liebe ©Anna-Maria Ihle",
        Pic27: "Bluming times",
        Pic28: "Willkommen, und bitte nimm deinen Müll mit <3",
        Pic29: "GartenFest ©Anna-Maria Ihle",
        Pic30: "Flamenco Tänzer:innen ©Anna-Maria Ihle",
        Pic31: "Bailando Rodriguez DJ Set ©Anna-Maria Ihle",
        Pic32: "Markusen beim Herbstfest",
        Pic33: "Bestäubende Biene",
        Pic34: "Garten-Experimente",
        Pic35: "Nachbar:innen",
        Pic36: "Kartoffel-Turm-System",
        Pic37: "Garten-Beeren",
        Pic38: "Garten-Limonade",
        Pic39: "Frühlingssalat",
        Pic40: "Sommer-Samen-Kollektion",
        Pic41: "Gemüse, Brot und Liebe ©Anna-Maria Ihle",
        Pic42: "Garten-Party",
        PartnerDesc: "Vollguter Gemeinschaftsgarten hat einige Partner mit denen wir zusammen arbeiten und die uns unterstützen: ",
        ZH: "Zuhause - Zuhause e.V. ist ein vielfältiges Künstler*innen Kollektiv. Der Vollguter Gemeinschaftsgarten wurde 2017 durch den Zuhause e.V. initiiert. ",
        IZ: "Infozentrale - Die Infozentrale auf dem Vollgut wurde als DesignBuild Projekt des Natural Building Labs von 36 Architekturstudent*innen geplant und befindet sich mitten im Vollguter Gemeinschaftsgarten. ",
        Stif: "Stiftung Edith Maryon gGmbH - Die Stiftung Edith Maryon entzieht Grundstücke der Spekulation, damit sie dauerhaft sozialverträglich genutzt werden können. Der VGG ist ein Beispiel für eine solche Fläche.",
        FriendsDesc: "Wir schließen uns mit anderen großen Initiativen zusammen, die gleichgesinnte Visionen haben. Gemeinsam wollen wir Gemeinden, grüne Städte und florierende Gesellschaften so verwirklichen, wie wir sie uns wünschen! ",
        EventDesc: "Wir treffen uns oft samstagnachmittags im VGG, um den Garten zu pflegen, Dinge zu reparieren und zu bauen, und einfach zusammen zu sein. Nimm vorher Kontakt mit uns auf und komm vorbei. Für andere Veranstaltungen besuch unsere Facebook-Seite. Komm und mach mit!",
        ContactDesc: "Fragen? Ideen? Beiträge? Kontaktier uns jederzeit!",
        FN: "Vorname",
        LN: "Nachname ",
        Email: "Email",
        tandCagree: "Ich bin mit den Nutzungsbedingungen einverstanden.",
        PtandCagree: "Bitte stimme den Nutzungsbedingungen zu.",
        Submit: "Abschicken",
        YourMessage: "Deine Nachricht",
        GeneralInfo: "Allgemeine Informationen:",
        Covid: "Covid-19",
        GeneralInfoDesc: "Damit wir alle gesund bleiben, haltet in der Öffentlichkeit bitte einen Mindestabstand von 1,5 Metern zu Personen ein, die nicht in einem Haushalt mit euch wohnen. Wenn ihr in Parks oder anderen Grünflächen sitzt, müsst ihr einen Abstand von 5 Metern (das sind ungefähr 16,5 Fuß) zu anderen Personen einhalten.",
        ThankYou: "Vielen Dank!",
        Thank: "Vielen Dank",
        ThankMessage: "für deine Nachricht. Wir werden uns so bald wie möglich bei dir melden. !",
        Close: "Schließen",
        tandC: "TandC",
        TermsAndConditions: "Nutzungsbedingungen",
        tandcDesc1: "Wie die meisten ähnlichen Websites verwendet auch diese Website Cookies. Auf dieser Seite erklären wir mehr über Cookies und wie wir sie verwenden. Wenn du diese Website nutzt und dieser Richtlinie zustimmst, erklärst du dich damit einverstanden, dass wir Cookies in Übereinstimmung mit den Bedingungen dieser Richtlinie verwenden.",
        AboutCookies: "Über Cookies",
        tandcDesc2: "Cookies sind Dateien, die oft eindeutige Identifizierungsmerkmale enthalten, die von Webservern an Webbrowser gesendet werden und die dann jedes Mal, wenn der Browser eine Seite vom Server anfordert, an den Server zurückgeschickt werden können. Cookies können von Webservern verwendet werden, um Benutzer:innen zu identifizieren und zu verfolgen, während sie auf verschiedenen Seiten einer Website navigieren, und um Benutzer:innen zu identifizieren, die zu einer Website zurückkehren. Bei Cookies kann es sich entweder um dauerhafte Cookies oder um Sitzungs-Cookies handeln. Ein dauerhafter Cookie besteht aus einer Textdatei, die von einem Webserver an einen Webbrowser gesendet wird, die vom Browser gespeichert wird und bis zum festgelegten Ablaufdatum gültig bleibt (es sei denn, der Benutzer löscht sie vor dem Ablaufdatum). Ein Sitzungs-Cookie hingegen verfällt am Ende der Benutzersitzung, wenn der Webbrowser geschlossen wird.",
        CookiesWebsite: "Cookies auf dieser Website.",
        tandcDesc3: "Wir nutzen sowohl Sitzungs-Cookies als auch dauerhafte Cookies auf dieser Website."

    },
    "tr": {
        About: "Hakkimizda",
        Community: "Topluluk",
        WhatWeDo: "Neler yapmaktayiz",
        Partners: "Partnerlerimiz",
        Events: "Aktiviteler",
        Contact: "İletişim",
        Welcome: "VGG Garden'a hoş geldiniz! ",
        GardenDef: "Vollguter Gemeinschaftsgarten (VGG), Kindl Kiez in kalbinde yer alan Neukölln tabanlı bir topluluk projesidir. VGG bir bahçedir. VGG, bitkilerin ve otların dünyalarını keşfedebileceğiniz ve geri dönüştürülmüş malzemelerden kurulumlar yapabileceğiniz bir deneyimsel platformudur. Birbirimizden öğrenmek, arılar hakkında bilgi edinmek, bisikletinizi nasıl tamir edeceğinizi, nasıl kaynak yapacağınızı, büyük bir topluluk için dumpling nasıl hazırlayacağınızı veya komposto yapimiile ilgili her şeyi keşfedebileceğiniz bir yer. VGG, sanatçılar için bir platformdur. Bazıları için VGG bir yuva. VGG buluşmak ve takılmak için bir yerdir. VGG, fikir yaratmayı, birlikte bir şeyler pişirmeyi ve inşa etmeyi ve ellerini kirletmeyi seven açık bir insan topluluğudur. Herkese açığız, tüm yatak ve bitkilerle birlikte ilgileniyoruz. Sadece orada olmak ve katılmak sizi VGG'nin bir parçası yapar. Biyolijik cevre ve sosyal çeşitliliğe inanıyoruz. Hertürlü ırkçılığa, cinsiyetçiliğe ve ayrımcılığa müsamaha göstermiyoruz. Cesitliligimizle övünüyoruz ve her canlinin yasam hakkina saygi duyarak gerek duydugu ortak yasam alanini vermeye calisiyoruz.z. Üç permakültür etiğine inanıyoruz: Topraga değer ver, insana değer ver, adil paylaşım. GEL VE ​​BİZE KATIL!",
        OpeningHours: "Çalışma Saatleri: Bahçe sizin için her zaman açıktır! Bahçıvan arkadaşlarınız genellikle Cumartesi öğleden sonraları buluşurlar.Bize ulaşın veya ziyaret edin!",
        GetInTouch: "(Get in touch)",
        WeSigned: "Biz imzaladık",
        Urban: "Kentsel Bahçecilik Manifestosu",
        Title1: "VGG Garden",
        Desc1: "Güneşli ve çiçekli zamanlar!",
        Title2: "VGG Garden",
        Desc2: "Her şey başlamadan önce",
        Title3: "VGG Garden",
        Desc3: "Yemek ve aşkı paylaştığımız haftalık toplantı <3",
        GardenerMonth: "Ayın bahçıvanı...Olivia",
        GardenerDesc: "Doğa ana bu ay Olivia'yı ayın bahçıvanı olarak seçti. Oli, bahçenin kurucularindan biridir ve parlak ruhu ile birlikte bilgisi onu bahçe için inanılmaz bir değer haline getiriyor!",
        CommDesc: "VGG bahçesi herkesin hoş karşılandığı çok çeşitli insanlardan oluşuyor. Bizler farklı geçmişe, kültüre, renklere, cinsiyete ve yeteneklere sahip bahçıvanlar, inşaatçılar, parti arılarıyız",
        CommP1: "Ritsuko, öğrenen bir bahçıvan, öğrenen bir hemşire. İnsanları, bitkileri ve çevreyi dinlemeyi ve birbirlerinden öğrenmeyi seviyor. Toplum, permakültür, eğitim, yaşam becerileri ile ilgileniyor.",
        CommP2: "Bitkileri ve maneviyat yetiştirmek için Çiçek aşığı ve yazılım geliştiricisi Edith burada",
        CommP3: "Olivia bir permakültür meraklısı ve bir mimar, doğal yaşam döngüleri için bir hayranlık duyuyor ve toplumsal eylem yoluyla topluluğun güçlendirilmesine inanıyor.",
        CommP4: "Fabian, insanlara, sanata ve teknolojiye özel ilgi duyan hiperaktif bir yapımcı. Spontane etkileşimleri seviyor ve Kindl bölgesinin insan, hayvan ve bitki dostu kolektif gelişiminiden yana.",
        CommP5: "Ina, sürdürülebilirlik konusunda tutkulu ve tekstiller için döngüsel ekonomi sistemi oluşturan bir sosyal işletmenin kurucusu. Aynı zamanda bir değişiklik yapmak isteyen ve birlikte nasıl yaşadığımız ve büyüdüğümüz üzerinde olumlu bir etki yaratmak için ilham alan insanlarla tanışmak için burada.",
        CommP6: "Inga bahçivanligi ve her tür bitki ve permakültür hakkında daha fazla bilgi edinmeyi sever.yor. Topluma ve sivil toplum katılımının gücüne inanıyor. Çalışmaları, gıda israfını azaltmak için dijitalleştirme alanında.",
        CommP7: "Felix. Yemek meraklısı. Bahçıvan. Girişimci. Yaratıcı. Arkadaş.",
        CommP8: "Rüzgarlı Şehir'den gelen Sam ile tanış. Bahçede en sevdiği aktivite sebzeleri topraktan çıkarmak ve çemberiyle dans etmek.",
        CommP9: "Fildişi Sahili'nde eski bir çiftçi olan Sampson, anavatanından bahçeye domates ve çiçek yetiştiriciliği hakkında bilgi veriyor.",
        CommP10: "Jennie mutlu bir amatör, yeni şeyler öğrenmeye hevesli ve insanları topluluklarda bir araya getirmenin sağladığı güçlenmeyi seviyor. Tabiat Ana ile daha fazla zaman geçirirsek hepimizin daha iyi hissedeceğine inanıyor.",
        WWDDesc: "Bahçedeki faaliyetlerimiz büyük ölçüde değişmektedir. Bitkilerin yetistirildigi yatakların kurulmasini ve bakımının yapılmasını sağlayarak tüm alanı kendimiz yetiştiriyoruz, çiçekler, otlar, meyve ve sebzeler ekiyoruz, bitkileri düzenli olarak suladığımızdan ve bahçenin temiz kaldığından emin oluyoruz. Faaliyetlerimiz aracılığıyla Workshop'lar sunuyoruz, örneğin sabun atölyesi, bisiklet tamir atölyesi, kıyafet alışverişi, tohum değişimi vb. Ayrıca etkinlikler de düzenliyoruz. bahçe partileri, bahçe sineması, bit pazarları ve çok daha fazlası. Bahçe aynı zamanda birçok komşu için bir buluşma noktasıdır * ve sizi tüketim baskısı olmadan kalmaya davet eder.",
        Pic1: "Pastatafel",
        Pic2: "Büyüyen vahşi doğa",
        Pic3: "Painting action with MAKE",
        Pic4: "Kış ruh halleri",
        Pic5: "Kıyafet değişimi pazarı",
        Pic6: "Pembe gün batımı",
        Pic7: "İleri dönüşüm atölyesi",
        Pic8: "Ateş ayini",
        Pic9: "Şezlonglar için ahşap geri dönüşümü",
        Pic10: "Pastatafel piedina workshop",
        Pic11: "Flower power",
        Pic12: "Morgana ile boyama eylemi",
        Pic13: "Bitkilerde metal solucan",
        Pic14: "İnşaat eylemi",
        Pic15: "Gün batımının tadını çıkar",
        Pic16: "Çocuk lokomotifi",
        Pic17: "Üç küçük Domuz",
        Pic18: "Vona's Bells",
        Pic19: "Bahçede konser",
        Pic20: "Baykuşlar göründükleri gibi değildir",
        Pic21: "Vaginal Davis ve Arsenal ile sinema gecesi - Film ve Video Sanatı Enstitüsü",
        Pic22: "Bestäubende Biene ©Anna-Maria Ihle",
        Pic23: "Garden vibe ©Anna-Maria Ihle",
        Pic24: "An:ton dj set ©Anna-Maria Ihle",
        Pic25: "Bahçede yeni arkadaşlar bulun © Anna-Maria Ihle",
        Pic26: "Kochen ist Liebe | © Anna-Maria Ihle",
        Pic27: "Bluming times",
        Pic28: "Hoş geldiniz ve çöpünüzü alın <3",
        Pic29: "Garden fest ©Anna-Maria Ihle",
        Pic30: "Flamenco Dancers ©Anna-Maria Ihle",
        Pic31: "Bailando Rodriguez dj set ©Anna-Maria Ihle",
        Pic32: "Markusen Herbstfest'te",
        Pic33: "Tozlaşan arı",
        Pic34: "Bahçe deneyleri",
        Pic35: "Komşular",
        Pic36: "Patates kule sistemi",
        Pic37: "Bahçe meyveleri",
        Pic38: "Bahçe limonatası",
        Pic39: "Bahar salatası",
        Pic40: "Yaz tohumları koleksiyonu",
        Pic41: "Sebze, ekmek ve sevgi © Anna-Maria Ihle",
        Pic42: "Bahçe partisi",
        PartnerDesc: "VGG'nin birlikte çalıştığı ve bizi destekleyen harika ortaklari var: ",
        ZH: "Zuhause - Zuhause e.V. çok çeşitli bir sanatçı kolektifidir. Vollguter Gemeinschaftsgarten 2017 yılında Zuhause e.V. tarafından başlatılmıştır.",
        IZ: "Bilgi Merkezi - Vollgut'taki bilgi merkezi, 36 mimarlık öğrencisi * tarafından Doğal Bina Laboratuarı'nın DesignBuild projesi olarak planlanmış ve Vollgut topluluk bahçesinin ortasında yer almaktadır.",
        Stif: "Arazi ve mülk kıt mallardır ve bu nedenle pahalıdır. Özellikle şehir merkezlerinde uygun fiyatlı konut, sosyal veya kültürel projeler için genellikle çok pahalıdır. Çiftçiler de artan arazi fiyatları ve kiralamalarla karşı karşıyadır. Edith Maryon Vakfı, biz veya başkalarının toplumu sosyal olarak sorumlu bir şekilde kullanabilmesi için araziyi spekülasyondan çıkarmaya çalışıyoruz.",
        FriendsDesc: "Benzer görüşlere sahip diğer büyük girişimlerle güçlerimizi birleştiriyoruz. Birlikte toplulukları, yeşil şehirleri ve gelişen toplumları nasıl hayal ettiğimizi farketmeyi amaçlıyoruz!",
        EventDesc: "Bahçeyle ilgilenmek, bir şeyler tamir edip inşa etmek ve birlikte takılmak için genellikle Cumartesi öğleden sonraları VGG'de buluşuruz. Önceden bizimle iletişime geçin ve gelin ve bize katılın. Diğer etkinlikler için facebook sayfamızi takip edin. Gelin ve bize katılin!!",
        ContactDesc: "Sorular? Fikirler? Katkılar? İstediğiniz zaman ulaşın!",
        FN: "Ad",
        LN: "Soyad",
        Email: "Email",
        tandCagree: "Kullanıcı koşullarını kabul ediyorum",
        PtandCagree: "Please agree wiLütfen kullanıcı şartlarını kabul edin.th the terms and conditions",
        Submit: "Gönder",
        YourMessage: "Mesajın",
        GeneralInfo: "Genel bilgi:",
        Covid: "Covid-19",
        GeneralInfoDesc: "Hepimizi sağlıklı tutmak için, lütfen toplum içinde sizinle birlikte yaşamayan insanlardan en az 1,5 metre uzakta durun. Parklarda veya diğer yeşil alanlarda otururken, diğerlerinden 5 metrelik (yaklaşık 16,5 fit) bir mesafeyi korumalısınız.",
        ThankYou: "Teşekkür!",
        Thank: "Teşekkür ederim!",
        ThankMessage: "Bize ulaştığınız için. En kısa sürede size geri döneceğiz!",
        Close: "Kapat",
        tandC: "TandC",
        TermsAndConditions: " Kullanıcı koşulları",
        tandcDesc1: "Çoğu benzer web sitesinde olduğu gibi, bu site çerezler kullanır. Bu sayfada çerezler ve bunları nasıl kullandığımız hakkında daha fazla bilgi açıklıyoruz.",
        AboutCookies: "About cookies",
        tandcDesc2: "Çerezler, web sunucuları tarafından web tarayıcılarına gönderilen ve daha sonra tarayıcı sunucudan bir sayfa istediğinde sunucuya geri gönderilebilen, genellikle benzersiz tanımlayıcılar içeren dosyalardır. Çerezler, web sunucuları tarafından tanımlama ve tanımlama için kullanılabilir. kullanıcıları bir web sitesindeki farklı sayfalarda gezinirken izlemek ve bir web sitesine geri dönen kullanıcıları tanımlamak için Çerezler, kalıcı çerezler veya oturum çerezleri olabilir. Kalıcı çerez, bir web sunucusu tarafından bir web tarayıcısına gönderilen bir metin dosyasından oluşur. tarayıcı tarafından saklanacak ve belirlenen sona erme tarihine kadar geçerli kalacaktır (son kullanma tarihinden önce kullanıcı tarafından silinmediği sürece). Öte yandan, bir oturum çerezi, web tarayıcısı olduğunda kullanıcı oturumunun sonunda sona erecektir.",
        CookiesWebsite: "Bu web sitesindeki çerezler.",
        tandcDesc3: "Bu web sitesinde hem oturum çerezlerini hem de kalıcı çerezleri kullanıyoruz."

    },
    // "ar": {
    //     About: "على وشك أن",
    //     Community: "الجماعة",
    //     WhatWeDo: "الذي نفعله",
    //     Partners: "شركاء",
    //     Events: " الأحداث",
    //     Contact: "اتصل",
    //     Welcome: "مرحبًا بكم في حديقة VGG!",
    //     OpeningHours: "Opening Hours: the Garden is always open!",
    //     WeSigned: "We signed the ",
    //     Urban: "Urban Gardening Manifest"

    // },
    "jp": {
        About: "VGGとは",
        Community: "コミュニティー",
        WhatWeDo: "プロジェクト",
        Partners: "パートナーズ",
        Events: "イベント",
        Contact: "コンタクト",
        Welcome: "ようこそ",
        GardenDef: "Vollguter Gemeinschaftsgarten はNeuköllnのKidl地域を拠点としたコミュニティーガーデンプロジェクトです。VGG は植物やハーブの世界を探索したり、リサイクル素材からインスタレーションを創造したりするクリエイティブな実験のプラットフォームです。蜂について学んだり、自転車修理、溶接、木工、時には大人数に餃子を作ったり、それから堆肥や肥料について発見したりする場所です。VGGはアーティストとパフォーマーのためのプラットフォームであり、また一部の人にとってはホームでもあります。VGGは出会いの場であり交流の場です。VGGは一緒にアイデアを出し合ったり、料理をしたり、土仕事をしたいと願う人たちのオープンコミュニティーです。誰でもいつでも大歓迎です。ガーデンのすべての植物は共同で管理されています。ただこの場所にいて参加すればあなたはVGGの一部です。私たちは生物的および社会的多様性を信じています。人種差別、性差別、その他の差別を容認しません。私たちは多様性に誇りを持ち、すべての生き物のためのスペースを作りたいと思っています。私たちは3つのパーマカルチャーの倫理を信じています：アースケア、ピープルケア、フェアシェア。是非気軽に参加してください！",
        OpeningHours: "ガーデンは常に開放しており閉館時間はありません。私たちは土曜日の午後に頻繁にVGGにいます。何か質問ごとがあれば連絡をください！",
        GetInTouch: "(Get in touch)",
        WeSigned: "私たちはアーベンガーデニングマニフェストにサインしました。",
        Urban: "Urban Gardening Manifest!",
        Title1: "VGG Garden",
        Desc1: "晴天と花々！",
        Title2: "VGG Garden",
        Desc2: "みどりの前触れ",
        Title3: "VGG Garden",
        Desc3: "ごはんやすてきな時間をシェアするウィークリーミーティング",
        GardenerMonth: "私たちが選ぶ今月のベストオブガーデンは…... Olivia",
        GardenerDesc: "オリビア！オリビアはガーデン主要メンバーの１人であり、彼女の知識とすてきなスピリットはガーデンに素晴らしい刺激や活気を与えてくれます！",
        CommDesc: "VGGガーデンは誰でもウェルカム、さまざまな人々で構成されています。私たちは庭仕事、クリエイター、建築、さまざまな背景、文化、色、性別、タレントを持つparty beesです。",
        CommP1: "リツコはガーデニングと看護を学んでいるところ。ここにはコミュニティーとのFUNとJOYとインスピレーションを求めて！",
        CommP2: "エディスはソフトウェアデベロッパー兼、植物ラヴァー、ここには植物たちとスピリチュアリティーの成長を求めて。",
        CommP3: "オリビアは建築家兼パーマカルチャー愛好家、自然のライフサイクルに魅力を感じ、社会的行動を通じてのコミュニティーエンパワーメントを信じている。",
        CommP4: "ファビアンは、人、アート、テクノロジーに特別な関心を持つハイパーアクティブクリエイター。偶然な出会いや交流を愛し、Kindlエリアの人間、動物、植物にフレンドリーなコレクティヴの発展に力を注ぐ。",
        CommP5: "イナは「持続可能性」に関して情熱的、テキスタイルの循環型経済システム構築のソーシャルビジネスの創設者。ここには、変化を起こしたい人々との出会いや、私たちがどのように共に暮らし、共に成長できるかという問いにポジティヴな影響を与えるインスピレーションを求めて。",
        CommP6: "インガは園芸を好み、あらゆる種類の植物とパーマカルチャーについて学んでいるところ。コミュニティと市民社会の関与の力を信じている。また食品廃棄物を削減するためのデジタル化に力を注ぐ。",
        CommP7: "食べること愛好家。ガーデナー。起業家。クリエイター。ともだち。",
        CommP8: "サムは風の強いまちから吹かれてベルリンへ。野菜を土から収穫する瞬間と、フラフープダンスが好きなこと。",
        CommP9: "サムプソンはコートジボワール出身の元農家、トマトや花の栽培に関する知識を故郷からガーデンに。",
        CommP10: "ジェニーははっぴーなアマチュアであり、新しいことを学びたいと熱望している。コミュニティで人々を結びつけることから生まれるエンパワーメントを愛し、母なる自然ともっと時間を過ごすことができれば、私たちは皆、もっと心地よく暮らしていけると信じている。",
        WWDDesc: "プランターの構築と維持、花、ハーブ、果物、野菜の栽培、定期的な植物への水やり、清掃などガーデンでの活動はとても様々です。これまでにDIY石鹸ワークショップ、自転車修理ワークショップ、衣類交換、種交換などのワークショップを行いました。また、ガーデンパーティー、ガーデンシネマ、フリーマーケットなど他にも様々なイベントも企画しました。ガーデンは多くのご近所さんの出会いや憩い場であり、消費のプレッシャーとは別の空間です。",
        Pic1: "Pastatafel",
        Pic2: "Growing wilderness",
        Pic3: "Painting action with MAKE",
        Pic4: "Winter moods",
        Pic5: "Clothes swap market ",
        Pic6: "Pink sunset",
        Pic7: "Upcycling workshop",
        Pic8: "Witches gathering",
        Pic9: "Wood upcycling for laying in the sun",
        Pic10: "Pastatafel piedina workshop",
        Pic11: "Flower power",
        Pic12: "Painting action with Morgana",
        Pic13: "Metallic worm in the plants",
        Pic14: "Building action",
        Pic15: "Enjoying the sunset",
        Pic16: "The locomotive is about to leave",
        Pic17: "The three little pigs",
        Pic18: "Vona's Bells",
        Pic19: "Concert in the garden",
        Pic20: "The owls are not what they seam",
        Pic21: "Cinema night with Vaginal Davis and Arsenal - Institut für Film und Videokunst e.V.",
        Pic22: "Pollinating bee ©Anna-Maria Ihle",
        Pic23: "Garden vibe ©Anna-Maria Ihle",
        Pic24: "An:ton dj set ©Anna-Maria Ihle",
        Pic25: "Making friends in the garden ©Anna-Maria Ihle",
        Pic26: "Cooking is loving ©Anna-Maria Ihle",
        Pic27: "Bluming times",
        Pic28: "Welcome and take your trash <3",
        Pic29: "Garden fest ©Anna-Maria Ihle",
        Pic30: "Flamenco Dancers ©Anna-Maria Ihle",
        Pic31: "Bailando Rodriguez dj set ©Anna-Maria Ihle",
        Pic32: "Markusen at Herbstfest",
        Pic33: "Pollinating bee",
        Pic34: "Garden experiments",
        Pic35: "Neighbours",
        Pic36: "Patato tower system",
        Pic37: "Garden berries",
        Pic38: "Garden lemonade",
        Pic39: "Spring salad",
        Pic40: "Sommer seeds collection",
        Pic41: "Vegetables, bread and love ©Anna-Maria Ihle",
        Pic42: "Garden party",
        PartnerDesc: "相互扶助の素晴らしいVGGパートーズ",
        ZH: "Zuhause-Zuhause e.V. - アーティスの多様なコレクティヴ。 Vollguter Gemeinschaftsgartenは、2017年にZuhause e.V.　から発足。",
        IZ: "インフォメーションセンター - Natural Building LabのDesignBuildプロジェクトとして36人の建築学生*によって計画建設され、Vollgutコミュニティガーデンの中央に位置。",
        Stif: "Stiftung Edith Maryon gGmbH - 土地を投機から防止するように働きかけ、土地を自分たちまたは他者が社会的に責任ある方法で使用できるように力を注ぐ。 VGGはそのようなプロパティーに位置しています",
        FriendsDesc: "私たちは、志を同じくするビジョンを持つ他の主要なイニシアチブと提携しています。私たちは一緒になって、コミュニティ、緑豊かなまち、活気ある社会を実現したいと考えています。",
        EventDesc: "私たちは普段土曜日の午後に、庭仕事、修理や構築、また憩いや集いの場としてガーデンにいます。前もって気軽に連絡をください、直接来て遊びにきてもらうのも大歓迎です。その他のイベントはfacebookをチェックしてください。この場合であなたに出会えるのを楽しみにしています",
        ContactDesc: "質問？提案？コントリビューション？コラボレーション？いつでもどうそ！",
        FN: " 名前",
        LN: "苗字",
        Email: "メールアドレス",
        tandCagree: "利用規約に同意します。",
        PtandCagree: "利用規約に同意してください。",
        Submit: "送信",
        YourMessage: "メッセージ",
        GeneralInfo: "一般情報",
        Covid: "コロナウィルス",
        GeneralInfoDesc: "「私たち全員の健康を維持するために、外出時にあなたと一緒にいない人からミニマム1.5メートル距離をとってください。公園やその他の緑地に座っているときは、他人から5メートル（約16.5フィート）の距離を保つ必要があります。 ",
        ThankYou: "どうもありがとう！",
        Thank: "どうもありがとう",
        ThankMessage: "お問い合わせいただきありがとうございます。できるだけ早くご連絡いたします！",
        Close: "閉じる",
        tandC: "TandC",
        TermsAndConditions: "規約と条件",
        tandcDesc1: "ほとんどの類似したWebサイトと同様に、このサイトではCookieを使用しています。このページでは、Cookieとその使用方法について詳しく説明しています。このWebサイトを使用してこのポリシーに同意すると、このポリシーの条件に従ってCookieを使用することに同意したことになります。",
        AboutCookies: "クッキーについて",
        tandcDesc2: "Cookieは、多くの場合一意の識別子を含むファイルであり、WebサーバーからWebブラウザーに送信され、ブラウザーがサーバーからページを要求するたびにサーバーに送り返される場合があります。Cookieは、Webサーバーがユーザーがウェブサイトの別のページに移動するときにユーザーを追跡し、ウェブサイトに戻ってきたユーザーを特定します。Cookieは永続的なCookieまたはセッションCookieのいずれかです。永続的なCookieは、WebサーバーからWebブラウザーに送信されるテキストファイルで構成されます。ブラウザによって保存され、設定された有効期限まで有効です（有効期限より前にユーザーが削除した場合を除く）。一方、セッションCookieは、ユーザーセッションの最後に、Webブラウザが閉じています。",
        CookiesWebsite: "このサイトのクッキー",
        tandcDesc3: "このWebサイトでは、セッションCookieと永続Cookieの両方を使用しています。"
    }

};

const i18n = new VueI18n({ locale: "en", fallbackLocale: "de", messages });

export default i18n;