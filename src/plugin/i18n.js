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
    CommP8: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    
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