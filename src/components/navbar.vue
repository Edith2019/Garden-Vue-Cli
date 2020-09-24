<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a href="#intro" class="navbar-brand" v-smooth-scroll> VGG </a>
        <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="collapse navbar-collapse navbar-collapse"
            id="navbarSupportedContent"
        >
            <div class="navbarCollapse  items-nav">
                <ul class="nav navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a
                            href="#about"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("About") }}
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a
                            href="#community"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("Community") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="#whatwedo"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("WhatWeDo") }}</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            href="#partners"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("Partners") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="#events"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("Events") }}
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a
                            href="#contact"
                            class="nav-link"
                            v-smooth-scroll
                            v-on:click="handleToggle"
                        >
                            {{ $t("Contact") }}
                        </a>
                    </li>
                </ul>
            </div>
            <div
                class="collapse navbar-collapse nav-item sm"
                id="navbarSupportedContent"
            >
                <languages />
            </div>
            <div id="navbar-small-sm">
                <li class="navbar-text ">
                    <a
                        href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                        target="_blank"
                    >
                        <img
                            id="social"
                            src="/assets/fproute-min.png"
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
                            src="/assets/instaproute-min.png"
                            width="30px"
                            height="30px"
                        />
                    </a>
                </li>
            </div>
        </div>
    </nav>
</template>

<script>
import languages from "./ende.vue";
import * as $ from "jquery";

export default {
    name: "navbar",
    components: {
        languages,
    },

    methods: {
        handleToggle: function() {
            $("#navbarSupportedContent").collapse("hide");
        },
    },
};
</script>

<style scoped>
.items-nav {
    width: 60%;
}

@media only screen and (max-width: 400px) {
    .whatwedo-container {
        width: 70%;
    }
    #navbar-small-sm {
        max-width: 340px !important;
    }
    #navbarSupportedContent.navbar-collapse.collapse.show {
        max-width: 340px !important;
    }
    #navbar.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top {
        max-width: 100vw !important;
    }
}
@media only screen and (max-width: 900px) {
    #navbar-small-sm {
        margin-top: 50px;
    }
}
</style>
