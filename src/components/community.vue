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

        <div class="container">
            <div class="row">
                <progressive-img
                    id="pic"
                    src="/pasta.jpg"
                    placeholder="/pasta.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="Responsive image"
                />
                <progressive-img
                    id="pic"
                    src="/gardenGreen.jpg"
                    placeholder="/gardenGreen.jpg"
                    class="rounded float-left col-sm img-fluid"
                    alt="Responsive image"
                />
                <progressive-img
                    id="pic"
                    src="/housePaint.jpg"
                    placeholder="/housePaint.jpg"
                    class="rounded float-left col-sm img-fluid"
                    alt="Responsive image"
                />
            </div>
            <div class="row">
                <progressive-img
                    id="pic"
                    src="/flowers.jpg"
                    placeholder="/flowers.jpg"
                    class="rounded float-left col-sm img-fluid"
                    alt="..."
                />

                <progressive-img
                    id="pic"
                    src="/sun.jpg"
                    placeholder="/sun.jpg"
                    class="rounded float-left col-sm img-fluid"
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/green.jpg"
                    placeholder="/green.jpg"
                    class="rounded float-left col-sm img-fluid"
                    alt="..."
                />
            </div>
            <div class="row">
                <progressive-img
                    id="pic"
                    src="/12633.jpg"
                    placeholder="/12633.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/pink.jpg"
                    placeholder="/pink.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/couture.jpg"
                    placeholder="/couture.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
            </div>
            <div class="row">
                <progressive-img
                    id="pic"
                    src="/fuego.jpg"
                    placeholder="/fuego.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/sits.jpg"
                    placeholder="/sits.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/cooking.png"
                    placeholder="/cooking.png"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
            </div>
            <div class="row">
                <progressive-img
                    id="pic"
                    src="/red.jpg"
                    placeholder="/red.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />

                <progressive-img
                    id="pic"
                    src="/painting.png"
                    placeholder="/painting.png"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
                <progressive-img
                    id="pic"
                    src="/leaves.jpg"
                    placeholder="/leaves.jpg"
                    class="rounded float-left col-sm img-fluid "
                    alt="..."
                />
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
.Community {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-bottom: 50px;
}

/* .progressive-image-wrapper {
    width: 33% !important;
} */

.rounded.float-left.progressive-image {
    min-width: 33% !important;
    height: 200px !important;
    object-fit: cover !important;
    margin: 0.15%;
    transition: transform 0.2s;
}

.rounded.float-left.progressive-image:hover {
    transform: scale(1.2);
    z-index: 100;
    border: white solid 4px;
    object-fit: cover;
}
</style>
