<template>
    <div class="community-container">
        <div class="gardenerOfMonth">
            <p class="h1 mx-auto text-center Gardener-title">
                Gardener of the month
            </p>
            <div class="card rounded mx-auto d-block" style="width: 30rem">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="container">
                <div class="row"></div>
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
    margin-top: 200px;
    padding-top: 70px;
}

.Community {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-bottom: 50px;
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
