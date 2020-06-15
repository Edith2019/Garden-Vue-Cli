<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">VGG</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/about">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/community">
                            Community
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/whatwedo">
                            What we do
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/partners">
                            Partners
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/events">
                            Events
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">
                            Contact
                        </router-link>
                    </li>
                </ul>
                <li class="navbar-text ">
                    <a
                        href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                        target="_blank"
                    >
                        <img
                            id="social"
                            src="@/assets/fproute.png"
                            width="30px"
                            height="30px"
                        />
                    </a>
                </li>
                <li class="navbar-text">
                    <a
                        href="https://www.instagram.com/vollgutergemeinschaftsgartennk/?hl=en"
                        target="_blank"
                    >
                        <img
                            id="social"
                            src="@/assets/instaproute.png"
                            width="30px"
                            height="30px"
                        />
                    </a>
                </li>
            </div>
        </nav>

        <router-view></router-view>

        <div class="footer">
            <p>Copyright © 2020 VGG</p>
            <p v-on:click="togglemodal" class="tandcApp">TandC</p>
            <tandc id="tandcModal" />
        </div>
    </div>
</template>

<script>
import tandc from "./components/tandc.vue";
import * as $ from "jquery";
export default {
    name: "App",
    components: {
        tandc,
    },
    data() {
        return {
            // tandcmodal: false,
        };
    },
    methods: {
        togglemodal: function() {
            // this.tandcmodal = !this.tandcmodal;
            $("#tandcModal").modal();
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

#social {
    margin-right: 20px;
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
