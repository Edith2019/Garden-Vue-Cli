<template>
    <div class="Intro">
        <div class="Intro-container">
            <br />
            <h1 class="Intro-title">Welcome to VGG Garden!</h1>
            <br />
            <br />
            <br />
            <br />
            <img
                class="Intro-picture"
                src="@/assets/container.jpg"
                width="800px"
                height="400px"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "intro",
    props: {},
};
</script>

<style scoped>
.Intro-container {
    height: 100vh;
    padding-top: 3.5em;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
}
.Intro-picture {
    border: solid white 5px;
    border-radius: 10px;
}
.Intro-title {
    color: white;
    padding-top: 90px;
    font-size: 5em;
    text-align: center;
}
</style>
