<template>
    <div class="community-container">
        <div class="gardenerOfMonth mx-auto ">
            <p class="h1 mx-auto  Gardener-title col">
                {{ $t("GardenerMonth")}}
            </p>
            <div class="card rounded mx-auto d-block col" style="width: 30rem">
                <progressive-img
                    id="protrait"
                    src="/month.jpg"
                    placeholder="/pasta.jpg"
                    alt="Responsive image"
                />
                <div class="card-body">
                    <p class="card-text">
                        {{ $t("GardenerDesc")}}
                        
                    </p>
                </div>
            </div>
        </div>
        <div class="card Community">
            <div class="card-body">
                <h1 class="card-title"> {{$t("Community")}}</h1>
                <p class="card-text">
                    {{$t("CommDesc")}}
                </p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                             {{$t("CommP1")}}
                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                           {{$t("CommP2")}}

                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                        {{ $t("CommP3")}}

                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                         {{$t("CommP4")}}

                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                            {{$t("CommP5")}}

                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                          {{$t("CommP6")}}

                            </p>
                        </div>
                    </div>
                    <div class="col-6 col-md-4" style="width: 18rem;">
                        <progressive-img
                            class="card-img-top"
                            id="protrait"
                            src="/green-min.jpg"
                            placeholder="/pasta.jpg"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                           {{$t("CommP7")}}

                            </p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
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
.community-container {
  height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}
.card.Community {
    margin-bottom: 0px !important;
}
.Community {
    height: auto;
    width: 100%;
    margin-top: 100px;
    padding-bottom: 50px;
}
.gardenerOfMonth {
    width: 90%;
}
.card.rounded.mx-auto.d-block {
    margin-top: 2rem;
}

.Gardener-title {
    color: white;
    border: solid 5px white;
    padding: 20px;
    width: 30rem;
}

@media only screen and (min-width: 1300px) {
.community-container {
 width: 70%;
 float: none;
    }
}
</style>
