<template>
    <div class="card About">
        <div class="card-body">
            <h1 class="card-title">About</h1>
            <p class="card-text">
                Vollguter Gemeinschaftsgarten (VGG) is a Neukölln-based
                community project located in the heart of the ""Kindl Kiez"".
                VGG is a Garden. VGG is a platform for Experimentation, were you
                can explore the worlds of plants and herbs and were you can
                build installations from recycled material. It is place to learn
                from one another, to learn about bees, to repair your bike, to
                weld, to prepare dumplings or learn about composting. VGG is
                platform for artists and performers. For some, VGG is a home.
                VGG is a place to meet and hang out. VGG is an open community of
                people who like to work together and get their hands dirty.
            </p>
            <p>
                We believe in Bio- and Social diversity, We are proud of our
                diversity and make space appreciate all living things. We
                believe in the three permaculture ethics: earth care, people
                care, fare share. COME AND JOIN US :)
            </p>
            <p>Opening Hours: the Garden is always open!</p>
            We signed the
            <a href="https://urbangardeningmanifest.de/"
                >Urban Gardening Manifest</a
            >.
        </div>
        <!-- <div class="test"> -->
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
                        src="../assets/House.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>VGG Garden</h5>
                        <p>
                            Sunny and flowery times!
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/Pano.png"
                        class="d-block w-100"
                        alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Garden - Early Stage</h5>
                        <p>
                            This the land where everything started.
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/pasta.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Graden - events</h5>
                        <p>
                            Regular meeting take place to share meals, ideas and
                            love!
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
</template>

<script>
export default {
    name: "about",
    props: {},
};
</script>

<style scoped>
.About {
    height: auto;
    width: 90%;
    margin: 200px auto;
}

img {
    height: 500px !important;
}
</style>
