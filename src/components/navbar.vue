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
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <!-- <router-link class="nav-link" to="/about"> -->
                    <a href="#about" class="nav-link" v-smooth-scroll>
                        About
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item active">
                    <!-- <router-link class="nav-link" to="/community"> -->
                    <a href="#community" class="nav-link" v-smooth-scroll>
                        Community
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/whatwedo"> -->
                    <a href="#whatwedo" class="nav-link" v-smooth-scroll>
                        What we do</a
                    >
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/partners"> -->
                    <a href="#partners" class="nav-link" v-smooth-scroll>
                        Partners
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/events"> -->
                    <a href="#events" class="nav-link" v-smooth-scroll>
                        Events
                    </a>
                    <!-- </router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/contact"> -->
                    <a href="#contact" class="nav-link" v-smooth-scroll>
                        Contact
                    </a>
                    <!-- </router-link> -->
                </li>
            </ul>
            <li class="navbar-text ">
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
    </nav>
</template>

<script>
export default {
    name: "navbar",
};
</script>
