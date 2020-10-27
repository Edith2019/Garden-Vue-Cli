<template>
    <div>
        <tandc id="tandcModalBann" />

        <nav
            id="banner"
            class="container-fluid border-primary fixed-bottom  py-4  "
        >
            <p>
                This website uses cookies, please agree with our policy
            </p>
            <form method="POST" action="/cookie" class="ms-1">
                <div class="form-group form-check-inline ml-5">
                    <input type="hidden" name="_csrf" value="" />
                    <input
                        type="radio"
                        class="form-check-input"
                        id="yes"
                        @click.prevent="handleClick"
                    />

                    <label class="form-check-label" for="exampleCheck1"
                        >Yes</label
                    >
                </div>
            </form>
            <form>
                <div class="form-group form-check-inline">
                    <input
                        type="radio"
                        class="form-check-input"
                        id="no"
                        @click.prevent="handleClickNo"
                    />
                    <label class="form-check-label" for="exampleCheck2"
                        >No</label
                    >
                </div>
            </form>
            <div class="blocker"></div>
        </nav>
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
        togglemodalBanner: function() {
            // $("#tandcModalBann").modal("show");
            $("#navbar_register_btn").on("click", function(e) {
                e.preventDefault();
                $("#tandcModalBann").modal("show");
            });
        },
        // $("#navbar_register_btn").on("click", function(e) {
        //     e.preventDefault();
        //     $("#basicModal").modal("show");
        // });

        getCsurf: async function() {
            const result = await axios.get("http://localhost:4000/form");

            console.log("result", result);
        },
        handleClick: async function() {
            document.getElementById("banner").classList.add("anim");
            console.log("result", result);
            const result = await axios.post(
                "http://localhost:4000/cookie/cookie",
                {
                    csrfToken: this.csrfToken,
                }
            );

            // .then((result) => {
            //     // this.csrf = res.data.csrfToken;
            //     console.log("res.", res);
            // });
        },
        //onclick yes remove the banner and send the id to the db for proof
        handleClickNo: async function() {
            console.log("handleclickNo");
            document.getElementById("banner").classList.add("anim");
        },
    },
};
</script>

<style scoped>
/* if parents have a position fixed/ relative/ absolute modal is not working properly */
#banner {
    /* position: fixed; */
    bottom: 0px;
    background-color: rgb(255, 255, 255, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    z-index: 9999;
}

.anim {
    visibility: hidden;
    height: 0%;
    width: 0%;
    margin-top: 100%;
    z-index: 2;
}

.banner {
    cursor: pointer;
}

#tandcModalBann {
    z-index: 999;
}
</style>
