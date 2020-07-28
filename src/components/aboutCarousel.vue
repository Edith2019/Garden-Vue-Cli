<template>
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
                            <h5>{{ $t("Title1") }}</h5>
                            <p>
                                {{ $t("Desc1") }}
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
                            <h5>{{ $t("Title2") }}</h5>
                            <p>
                                {{ $t("Desc2") }}
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
                            <h5>{{ $t("Title3") }}</h5>
                            <p>
                                {{ $t("Desc3") }}
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
</template>

<script>
export default {
    name: "AboutCarousel"
};
</script>

<style scoped>
img {
    height: 500px !important;
}
</style>