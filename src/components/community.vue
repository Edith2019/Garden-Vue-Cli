<template>
    <div class="community-container">
        <div class="gardenerOfMonth mx-auto ">
            <p class="h1 mx-auto  Gardener-title col">
                {{ $t("GardenerMonth") }}
            </p>
            <div class="card rounded mx-auto d-block col " style="width: 30rem">
                <progressive-img
                    id="protrait"
                    src="/assets/Oli.jpg"
                    placeholder="/Oli.jpg"
                    alt="Responsive image"
                />
                <div class="card-body">
                    <p class="card-text">
                        {{ $t("GardenerDesc") }}
                    </p>
                </div>
            </div>
        </div>
        <div class="card Community">
            <div class="card-body">
                <h1 class="card-title">{{ $t("Community") }}</h1>
                <p class="card-text">
                    {{ $t("CommDesc") }}
                </p>
            </div>
            <div class="container">
                <div class="row">
                    <div
                        class="col-6 col-md-4 rounded "
                        style="width: 18rem"
                        v-for="cardComm in cardsComm"
                        v-bind:key="cardComm.key"
                    >
                        <progressive-img
                            v-bind:id="cardComm.id"
                            v-bind:src="cardComm.src"
                            v-bind:placeholder="cardComm.placeholder"
                            class="rounded"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <p class="card-text">
                                {{ $t(cardComm.portraitDesc) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cards from "./js/cardsCommunity.js";
export default {
    name: "community",
    data() {
        return {
            cards: [],
            cardsComm: cards.cards,
           
            
        };
    },
};
</script>
<style>
/* #portraitsix img {
height: 460px !important;
object-fit: cover;
padding: 0 !important;
}

#portraitone img {
height: 460px !important;
object-fit: cover;
} */

</style>
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