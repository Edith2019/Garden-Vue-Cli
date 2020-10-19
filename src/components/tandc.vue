<template>
    <div
        class="modal fade"
        id="tandC"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Privacy Policy
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
                    <h3>What data do we collect?</h3>
                    <p>
                        We receive, collect and store any information you enter
                        on our website or provide us in any other way. Here is
                        an overview of forms on our site where you may submit
                        your data to us: Contact us: your first name and email
                        address, a personalised message and any other
                        information you provide us in the messaging field is
                        gonna be stored in our data base. We may use software
                        tools to measure and collect session information,
                        including page response times, length of visits to
                        certain pages, page interaction information, and methods
                        used to browse away from the page.
                    </p>

                    <h3>How do we collect this data?</h3>
                    <p>
                        We utilise cookies for the Contact us: a sign-up form.
                        We collect personal and non-personal information to
                        facilitate communication between visitors to our website
                        and volunteers for our project. Here is an overview of
                        the reasons why we collect the different types of data
                        specified above:- Contact us: to make it easy for you to
                        contact us with questions, ideas, or concerns - Contact
                        us: in our garten@daszuhause.com inbox, in our contact
                        list and form submissions on wix.com - Event RSVP: in
                        our garten@daszuhause.com inbox, in our form
                        submissions. Your data may be stored through our data
                        storage, databases and the general applications. They
                        store your data on secure servers behind a firewall.
                        Access/correct/amend/delete your data If you don’t want
                        us to process your data anymore, please contact us at
                        garten@daszuhause.com so we can handle your request.
                        Likewise, if you would like to: access, correct, amend
                        or delete any personal information we have about you,
                        you are invited to contact us at garten@daszuhause.com.
                    </p>
                    <h3>Privacy policy updates</h3>
                    <p>
                        We reserve the right to modify this privacy policy at
                        any time, so please review it frequently. Changes and
                        clarifications will take effect immediately upon their
                        posting on the website. If we make material changes to
                        this policy, we will notify you here that it has been
                        updated, so that you are aware of what information we
                        collect, how we use it, and under what circumstances, if
                        any, we use and/or disclose it.
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button "
                        class="btn btn-secondary btn-success"
                        data-dismiss="modal"
                    >
                        {{ $t("Close") }}
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

<style scoped>
#tandC {
    z-index: 88;
}
</style>
