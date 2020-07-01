<template>
    <div class="community-container">
        <div class="gardenerOfMonth mx-auto ">
            <p class="h1 mx-auto  Gardener-title col">
                Gardener of the month
            </p>
            <div class="card rounded mx-auto d-block col" style="width: 30rem">
                <progressive-img
                    id="protrait"
                    src="/month.jpg"
                    placeholder="/pasta.jpg"
                    alt="Responsive image"
                />
                <div class="card-body">
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
        <div class="card Community">
            <div class="card-body">
                <h1 class="card-title">Community</h1>
                <p class="card-text">
                    VGG garden is composed of a wide variety of people and bees
                    where everyone is welcome. We are gardeners, builders, party
                    bees with different background, culture, colors, gender,
                    talents.
                </p>
            </div>

            <!-- <div class="container">
                <div class="row"></div>
            </div> -->
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "community",
    data() {
        return {};
    },
    props: {},

    methods: {
        onLoad() {
            // main image is loaded
        },
        onLoadPlaceholder() {
            // placeholder image is loaded
        },
        onError(error) {
            // main image error
        },
        onErrorPlaceholder(error) {
            // placeholder image error
        },
    },
    components: {
        // VueProgressiveImage,
    },
};
</script>

<style scoped>
.community-container {
    margin-top: 100px;
    padding-top: 70px;
}

.Community {
    height: auto;
    width: 90%;
    margin: 100px auto;
    padding-bottom: 50px;
}
.gardenerOfMonth {
    width: 90%;
}
.card.rounded.mx-auto.d-block {
    margin-top: 2rem;
}
/* .progressive-image-wrapper {
    width: 33% !important;
} */

.Gardener-title {
    color: white;
    border: solid 5px white;
    padding: 20px;
    width: 30rem;
}
</style>
