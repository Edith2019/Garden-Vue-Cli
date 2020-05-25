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
        <div class="footer"></div>
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

export default {
    name: "App",
    components: {
        // HelloWorld,
        // test,
        intro,
        about,
        community,
        whatwedo,
        slider,
        partners,
        events,
        contact,
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
}

.footer {
    margin-top: 100px;
    height: 3.5em;
    border: white solid 3px;
    background-color: white;
}
</style>
