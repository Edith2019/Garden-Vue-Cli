<template>
    <div id="banner" class="container-fluid border-primary py-4">
        This website uses cookies (click
        <span v-on:click="togglemodal" class="tandcApp px-1 text-success">
            here
        </span>
        for more details), please agree with our policy to
        <tandc id="tandcModal" />

        <form method="POST" action="/cookie">
            <div class="form-group form-check-inline ml-5">
                <input type="hidden" name="_csrf" value="" />
                <input
                    type="radio"
                    class="form-check-input"
                    id="yes"
                    @click.prevent="handleClick"
                />

                <label class="form-check-label" for="exampleCheck1">Yes</label>
            </div>
        </form>
        <div class="form-group form-check-inline">
            <input type="radio" class="form-check-input" id="no" />
            <label class="form-check-label" for="exampleCheck2">No</label>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import * as $ from "jquery";
import tandc from "./tandc.vue";

export default {
    name: "banner",
    components: {
        tandc,
    },
    data() {
        return {
            csrfToken: "",
        };
    },
    mounted() {
        window.axios = require("axios");
    },
    methods: {
        togglemodal: function() {
            $("#tandcModal").modal();
        },
        getCsurf: async function() {
            const result = await axios.get("http://localhost:4000/form");
            console.log("result", result);
        },
        handleClick: async function() {
            const result = await axios.post(
                "http://localhost:4000/cookie/cookie",
                {
                    csrfToken: this.csrfToken,
                }
            );
            console.log("result", result);
            // .then((result) => {
            //     // this.csrf = res.data.csrfToken;
            //     console.log("res.", res);
            // });
        },
        //onclick yes remove the banner and send the id to the db for proof
    },
};
</script>

<style scoped>
#banner {
    position: fixed;
    bottom: 0px;
    background-color: rgb(255, 255, 255, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    z-index: 9999;
}
.tandcApp {
    cursor: pointer;
}
</style>
