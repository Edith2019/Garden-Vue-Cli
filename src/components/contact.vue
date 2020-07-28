<template>
    <div class="contact-container mx-auto">
        <div v-dompurify-html="rawHtml"></div>

        <div class="card ">
            <div class="card-body">
                <h1>{{ $t("Contact") }}</h1>
                <p>{{ $t("ContactDesc") }}</p>
            </div>
        </div>
        <div id="inputdata" class="card contact-container-input">
            <div class="inputs-element">
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span
                                class="input-group-text"
                                id="inputGroup-sizing-default"
                            >
                                {{ $t("FN") }}
                            </span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            v-model="first"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span
                                class="input-group-text"
                                id="inputGroup-sizing-default"
                                >{{ $t("LN") }}</span
                            >
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            v-model="last"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span
                                class="input-group-text"
                                id="inputGroup-sizing-default"
                                >{{ $t("Email") }}</span
                            >
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            v-model="email"
                        />
                    </div>
                    <div class="tandc">
                        <div class="alignItems">
                            <input
                                v-model="checkbox"
                                type="checkbox"
                                id="checkbox"
                            />

                            <p class="tandcI">
                                {{ $t("tandCagree") }}
                            </p>
                        </div>
                        <div id="gdpr" ref="gdpr" v-if="gdpr">
                            {{ $t("PtandCagree") }}
                        </div>
                    </div>
                    <button
                        id="submit"
                        type="button"
                        class="btn btn-outline-secondary"
                        @click.prevent="handleClick"
                    >
                        {{ $t("Submit") }}
                    </button>
                </form>
            </div>
            <textarea
                v-model="message"
                name="message"
                placeholder="your message"
                class="form-control"
            >
            </textarea>
        </div>

        <div class="container">
            <div class="row">
                <div
                    id="location"
                    class="card col-md-auto d-flex justify-content-start"
                    style="width: 25rem;"
                >
                    <div class="card-body">
                        <h5 class="card-title">{{ $t("GeneralInfo") }}</h5>
                        <p class="card-text">
                            {{ $t("OpeningHours") }}
                        </p>
                        <p>{{ $t("Covid") }}:</p>
                        <p>{{ $t("GeneralInfoDesc") }}:</p>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div
                    id="location"
                    class="card col-md-6 ml-auto d-flex justify-content-end"
                    style="width: 25rem;"
                >
                    <div class="card-body">
                        <googlemap class="mx-auto" />
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="contactModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ $t("ThankYou") }}
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{ $t("Thank") }} {{ result }} {{ $t("ThankMessage") }}
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            {{ $t("Close") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import googlemap from "./googlemap.vue";
import * as $ from "jquery";

export default {
    name: "contact",
    components: {
        googlemap
    },
    data() {
        return {
            first: "",
            last: "",
            email: "",
            message: "",
            checkbox: false,
            gdpr: false,
            result: ""
        };
    },
    mounted() {
        window.axios = require("axios");
    },
    methods: {
        reset: function () {
            this.first = "";
            this.email = "";
            this.message = "";
            this.checkbox = false;
            this.last = "";
        },
        handleClick: async function () {
            if (this.checkbox === true) {
                const results = await axios.post(
                    "https://vgg-nkln.herokuapp.com/contact/submit",
                    {
                        first: this.first,
                        last: this.last,
                        email: this.email,
                        message: this.message
                    }
                );
                if (results.data) {
                    this.reset();
                    this.result = results.data.first;
                    $("#contactModal").modal(); // reason why jquery has been imported * as $
                }
            } else {
                this.gdpr = !this.gdpr;
            }
        }
    }
};
</script>

<style scoped>
.contact-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    padding-top: 100px;
}
.card {
    margin-bottom: 0px;
    padding-bottom: 0px;
}
#inputdata {
    background: none;
    padding: 5%;
    margin-bottom: 5%;
    margin-top: 0px;
    height: auto;
    background-color: rgba(255, 255, 255, 0.8);
}
.contact-container-input {
    height: 300px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.inputs-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
#checkbox {
    width: 20px;
    margin-top: 5px;
}
#gdpr {
    color: red;
    font-size: 12px;
    margin-top: 5px;
}
.alignItems {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 12px;
    padding-top: 4px;
}
.tandc {
    height: 100px;
}
textarea {
    width: 60%;
    color: black;
    margin-left: 5%;
}
#location {
    margin: 0px;
    margin-bottom: 50px;
}

@media only screen and (min-width: 1300px) {
    .contact-container {
        width: 70%;
    }
}
</style>
