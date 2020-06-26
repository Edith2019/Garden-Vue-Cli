<template>
    <div class="card Community">
        <div class="card-body">
            <h1 class="card-title">Community</h1>
            <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </p>
        </div>

        <div class="testtest">
            <progressive-img
                id="pic"
                src="/pasta.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/gardenGreen.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/housePaint.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/flowers.jpg"
                class="rounded float-right"
                alt="..."
            />

            <progressive-img
                id="pic"
                src="/sun.jpg"
                class="rounded float-right"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/green.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/12633.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/pink.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/couture.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/fuego.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/sits.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/cooking.png"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/red.jpg"
                class="rounded float-left"
                alt="..."
            />

            <progressive-img
                id="pic"
                src="/painting.png"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                id="pic"
                src="/leaves.jpg"
                class="rounded float-left"
                alt="..."
            />
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
.Community {
    height: auto;
    width: 90%;
    margin: 200px auto;
}

img {
    height: 200px !important;
    margin: 0.15%;
    transition: transform 0.2s;
    object-fit: cover !important;
}

#pic.rounded.float-left.progressive-image {
    width: 33%;
    height: 200px;
    object-fit: cover;
}
#pic:hover {
    transform: scale(1.2);
    z-index: 100;
    border: white solid 4px;
}
</style>
