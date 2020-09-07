<template>
    <div class="friends-container">
        <div id="friends" class="card Partner ">
            <div class="card-body">
                <h1 class="card-title">Friends</h1>
                <p class="card-text">
                    {{ $t("FriendsDesc") }}
                </p>
            </div>
        </div>
        <div class="row rounded border pl-4">
            <div   v-for="datafriend in datafriends" v-bind:key="datafriend.key">
                <div class="card border-success m-2" style="max-width: 18rem;" >
                    <div class="card-body ">
                        <a href= "datafriend.href">
                        <h5 class="card-title text-center text-success" style="text-decoration:none;">{{ $t(datafriend.title) }}</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardsfriends from "./js/cardsfriends.js"
export default {
    name:"friends",
    data() {
        return {
            cardsfriends: [],
            datafriends: cardsfriends.cardsfriends
        }
    }
}
</script>

<style scoped>
.friends-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
   
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

.card-deck.rounded.border {
    margin: 0px;
}
.row.rounded.border {
    margin: 0px;
}
</style>