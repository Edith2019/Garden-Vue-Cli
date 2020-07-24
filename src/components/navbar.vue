<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <!-- <router-link class="navbar-brand" to="/"> -->
        <a href="#intro" class="navbar-brand" v-smooth-scroll> VGG </a>
        <!-- </router-link> -->
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
            <div class="items-nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <!-- <router-link class="nav-link" to="/about"> -->
                    <a href="#about" class="nav-link" v-smooth-scroll>
                        {{ $t("About") }}
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item active">
                    <!-- <router-link class="nav-link" to="/community"> -->
                    <a href="#community" class="nav-link" v-smooth-scroll>
                         {{ $t("Community") }}
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/whatwedo"> -->
                    <a href="#whatwedo" class="nav-link" v-smooth-scroll>
                        {{$t( "WhatWeDo")}}</a
                    >
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/partners"> -->
                    <a href="#partners" class="nav-link" v-smooth-scroll>
                       {{$t("Partners")}}
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/events"> -->
                    <a href="#events" class="nav-link" v-smooth-scroll>
                        {{$t("Events")}}
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item ">
                    <!-- <router-link class="nav-link" to="/contact"> -->
                    <a href="#contact" class="nav-link" v-smooth-scroll>
                        {{$t( "Contact")}}
                    </a>
                    <!-- </router-link> -->
                </li>
            </ul>
            </div>
 
                <div class="collapse navbar-collapse nav-item" id="navbarSupportedContent">
                     <languages/>
                    </div>
                    

<div id="navbar-small-sm">
            <li class="navbar-text " >
                <a
                    href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                    target="_blank"
                >
                    <img
                        id="social"
                        src="@/assets/fproute-min.png"
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
                        src="@/assets/instaproute-min.png"
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

import languages from  "./ende.vue"
export default {
    name: "navbar",
    components:{
        languages,
    }
};
</script>

<style scoped>
.items-nav{
   width: 60%;
 
}


@media only screen and (max-width: 500px) {
.whatwedo-container {
       width: 70%;
    }
    #navbar-small-sm {
        margin-top: 50px;
        max-width: 340px !important;
    }

    #navbarSupportedContent.navbar-collapse.collapse.show {
        max-width: 340px !important;
    }

    #navbar.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top {

max-width: 100vw !important;

    }
    
}


</style>