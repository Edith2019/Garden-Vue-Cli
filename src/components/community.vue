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
            <img
                src="../assets/pasta.jpg"
                class="rounded float-left"
                alt="..."
            />
            <img
                src="../assets/House.jpg"
                class="rounded float-right"
                alt="..."
            />
            <img
                src="../assets/gardenGreen.jpg"
                class="rounded float-left"
                alt="..."
            />
            <img
                src="../assets/House.jpg"
                class="rounded float-right"
                alt="..."
            />
            <img
                src="../assets/House.jpg"
                class="rounded float-left"
                alt="..."
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "community",
    props: {},
};
</script>

<style scoped>
.Community {
    height: auto;
    width: 90%;
    margin: 200px auto;
}

img {
    width: 25%;
}
</style>
