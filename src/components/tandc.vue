<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Terms and Conditions
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
                    <p>
                        Like most similar websites, this site uses cookies. On
                        this page we explain more about cookies and how we use
                        them. By using this website and agreeing to this policy,
                        you consent to our use of cookies in accordance with the
                        terms of this policy.
                    </p>
                    <h2>About cookies</h2>
                    <p>
                        Cookies are files, often including unique identifiers,
                        that are sent by web servers to web browsers, and which
                        may then be sent back to the server each time the
                        browser requests a page from the server. Cookies can be
                        used by web servers to identify and track users as they
                        navigate different pages on a website, and to identify
                        users returning to a website. Cookies may be either
                        “persistent” cookies or “session” cookies. A persistent
                        cookie consists of a text file sent by a web server to a
                        web browser, which will be stored by the browser and
                        will remain valid until its set expiry date (unless
                        deleted by the user before the expiry date). A session
                        cookie, on the other hand, will expire at the end of the
                        user session, when the web browser is closed.
                    </p>

                    <h2>Cookies on this website</h2>
                    <p>
                        We use both session cookies and persistent cookies on
                        this website.
                    </p>
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
</template>

<script>
export default {
    name: "tandcmodal",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped></style>
