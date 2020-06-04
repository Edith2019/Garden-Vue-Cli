<template>
    <div id="contact">
        <div class="contact-container">
            <h1>Contact</h1>
            <br />
            <p>Questions? Ideas? Contributions? Reach out any time!</p>
            <div class="contact-container-input">
                <div class="inputs-element">
                    <form>
                        <input
                            v-model="first"
                            type="text"
                            name="first"
                            placeholder="First Name"
                        />
                        <input
                            v-model="last"
                            type="text"
                            name="last"
                            placeholder="Last Name"
                        />
                        <input
                            v-model="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <div class="tandc">
                            <input
                                v-model="checkbox"
                                type="checkbox"
                                id="checkbox"
                            />
                            <div class="conditionsgdpr">
                                <p>I agree with the terms and conditions</p>
                                <br />
                                <div id="gdpr" ref="gdpr" v-if="gdpr">
                                    Please agree with the terms and conditions
                                </div>
                            </div>
                        </div>
                        <button @click.prevent="handleClick" class="button">
                            submit
                        </button>
                    </form>
                </div>
                <textarea
                    v-model="message"
                    name="message"
                    placeholder="Your message"
                >
                </textarea>
            </div>
        </div>

        <div class="map-app">
            <div class="text-app">
                <p>Info</p>
                <p>
                    ver since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centu
                </p>
            </div>

            <googlemap />
        </div>

        <div class="modal fade" id="contactModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Response
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
                        {{ result }}
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
                    "http://localhost:4000/contact/submit",
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
                    $("#contactModal").modal();
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
    margin-top: 200px;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
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

input {
    width: 300px;
    height: 50px;
    background-color: white;
    outline: none;
    border: none;
    font-size: 15px;
    border-bottom: solid #37bc61 3px;
    padding-left: 30px;
    margin-bottom: 15px;
}

#checkbox {
    width: 20px;
    margin-top: -50px;
}

#gdpr {
    color: red;
}

.conditionsgdpr {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    width: 320px;
    position: absolute;
    margin-left: 40px;
    height: 90px;
}
.tandc {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}

textarea {
    width: 100%;
    height: 54%;
    background-color: white;
    outline: none;
    border: none;
    border-bottom: #37bc61 solid 4px;
    font-size: 15px;
    padding-left: 30px;
    padding-top: 30px;
    color: black;
}
</style>
