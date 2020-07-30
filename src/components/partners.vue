<template>
    <div class="partner-container">
        <div class="card Partner">
            <div class="card-body">
                <h1 class="card-title">{{ $t("Partners") }}</h1>
                <p class="card-text">
                    {{ $t("PartnerDesc") }}
                </p>
            </div>
        </div>
        <div class="card-deck rounded border">
            <div class="card hover" v-for="datapartner in datapartners" v-bind:key="datapartner.key">
                <img
                    v-bind:src="datapartner.src"
                    class="card-img-top"
                    v-bind:alt="datapartner.alt"
                />
                <div class="card-body">
                    <a v-bind:href="datapartner.href" target="_blank">
                        <h5 class="card-title">{{ datapartner.title}}</h5>
                    </a>
                    <p class="card-text">
                        {{ $t(datapartner.desc) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardspartner from "./cardspartners.js";
export default {
    name: "partners",
    data() {
        return {
            cardspartner: [],
            datapartners: cardspartner.cardspartner,
        };
    },
};
</script>

<style scoped>
.partner-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}
.Partner {
    height: auto;
    margin-bottom: -5px;
    margin: auto;
}
.hover {
    transition: all 0.2s ease-in-out;
}
.hover:hover {
    transform: scale(1.1);
}
.card-deck {
    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}
.row {
    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}
.card-deck.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}
.row.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}
#friends {
    margin-top: 100px;
}
.card-deck.rounded.border {
    margin: 0px;
}
.row.rounded.border {
    margin: 0px;
}

@media only screen and (min-width: 1300px) {
    .partner-container {
        width: 70%;
    }
    .card-deck.rounded.border {
        margin: 0px;
    }
    .row.rounded.border {
        margin: 0px;
    }
}
</style>
