<template>
    <div id="contact">
        <div class="contact-container">
            <h1>Contact</h1>
            <br />
            <p>Questions? Ideas? Contributions? Reach out any time!</p>
            <div class="contact-container-input">
                <div class="inputs-element">
                    <input type="text" name="first" placeholder="First Name" />
                    <input type="text" name="last" placeholder="Last Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <div class="tandc">
                        <input type="checkbox" id="checkbox" />
                        <p>I agree with the terms and conditions</p>
                    </div>
                    <button>submit</button>
                </div>
                <textarea name="textarea" placeholder="You message"> </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    props: {},
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
