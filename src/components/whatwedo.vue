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
                    <div class="col-6 col-md-4 " style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/pasta-min.jpg"
                            placeholder="/pasta.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic1") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/green-min.jpg"
                            placeholder="/gardenGreen.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic2") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/housePaint-min.jpg"
                            placeholder="/housePaint.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic3") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/sun-min.jpg"
                            placeholder="/sun.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic4") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/12633-min.jpg"
                            placeholder="/12633.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic5") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/pink-min.jpg"
                            placeholder="/pink.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic6") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/couture-min.jpg"
                            placeholder="/couture.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic7") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/fuego-min.jpg"
                            placeholder="/fuego.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic8") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/sits-min.jpg"
                            placeholder="/sits.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic9") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/cooking.png"
                            placeholder="/cooking.png"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic10") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/red-min.jpg"
                            placeholder="/red.jpg"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic11") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/painting-min.png"
                            placeholder="/painting.png"
                            class="card-img-top"
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic12") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/leaves-min.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic13") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/sits.jpg"
                            placeholder="/sits.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic14") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/pig.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic15") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/locomotive.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic16") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/ThreeLittlePigs.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic17") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/bells.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic18") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/concert.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic19") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/owls.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic20") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/cinema.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic21") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/bee.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic22") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/gardenvibe.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic23") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/Felixdj.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic24") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/dog.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic25") }}</div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/cookingloving.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic26") }}</div>
                        </div>
                    </div>
                       <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/bluming.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic27") }}</div>
                        </div>
                    </div>
                       <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/trash.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic28") }}</div>
                        </div>
                    </div>
                       <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/gardenfest.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic29") }}</div>
                        </div>
                    </div>
                       <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/flamenco.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic30") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/Bailando.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic31") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/Drum.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic32") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/beeday.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic33") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/experiment.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic34") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/Neighbours.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic35") }}</div>
                        </div>
                    </div>
                         <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/potato.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic36") }}</div>
                        </div>
                    </div>
                           <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/berries.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic37") }}</div>
                        </div>
                    </div>
                           <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/lemonade.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic38") }}</div>
                        </div>
                    </div>
                           <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/salad.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic39") }}</div>
                        </div>
                    </div>
                           <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/seeds.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic40") }}</div>
                        </div>
                    </div>
                           <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            id="pic"
                            src="/cookingloving.jpg"
                            placeholder="/leaves.jpg"
                            class="card-img-top "
                            alt="Responsive image"
                        />
                        <div class="middle">
                            <div class="text">{{ $t("Pic41") }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whatwedo",
    data() {
        return {};
    },
};
</script>

<style scoped>
#pic {
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
.col-6.col-md-4:hover #pic {
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
