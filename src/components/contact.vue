<template>
    <div id="contact">
        <div class="card contact-container">
            <div class="card-body">
                <h1>Contact</h1>
                <p>Questions? Ideas? Contributions? Reach out any time!</p>
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
                                >First Name</span
                            >
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
                                >Last Name</span
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
                                >Email</span
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
                                I agree with the terms and conditions
                            </p>
                        </div>
                        <div id="gdpr" ref="gdpr" v-if="gdpr">
                            Please agree with the terms and conditions
                        </div>
                    </div>
                    <button
                        id="submit"
                        type="button"
                        class="btn btn-outline-secondary"
                        @click.prevent="handleClick"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <textarea
                v-model="message"
                name="message"
                placeholder="Your message"
                class="form-control"
            >
            </textarea>
        </div>

        <div class="card-deck">
            <div id="location" class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                    <p class="card-text">
                        <small class="text-muted"
                            >Last updated 3 mins ago</small
                        >
                    </p>
                </div>
            </div>
            <div id="location" class="card right">
                <div class="card-body">
                    <googlemap class="mx-auto" />
                </div>
            </div>
        </div>

        <div class="modal fade" id="contactModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Thank you!
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
                        Thank you {{ result }} for reaching out to us. We will
                        come back to you as soon as possible!
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
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
        googlemap,
    },
    data() {
        return {
            first: "",
            last: "",
            email: "",
            message: "",
            checkbox: false,
            gdpr: false,
            result: "",
        };
    },
    mounted() {
        console.log("somethin in mounted in contact");
        window.axios = require("axios");
    },
    methods: {
        reset: function() {
            this.first = "";
            this.email = "";
            this.message = "";
            this.checkbox = false;
            this.last = "";
        },
        handleClick: async function() {
            if (this.checkbox === true) {
                const results = await axios.post(
                    "https://vgg-nkln.herokuapp.com/contact/submit",
                    {
                        first: this.first,
                        last: this.last,
                        email: this.email,
                        message: this.message,
                    }
                );
                if (results.data) {
                    this.reset();
                    console.log(results);
                    this.result = results.data.first;
                    $("#contactModal").modal(); //reason why jquery has been imported * as $
                }
            } else {
                this.gdpr = !this.gdpr;
            }
        },
    },
};
</script>

<style scoped>
.contact-container {
    width: 90%;
    margin: 200px auto;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.card {
    width: 90%;
    margin: 200px auto;
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
    width: 90%;
    color: black;
    margin-left: 5%;
}

.card-deck {
    margin-left: 5%;
    margin-right: 5%;
    padding: 0px;
}

#location {
    margin: 0px;
}

.right {
    margin-left: 10% !important;
}
</style>
