<template>
    <div class="about-container">
        <div class="card About">
            <div class="card-body">
                <h1 class="card-title">{{ $t("About")}}</h1>
                <p class="card-text">
                    {{ $t("GardenDef")}}
                </p>
                <p>
                    <!-- We believe in Bio- and Social diversity, We are proud of our
                    diversity and make space appreciate all living things. We
                    believe in the three permaculture ethics: earth care, people
                    care, fare share. COME AND JOIN US :) -->
                </p>
                <p>{{ $t("OpeningHours")}}</p>
                {{ $t("WeSigned")}}
                <a href="https://urbangardeningmanifest.de/" target="_blank"
                    > {{ $t("Urban")}}</a
                >
            </div>
            <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="../assets/House-min.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ $t("Title1")}}</h5>
                            <p>
                                {{ $t("Desc1")}}
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../assets/Pano-min.png"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ $t("Title2")}}</h5>
                            <p>
                                {{ $t("Desc2")}}
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="../assets/pasta-min.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                               <h5>{{ $t("Title3")}}</h5>
                            <p>
                                {{ $t("Desc3")}}
                            </p>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
    props: {},
};
</script>

<style scoped>
.about-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}

img {
    height: 500px !important;
}

@media only screen and (min-width: 1300px) {
.about-container {
       width: 70%;
    }
}

</style>
