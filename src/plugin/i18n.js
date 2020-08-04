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
        Desc3: "Beautiful garden with beautiful people",
        GardenerMonth: "Our awsome gardener of this month is... Olivia",
        GardenerDesc: "This month, mother nature has chosen Olivia as the gardener of the month. Oli is one of the foundation of the garden and her knowledge together with her shinny spirit make her an incredible asset for the garden!",
        CommDesc: "VGG garden is composed of a wide variety of people where everyone is welcome. We are gardeners, builders, party bees with different background, culture, colors, gender and talents",
        CommP1: "Ritsuko, a learning gardener, a learning nurse. Likes to listen to people, plants and environment and learn from each other. Interested in community, permaculture, education, life skills.",
        CommP2: "Edith, Flowers lover and software developer, here to grow plants and spirituality.",
        CommP3: "Olivia is a permaculture enthusiast and an architect, has a strong fascination for natural life cycles and believes in community empowerment through social action.",
        CommP4: "Fabian is a hyperactive maker with a special interest in people, art and technology. Loves spontaneous interactions and stands for a human-, animal- and plant-friendly collective development of the Kindl area.",
        CommP5: "Ritsuko, a learning gardener, a learning nurse. Likes to listen to people, plants and environment and learn from each other. Interested in community, permaculture, education, life skills.",
        CommP6: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP7: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
        OpeningHours: "Öffnungszeiten: Der Garten ist immer für Dich geöffnet! Deine Mitgärtnerinnen und Mitgärtner treffen sich oft am Samstagnachmittag.Kontaktier uns(Link: (https://vgg-nkln.herokuapp.com/#contact) und kommvorbei",
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
        CommP1: "Ritsuko, eine lernende Gärtnerin, eine lernende Krankenschwester, hört gerne den Menschen, Pflanzen und Umwelt zu und lernt voneinander. Interessiert an Gemeinschaft, Permakultur, Bildung, Lebenskompetenzen.",
        CommP2: "Edith, Blumenliebhaberin und Software-Entwicklerin; hier, um Pflanzen und Spiritualität zu züchten.",
        CommP3: "Olivia ist eine Architektin und Permakultur-Enthusiastin, hat eine starke Faszination für natürliche Lebenszyklen und glaubt an die Ermächtigung der Gemeinschaft durch soziales Handeln.",
        CommP4: "Fabian ist ein hyperaktiver Macher mit besonderem Interesse an Menschen, Kunst und Technik, liebt das spontane miteinander und steht ein für eine menschen- , tier- und pflanzenfreundliche, kollektive Entwicklung des Kindl-Areals.",
        CommP5: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP6: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP7: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
        About: "hakkında",
        Community: "cemiyet",
        WhatWeDo: "Ne yapıyoruz",
        Partners: "Ortaklar",
        Events: "Etkinlikler",
        Contact: "İletişim",
        Welcome: "VGG Garden'a hoş geldiniz!",
        OpeningHours: "Opening Hours: the Garden is always open!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest"

    },
    "ar": {
        About: "على وشك أن",
        Community: "الجماعة",
        WhatWeDo: "الذي نفعله",
        Partners: "شركاء",
        Events: " الأحداث",
        Contact: "اتصل",
        Welcome: "مرحبًا بكم في حديقة VGG!",
        OpeningHours: "Opening Hours: the Garden is always open!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest"

    },
    "jp": {
        About: "VGGとは",
        Community: "コミュニティー",
        WhatWeDo: "プロジェクト",
        Partners: "パートナーズ",
        Events: "イベント",
        Contact: "コンタクト",
        Welcome: "ようこそ",
        
        OpeningHours: "Opening Hours: the Garden is always open!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest"
    }

};

const i18n = new VueI18n({ locale: "en", fallbackLocale: "de", messages });

export default i18n;