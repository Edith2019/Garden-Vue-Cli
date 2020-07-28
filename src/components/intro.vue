<template >
    <div class="Intro" >
        <div class="Intro-container" >
            <h1 class="Intro-title" >{{ $t("Welcome") }}</h1 >

            <a class="manifest " href="http://www.urban-gardening-manifest.de"
                ><img id="badge"
                    src="https://urbangardeningmanifest.de/pulsepro/data/img/uploads/garden-manifest-button-200x200.png"
                    alt="Die Stadt ist unser Garten"
            /></a >

            <img
                class="Intro-picture"
                src="@/assets/container-min.jpg"
                 width="80%"
                height="50%"
            />
        </div >
    </div >
</template >

<script>

export default {
    name: "intro",
    props: {}

};
</script>

<style scoped>
.Intro-container {
    height: auto;
    padding-top: 3.5em;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;

}
.Intro-picture {
    border: solid rgba(255, 255, 255, 0.8) 10px;
    margin-top: 5%;

}
h1.Intro-title {
    color: white;
    font-size: 5em;
    text-align: center;
    margin-top: 50px;
    padding: 5%;
    width: 100%;
}

.manifest {
    margin-bottom: -15%;
    margin-left: 75%;
    z-index: 100;
}

@media only screen and (max-width: 500px) {
    #badge {
        margin-bottom: -8%;
        margin-left: 10%;
        z-index: 100;
    }

    img#badge {
        width: 90%;
        height:auto;
        margin-top: 50px;
    }

}

@media only screen and (min-width: 1300px) {
.manifest {
        margin-bottom: -13%;
        margin-left: 78%;
        z-index: 100;

    }

    img.Intro-picture {
         width: 80%;
        height:20% !important;
    }
}

</style>
