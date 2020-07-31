<template>
    <div class="whatwedo-container">
        <div class="card whatwedo">
            <div class="card-body">
                <h1 class="card-title">{{ $t("WhatWeDo") }}</h1>
                <p class="card-text">
                    {{ $t("WWDDesc") }}
                </p>
            </div>
            <div class="container">
                <div class="row">
                    <div
                        class="col-6 col-md-4 "
                        style="width: 18rem"
                        v-for="pictureData in picturesData"
                        v-bind:key="pictureData.key"
                    >
                        <progressive-img
                            v-bind:id="pictureData.id"
                            v-bind:src="pictureData.src"
                            v-bind:placeholder="pictureData.placeholder"
                            class="card-img-top pic"
                            alt="Responsive image "
                        />
                        <div class="middle">
                            <div class="text">{{ $t(pictureData.text) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pictures from "./js/cardsWWD.js";

export default {
    name: "whatwedo",
    data() {
        return {
            pictures: [],
            picturesData: pictures.pictures,
        };
    },
};
</script>

<style scoped>
.pic {
    max-height: 200px !important;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
}
img.progressive-image-main {
    height: 200px !important;
    object-fit: cover !important;
}
.card-img-top {
    margin: 0.15%;
    transition: transform 0.2s;
    margin-bottom: 10px;
}
.whatwedo-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}
.middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}
.col-6.col-md-4:hover .pic {
    opacity: 0.3;
}
.col-6.col-md-4:hover .middle {
    opacity: 1;
}
.text {
    color: black;
    font-size: 16px;
    text-align: center;
}

@media only screen and (min-width: 1300px) {
    .whatwedo-container {
        width: 70%;
    }
}
</style>
