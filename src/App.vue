<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <!-- <test msg="Testing component" /> -->
        <div class="menu">
            <img
                src="@/assets/Logo.jpg"
                width="55px"
                height="55px"
                background="none"
            />
            <a class="Intro-a" href="#about">About</a>
            <a class="Intro-a" href="#community">Community</a>
            <a class="Intro-a" href="#whatwedo">What we do</a>
            <a class="Intro-a" href="#partners">Partners</a>
            <a class="Intro-a" href="#events">Events</a>
            <a class="Intro-a" href="#contact">Contact</a>
        </div>
        <div class="social-media">
            <img
                class="fb-social"
                src="@/assets/instaproute.png"
                width="30px"
                height="30px"
            />
            <a
                href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                target="_blank"
            >
                <img
                    class="fb-social"
                    src="@/assets/fproute.png"
                    width="30px"
                    height="30px"
                />
            </a>
        </div>
        <intro />
        <about id="about" />
        <community id="community" />
        <div class="whatwedo-App">
            <whatwedo id="whatwedo" />
            <slider />
            <br />
            <p class="findmore">Find more here...</p>
        </div>
        <partners id="partners" />
        <events id="events" />
        <contact id="contact" />
        <div class="map-app">
            <div class="text-app">
                <p>Info</p>
                <p>
                    ver since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centu
                </p>
            </div>

            <googlemap />
        </div>
        <div class="footer">
            <p>Copyright © 2020 VGG</p>
            <p v-on:click="togglemodal" class="tandcApp">TandC</p>
            <tandc v-if="tandcmodal" />
        </div>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import test from "./components/test.vue";
import intro from "./components/intro.vue";
import about from "./components/about.vue";
import community from "./components/community.vue";
import whatwedo from "./components/whatwedo.vue";
import slider from "./components/slider.vue";
import partners from "./components/partners.vue";
import events from "./components/events.vue";
import contact from "./components/contact.vue";
import googlemap from "./components/googlemap.vue";
import tandc from "./components/tandc.vue";

export default {
    name: "App",
    components: {
        intro,
        about,
        community,
        whatwedo,
        slider,
        partners,
        events,
        contact,
        // mapgarden,
        googlemap,
        tandc,
    },
    data() {
        return {
            tandcmodal: false,
        };
    },
    methods: {
        togglemodal: function() {
            this.tandcmodal = !this.tandcmodal;
        },
    },
};
</script>

<style>
#app {
    height: auto;
    width: 100%;
    background-size: cover;
    background: url("./assets/House.jpg") no-repeat center center fixed;
}

* {
    margin: 0px;
    font-family: sans-serif;
}

img {
    object-fit: cover;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3.5em;
    position: fixed;
    width: 100%;
    background-color: #37bc61;
    border-bottom: solid white 1px;
    color: white;
    opacity: 95%;
    z-index: 10;
}

.social-media {
    width: 12%;
    height: 70px;
    position: fixed;
    margin-top: 170px;
    margin-left: -2%;
    background-color: white;
    border: solid #37bc61 1px;
    border-bottom: solid 2px #37bc61;
    z-index: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    padding-left: 5px;
}

.Intro-a {
    cursor: pointer;
    transition: 0.2s;
    outline: none;
    color: white;
    text-decoration: none;
}
.Intro-a:hover {
    transform: scale(1.3);
}
.whatwedo-App {
    background-color: white;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
}

.findmore {
    text-align: right;
    cursor: pointer;
}
.text-app {
    width: 378px;
    height: 278px;
    border: solid white 0.5px;
    padding: 10px;
    font-size: 12px;
}

.map-app {
    margin-top: 200px;
    padding: 2%;
    height: 400px;
    background-color: #282828;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
}

.footer {
    margin-top: 100px;
    height: 3.5em;
    border: white solid 3px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.tandcApp {
    cursor: pointer;
}
</style>
