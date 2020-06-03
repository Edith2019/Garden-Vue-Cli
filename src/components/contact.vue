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
                            <p>I agree with the terms and conditions</p>
                        </div>
                        <button v-on:click="handleClick" class="button">
                            submit
                        </button>
                    </form>
                </div>
                <textarea
                    v-model="message"
                    name="message"
                    placeholder="You message"
                >
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "contact",
    data() {
        return {
            first: "",
            last: "",
            email: "",
            message: "",
            checkbox: false,
        };
    },
    mounted() {
        console.log("somethin in mounted in contact");
        window.axios = require("axios");
    },
    methods: {
        handleClick: function(e) {
            console.log("function");
            e.preventDefault();
            // var self = this;
            console.log("this in handle", this);
            var formData = new FormData();
            console.log("formData", formData);
            formData.append("first", this.first);
            formData.append("last", this.last);
            formData.append("email", this.email);
            formData.append("message", this.message);
            console.log("this checkbox", this.checkbox);
            console.log("this.first", this.first);

            if (this.checkbox === true) {
                axios
                    .post("http://localhost:8080/submit", formData)
                    .then(function(results) {
                        console.log("results", results);
                    });
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
}

#checkbox {
    width: 20px;
}
.tandc {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

textarea {
    width: 40%;
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
