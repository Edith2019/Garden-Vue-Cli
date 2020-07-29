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
        GardenDef: "Vollguter Gemeinschaftsgarten (VGG) is a Neukölln-based community project located in the heart of the Kindl Kiez. VGG is a garden. VGG is a platform for experimentation, where you can explore the worlds of plants and herbs and where you can build installations from recycled material. It is a place to learn from each other, to lern about bees, how to repair your bike, how to weld, how to prepare dumplings for a large community or discover all about composting. VGG is platform for artists and performers. For some, VGG is a home. VGG is a place to meet and hang out. VGG is an open community of people who like to create ideas, cook and build things together and get their hands dirty. Everyone is welcome, we take care of all beds and plants jointly. Simply being there and participating makes you part of VGG. We believe in bio- and social diversity. We do not tolerate racism, sexism and any other for of discrimination. We are proud of our diversity and make space to appreciate all living things. We believe in the three permaculture ethics: earth care, people care, fair share. COME AND JOIN US!",
        OpeningHours: "Opening Hours: the Garden is always open for you! Your fellow gardeners often meet on Saturday afternoons.Contact us(Link: (https://vgg-nkln.herokuapp.com/#contact) and come around!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest",
        Title1: "VGG Garden",
        Desc1: "Sunny and flowery times!",
        Title2: "VGG Garden",
        Desc2: "Before everything started...",
        Title3: "VGG Garden",
        Desc3: "Weekly meeting where we share food and love <3",
        GardenerMonth: "Our awsome gardener of this month is ... Olivia",
        GardenerDesc: "This month, mother nature has chosen Olivia as the gardener of the month. Oli is one of the fundation of the garden and her knowledge together with her shinny spirit make her an incredible asset for the garden!",
        CommDesc: "VGG garden is composed of a wide variety of people where everyone is welcome. We are gardeners, builders, party bees with different background, culture, colors, gender and talents",
        CommP1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP2: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP3: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP4: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP5: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP6: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP7: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        WWDDesc: "Our activities in the garden vary to a great extent. We cultivate the entire area ourselves making sure that beds are built and maintained, we plant flowers, herbs, fruit and vegetables, we make sure that we water the plants regularly and that the garden stays clean. Through our activities we offer workshops, for example soap workshop, bicycle repair workshop, clothing exchanges, seed exchange etc. We also organize events e.g. garden parties, garden-cinema, flea markets and much more. The garden is also a meeting point for many neighbours* and should invite you to stay without the pressure of consumption.",
        Pic1: "Pastatafel",
        Pic2: "Wild life growing",
        Pic3: "Painting action with make",
        Pic4: "Sun on ice",
        Pic5: "Clothes swap market ",
        Pic6: "Pink sunset",
        Pic7: "Upcycling workshop",
        Pic8: "Witches gathering",
        Pic9: "Wood upcycling for laying in the sun",
        Pic10: "Pastatafel piedina worshop",
        Pic11: "Flower power",
        Pic12: "Female power with Morgana",
        Pic13: "Metallic worm in the plants",
        Pic14: "Building action",
        Pic15: "Enjoying the sunset",
        Pic16: "The locomotive is about to leave",
        Pic17: "The three little pigs",
        Pic18: "Vona's Bells",
        Pic19: "Concert in the garden",
        Pic20: "The owls are not what they seam",
        Pic21: "Cinema night with Vaginal Davis and Arsenal - Institut für Film und Videokunst e.V.",
        Pic22: "Pollinating bee. @Anna-Maria Ihle",
        Pic23: "Garden vibe @Anna-Maria Ihle",
        Pic24: "An:ton dj set",
        Pic25: "Making friends in the garden",
        Pic26: "Cooking is loving",
        Pic27: "Bluming times",
        Pic28: "Welcome and take your trash <3",
        Pic29: "Garden fest",
        Pic30: "Flamenco Dancers",
        Pic31: "Bailando Rodriguez dj set",
        Pic32: "Markusen at Herbstfest",
        Pic33: "Pollinating bee",
        Pic34: "Garden experiments",
        Pic35: "Neighbours",
        Pic36: "Patato bag",
        Pic37: "Garden berries",
        Pic38: "Garden lemonade",
        Pic39: "Spring salat",
        Pic40: "Sommer seeds collection",
        Pic41: "Vegetable, bread and love",
        Pic42: "Garden party",
        PartnerDesc: "VGG has great partners with whom we work together and who support us: ",
        ZH: "Zuhause - Zuhause e.V. is a diverse collective of artists. The Vollguter Gemeinschaftsgarten was initiated in 2017 by Zuhause e.V. ",
        IZ: "Information centre - The information centre on the Vollgut was planned by 36 architecture students* as a DesignBuild project of the Natural Building Lab and is located in the middle of the Vollgut community garden.",
        Stif: "Land and property are scarce goods and therefore expensive. Usually too expensive for affordable housing and social or cultural projects, especially in city centres. Farmers are also confronted with rising land prices and leases. The Edith Maryon Foundation works to remove land from speculation so that we or others can use it in a socially responsible manner.",
        FriendsDesc: "We join forces with other great initiatives that have like-minded visions. Together we aim to realize communities, green cities and flurishing societies how we envision them!",
        FriendsTitle1: "Title",
        FriendsDec1: "Description",
        FriendsTitle2: "Title",
        FriendsDec2: "Description",
        FriendsTitle3: "Title",
        FriendsDec3: "Description",
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
        tandcDesc3: "    We use both session cookies and persistent cookies on this website."

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
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest",
        Title1: "VGG Garden",
        Desc1: "Sunny and flowery times!",
        Title2: "VGG Garden",
        Desc2: "Before everything started...",
        Title3: "VGG Garden",
        Desc3: "Weekly meeting where we share food and love <3",
        GardenerMonth: "Gärtner*in des Monats",
        GardenerDesc: "This month, mother nature has chosen Olivia as the gardener of the month. Oli is one of the fundation of the garden and her knowledge together with her shinny spirit make her an incredible asset for the garden!",
        CommDesc: "Im Garten sind eine Vielzahl unterschiedlicher Menschen aktiv. Jeder und jede kann die eigenen Ideen, Interessen und Fertigkeiten einbringen. Neben den Aktiven, besuchen viele Nachbar*innen den Garten regelmäßig. Der Garten ist offen für alle, die respektvoll mit dem Ort und den Mitmenschen umgehen. Wir sind Gärtner*innen, Handwerker*innen, Partybienen mit unterschiedlichen Hintergründen, Kulturen, Geschlechtern und Begabungen.",
        CommP1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP2: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP3: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP4: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP5: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP6: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        CommP7: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        WWDDesc: "Unsere Aktivitäten im Garten sind sehr vielfältig. Wir bewirtschaften die komplette Fläche selbst: wir sorgen dafür dass Beete gebaut und in Stand gehalten werden, wir bepflanzen sie mit Blumen, Kräutern, Obst und Gemüse, wir stellen sicher, dass wir regelmäßig gießen und dass der Garten sauber bleibt. Über unsere Aktionen bieten wir Workshops an z.B.: Repair- Workshops, Kleidertausch, Samen- Tausch etc. Wir veranstalten auch Events z.B.Gartenfeste, Garten-Kino, Flohmarkt u.v.m.Der Garten ist zudem Treffpunkt für viele Nachbar * innen und soll zum Verweilen einladen ohne Konsumzwang. ",


        PartnerDesc: "Vollguter Gemeinschaftsgarten hat einige Partner mit denen wir zusammen arbeiten und die uns unterstützen: ",
        ZH: "Zuhause - Zuhause e.V. ist ein vielfältiges Künstler*innen Kollektiv. Der Vollguter Gemeinschaftsgarten wurde 2017 durch den Zuhause e.V. initiiert. ",
        IZ: "Infozentrale - Die Infozentrale auf dem Vollgut wurde als DesignBuild Projekt des Natural Building Labs von 36 Architekturstudent*innen geplant und befindet sich mitten im Vollguter Gemeinschaftsgarten. ",
        Stif: "Stiftung Edith Maryon gGmbH - Die Stiftung Edith Maryon entzieht Grundstücke der Spekulation, damit sie dauerhaft sozialverträglich genutzt werden können. Der VGG ist ein Beispiel für eine solche Fläche.",
        FriendsDesc: "Wir schließen uns mit anderen großen Initiativen zusammen, die gleichgesinnte Visionen haben. Gemeinsam wollen wir Gemeinden, grüne Städte und florierende Gesellschaften so verwirklichen, wie wir sie uns wünschen! ",
        FriendsTitle1: "Title",
        FriendsDec1: "Description",
        FriendsTitle2: "Title",
        FriendsDec2: "Description",
        FriendsTitle3: "Title",
        FriendsDec3: "Description",
        EventDesc: "Wir treffen uns oft samstagnachmittags im VGG, um den Garten zu pflegen, Dinge zu reparieren und zu bauen, und hingen zusammen herum. Nehmen Sie vorher Kontakt mit uns auf und kommen Sie zu uns. Für andere Veranstaltungen besuchen Sie unsere Facebook-Seite. Kommen Sie und schließen Sie sich uns an! In unserem Netzwerk gib es eine Reihe weiterer Projekte und Organisationen mit denen wir im guten Austausch sind:",
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
        tandcDesc3: "    We use both session cookies and persistent cookies on this website."

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

    }

};

const i18n = new VueI18n({ locale: "en", fallbackLocale: "de", messages });

export default i18n;