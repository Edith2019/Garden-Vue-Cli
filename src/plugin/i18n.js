import Vue from 'vue'; 
import VueI18n from 'vue-i18n'; 

Vue.use(VueI18n);



const messages = { 
    'en': {
    About: "About",
    Community: "Community",
    WhatWeDo: "What we do",
    Partners: "Partners",
    Events:"Events",
    Contact: "Contact",
    Welcome: "Welcome to VGG Garden!",
    GardenDef: " Vollguter Gemeinschaftsgarten (VGG) is a Neukölln-based community project located in the heart of the Kindl Kiez.VGG is a Garden.VGG is a platform for Experimentation, were you can explore the worlds of plants and herbs and were you can build installations from recycled material.It is place to learn from one another, to learn  about bees, to repair your bike, to weld, to prepare dumplings or learn about composting.VGG is platform for artists and performers.For some, VGG is a home.VGG is aplace to meet and hang out.VGG is an open community of people who like to work together and get their hands dirty. We believe in Bio- and Social diversity, We are proud of our diversity and make space appreciate all living things. We believe in the three permaculture ethics: earth care, people care, fare share. COME AND JOIN US :) ",
    OpeningHours: "Opening Hours: the Garden is always open!",
    WeSigned: "We signed the ",
    Urban: "Urban Gardening Manifest",
    Title1: "VGG Garden",
    Desc1: "Sunny and flowery times!",          
    Title2: "VGG Garden",
    Desc2: "Sunny and flowery times!",  
    Title3: "VGG Garden",
    Desc3: "Sunny and flowery times!",  
    GardenerMonth: "Gardener of the month",
    GardenerDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    CommDesc: "VGG garden is composed of a wide variety of people and where everyone is welcome.We are gardeners, builders, party bees with different background, culture, colors, gender, talents.",
    CommP1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    CommP2: "Some quick example text to build on the card title and make up the bulk of the card's content.",         
    CommP3: "Some quick example text to build on the card title and make up the bulk of the card's content.",           
    CommP4: "Some quick example text to build on the card title and make up the bulk of the card's content.",              
    CommP5: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    CommP6: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    CommP7: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    WWDDesc: "Our activities in the garden are very varied. We cultivate the entire area ourselves: we make sure that beds are built and maintained, we plant flowers, herbs, fruit and vegetables, we make sure that we water regularly and that the garden stays clean. Through our activities we offer workshops, for example: Soap workshop, bicycle repair workshop, clothing exchange, seed exchange etc. We also organize events e.g.garden parties, garden- cinema, flea market and much more. The garden is also a meeting point for many neighbours* and should invite you to stay without the pressure of consumption.",
    PartnerDesc: "Vollguter Gemeinschaftsgarten hat einige Partner mit denen wir zusammen arbeiten und die uns unterstützen:",
    ZH: "Zuhause- Zuhause e.V. ist ein vielfältiges Künstler*innen Kollektiv.Der Vollguter Gemeinschaftsgarten wurde erst durch den Zuhause e.V.initiert.",
    IZ: "Infozentrale- Die Infozentrale auf dem Vollgut wurde als DesignBuild Projekt des Natural Building Labs von 36 ArchitekturstudentInnen geplant und befindet sich in der Mitte von Vollguter Gemeinschaftsgarten.",
    Stif: "Edyth Marion- Die Stiftung Edith Maryon entzieht Grundstücke der Spekulation, damit sie dauerhaft sozialverträglich nutzen können.das VGG ....",
    FriendsDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's",
    FriendsTitle1: "Title",
    FriendsDec1:"Description",
    FriendsTitle2: "Title",
    FriendsDec2: "Description",
    FriendsTitle3: "Title",
    FriendsDec3: "Description",
    EventDesc: "Every Saturday afternoon is Garden Day. We meet to garden, fix, built and hung out together.",
    ContactDesc: "Questions? Ideas? Contributions? Reach out any time!",
    FN:"First Name",
    LN:"Last Name ",
    Email:"Email",
    tandCagree: "I agree with the terms and conditions",
    PtandCagree:"Please agree with the terms and conditions",
    Submit: "Submit",
    YourMessage: "Your message",
    GeneralInfo: "General Information:",
    Covid: "Covid-19",
    GeneralInfoDesc: "You must keep a minimum of 1.5 meters away from others not living with you when out in public.When sitting in parks or other green spaces, you must keep a 5-meter distance (that’s roughly 16.5 feet) from others.",
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
    tandcDesc3: "    We use both session cookies and persistent cookies on this website.",
    }, 
    'de': {
        About: "Uber",
        Community: "Gemeinschaft",
        WhatWeDo: "Was wir machen",
        Partners: "Partner",
        Events: "Veranstaltungen",
        Contact: "Kontakt",
        Welcome: "Willkommen im VGG-Garten!",
        GardenDef: "Der Vollguter Gemeinschaftsgarten (VGG) ist ein Neuköllner Gemeinschaftsprojekt im Herzen des Kindl Kiez.VGG ist ein Garten.VGG ist eine Experimentierplattform, auf der man die Welt der Pflanzen und Kräuter erkunden und Anlagen aus Recyclingmaterial bauen kann. Es ist ein Ort, um voneinander zu lernen, etwas über Bienen zu lernen, sein Fahrrad zu reparieren, zu schweißen, Knödel zuzubereiten oder etwas über Kompostierung zu lernen.VGG ist eine Plattform für Künstler und Performer.Für einige ist VGG ein Zuhause.VGG ist ein Ort, um sich zu treffen und abzuhängen.VGG ist eine offene Gemeinschaft von Menschen, die gerne zusammen arbeiten und sich die Hände schmutzig machen. Wir glauben an die biologische und soziale Vielfalt, wir sind stolz auf unsere Vielfalt und sorgen dafür, dass der Raum alle Lebewesen würdigt. Wir glauben an die drei Ethiken der Permakultur: Fürsorge für die Erde, Fürsorge für die Menschen, Fahrgeldbeteiligung. KOMMEN SIE UND SCHLIEßEN SIE SICH UNS AN :)",
        OpeningHours: "Öffnungszeiten: Der Garten ist immer geöffnet!",
        WeSigned: "Wir unterzeichneten die  ",
        Urban:"Manifest zur städtischen Gartenarbeit",
        WWDDesc: "Unsere Aktivitäten im Garten sind sehr vielfältig. Wir bewirtschaften die komplette Fläche selbst: wir sorgen dafür dass Beete gebaut und in Stand gehalten werden, wir bepflanzen sie mit Blumen, Kräuter, Obst und Gemüse, stellen sicher, dass wir regelmäßig gießen und dass der Garten sauber bleibt. Über unsere Aktionen bieten wir Workshops an z.B.: Seifen- Workshop, Fahrrad Repair- Workshop, Kleidertausch, Samen-Tausch etc. Wir veranstalten auch Events z.B.Gartenfeste, Garten - Kino, Flohmarkt u.v.m. Der Garten ist zudem Treffpunkt für viele Nachbar * innen und soll zum Verweilen einladen ohne Konsumzwang. ",
        PartnerDesc:"Vollguter Gemeinschaftsgarten hat einige Partner mit denen wir zusammen arbeiten und die uns unterstützen:",
        ZH: "Zuhause- Zuhause e.V. ist ein vielfältiges Künstler*innen Kollektiv.Der Vollguter Gemeinschaftsgarten wurde erst durch den Zuhause e.V.initiert.",
        IZ: "Infozentrale- Die Infozentrale auf dem Vollgut wurde als DesignBuild Projekt des Natural Building Labs von 36 ArchitekturstudentInnen geplant und befindet sich in der Mitte von Vollguter Gemeinschaftsgarten.",
        Stif: "Edyth Marion- Die Stiftung Edith Maryon entzieht Grundstücke der Spekulation, damit sie dauerhaft sozialverträglich nutzen können.das VGG ...."
    
    
    }, 
    'tr': {
        About: "hakkında",
        Community: "cemiyet",
        WhatWeDo: "Ne yapıyoruz",
        Partners: "Ortaklar",
        Events: "Etkinlikler",
        Contact: "İletişim",
        Welcome: "VGG Garden'a hoş geldiniz!",
        OpeningHours: "Opening Hours: the Garden is always open!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest",

    },
    'ar': {
        About: "على وشك أن",
        Community: "الجماعة",
        WhatWeDo: "الذي نفعله",
        Partners: "شركاء",
        Events: " الأحداث",
        Contact: "اتصل",
        Welcome: "مرحبًا بكم في حديقة VGG!",
        OpeningHours: "Opening Hours: the Garden is always open!",
        WeSigned: "We signed the ",
        Urban: "Urban Gardening Manifest",


    } 

};


const i18n = new VueI18n({ locale: 'en',  fallbackLocale: 'de', messages, });

export default i18n;