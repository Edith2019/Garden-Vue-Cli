<template>
    <div id="app">
        <banner />
        <navbar id="navbar" />
        <intro id="intro" />
        <about id="about" />
        <community id="community" />
        <whatwedo id="whatwedo" />
        <partners id="partners" />
        <friends id="friends" />
        <events id="events" />
        <contact id="contact" />
        <footer />

        <div class="footer">
            <p>Copyright © 2020 VGG</p>
            <p v-on:click="togglemodal" class="tandcApp">
                Policy
            </p>
            <tandc id="tandcModal" />
            <p v-on:click="togglemodalImpressum" class="impressum">
                Impressum
            </p>
            <impressum id="impressumModal" />
        </div>
    </div>
</template>

<script>
import banner from "./components/banner.vue";
import navbar from "./components/navbar.vue";
import intro from "./components/intro.vue";
import tandc from "./components/tandc.vue";
import about from "./components/about.vue";
import community from "./components/community.vue";
import whatwedo from "./components/whatwedo.vue";
import partners from "./components/partners.vue";
import friends from "./components/friends.vue";
import events from "./components/events.vue";
import contact from "./components/contact.vue";
import impressum from "./components/impressum.vue";

import * as $ from "jquery";
export default {
    name: "App",
    components: {
        banner,
        navbar,
        intro,
        tandc,
        about,
        community,
        whatwedo,
        partners,
        friends,
        events,
        contact,
        impressum,
    },

    methods: {
        togglemodal: function() {
            $("#tandcModal").modal();
        },
        togglemodalImpressum: function() {
            $("#impressumModal").modal();
        },
    },
};
</script>

<style>
#translation {
    margin-top: 200px;
}

#app {
    height: auto;
    width: 100%;
    background-size: cover;
    background: url("/assets/House-min.jpg") no-repeat center center fixed;
}

* {
    margin: 0px;
    font-family: sans-serif;
}

img {
    object-fit: cover;
}

#social {
    margin-right: 20px;
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
    height: 4.5em;
    border: white solid 3px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
}

p {
    margin: 0px !important;
}

.tandcApp,
.impressum {
    cursor: pointer;
    /* z-index: 666; */
}
</style>
