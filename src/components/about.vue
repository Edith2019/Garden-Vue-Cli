<template>
    <div class="about-container">
        <div class="card About">
            <div class="card-body">
                <h1 class="card-title">{{ $t("About") }}</h1>
                <p class="card-text">
                    {{ $t("GardenDef") }}
                </p>
                <p>
                    {{ $t("OpeningHours") }}
                    <a href="#contact" v-smooth-scroll>
                        {{ $t("GetInTouch") }}
                    </a>
                </p>
                <br />
                {{ $t("WeSigned") }}
                <a href="https://urbangardeningmanifest.de/" target="_blank">
                    {{ $t("Urban") }}</a
                >
            </div>
            <AboutCarousel />
        </div>
    </div>
</template>

<script>
import AboutCarousel from "./aboutCarousel.vue";
export default {
    name: "about",
    props: {},
    components: {
        AboutCarousel,
    },
};
</script>

<style scoped>
.about-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}

@media only screen and (min-width: 1300px) {
    .about-container {
        width: 70%;
    }
}
</style>
