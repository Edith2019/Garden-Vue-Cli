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
        <intro />
        <about id="about" />
        <community id="community" />
        <div class="whatwedo-App">
            <whatwedo id="whatwedo" />
            <slider />
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

            <mapgarden
                id="map"
                appId="VZVNlOiZeKiSnbYoPX6V"
                appCode="APP-CODE-HERE"
                lat="52.479657"
                lng="13.431890"
                width="400"
                height="300"
                mapEvent=""
            />
        </div>
        <div class="footer">
            <p>© VGG</p>
            <p>TandC</p>
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
import mapgarden from "./components/mapgarden.vue";

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
        mapgarden,
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

.text-app {
    width: 390px;
    height: 290px;
    border: solid white 0.5px;
    padding: 5px;
    font-size: 12px;
}

.map-app {
    margin-top: 200px;
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
</style>
