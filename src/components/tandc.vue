<template>
    <div class="tandc-container" v-on:click="closemodal" v-if="tandcmodal">
        <h2 class="X">x</h2>
        <br />
        <br />
        <p>
            Like most similar websites, this site uses cookies. On this page we
            explain more about cookies and how we use them. By using this
            website and agreeing to this policy, you consent to our use of
            cookies in accordance with the terms of this policy.
        </p>
        <br />
        <h2>About cookies</h2>
        <p>
            Cookies are files, often including unique identifiers, that are sent
            by web servers to web browsers, and which may then be sent back to
            the server each time the browser requests a page from the server.
            Cookies can be used by web servers to identify and track users as
            they navigate different pages on a website, and to identify users
            returning to a website. Cookies may be either “persistent” cookies
            or “session” cookies. A persistent cookie consists of a text file
            sent by a web server to a web browser, which will be stored by the
            browser and will remain valid until its set expiry date (unless
            deleted by the user before the expiry date). A session cookie, on
            the other hand, will expire at the end of the user session, when the
            web browser is closed.
        </p>
        <br />
        <h2>Cookies on this website</h2>
        <p>
            We use both session cookies and persistent cookies on this website.
        </p>
    </div>
</template>

<script>
export default {
    name: "tandcmodal",
    data() {
        return {
            tandcmodal: true,
        };
    },
    methods: {
        closemodal: function() {
            this.tandcmodal = false;
        },
    },
};
</script>

<style scoped>
.X {
    text-align: right;
    margin-top: -2%;
    cursor: pointer;
}

.tandc-container {
    height: 500px;
    position: fixed;
    top: 3.5em;
    right: 0;
    height: auto;
    left: 0;
    bottom: 3.5em;
    z-index: 100;
    overflow: visible;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 5%;
    margin-left: 10%;
    margin-right: 10%;
}
</style>
