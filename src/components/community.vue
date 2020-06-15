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
                src="../assets/pasta.jpg"
                class="rounded float-left"
                alt="..."
                placeholder="../assets/pasta.jpg"
                :blur="30"
                @onLoad="onLoad"
                @onLoadPlaceholder="onLoadPlaceholder"
                @onError="onError"
                @onErrorPlaceholder="onErrorPlaceholder"
            />
            <!-- <img
                src="../assets/pasta.jpg"
                class="rounded float-left"
                alt="..."
                placeholder="../assets/pasta.jpg"
            /> -->
            <progressive-img
                src="../assets/gardenGreen.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/housePaint.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/flowers.jpg"
                class="rounded float-right"
                alt="..."
            />

            <progressive-img
                src="../assets/sun.jpg"
                class="rounded float-right"
                alt="..."
            />
            <progressive-img
                src="../assets/green.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/12633.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/pink.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/couture.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/fuego.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/sits.jpg"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/cooking.png"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/red.jpg"
                class="rounded float-left"
                alt="..."
            />

            <progressive-img
                src="../assets/painting.png"
                class="rounded float-left"
                alt="..."
            />
            <progressive-img
                src="../assets/leaves.jpg"
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
};
</script>

<style scoped>
.Community {
    height: auto;
    width: 90%;
    margin: 200px auto;
}

img {
    width: 33%;
    height: 250px;
    margin: 0.15%;
}
</style>
