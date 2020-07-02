<template>
    <div class="Intro">
        <div class="Intro-container">
            <h1 class="Intro-title">Welcome to VGG Garden!</h1>
            <a class="manifest" href="http://www.urban-gardening-manifest.de"
                ><img
                    src="https://urbangardeningmanifest.de/pulsepro/data/img/uploads/garden-manifest-button-200x200.png"
                    alt="Die Stadt ist unser Garten"
            /></a>
            <img
                class="Intro-picture"
                src="@/assets/container-min.jpg"
                width="80%"
                height="60%"
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
    padding-bottom: 0px;
    margin-bottom: 100px;
}
.Intro-picture {
    border: solid rgba(255, 255, 255, 0.8) 10px;
    margin-top: 5%;
}
.Intro-title {
    color: white;
    font-size: 5em;
    text-align: center;
    margin-top: 50px;
}

.manifest {
    margin-bottom: -15%;
    margin-left: 70%;
    z-index: 100;
}
</style>
