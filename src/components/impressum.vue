<template>
    <div
        class="modal fade"
        id="impressum"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Impressum
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
                    <h5 class="modal-title mt-3">Address</h5>
                    <p>
                        Vollguter Gemeinschaftsgarten Am Sudhaus 4, 12053 Berlin
                    </p>
                    <h5 class="modal-title mt-3">Imprint</h5>
                    <p className="mb-2">
                        Vollguter Gemeinschaftsgarten is a community garden
                        brought to life by a group of Berlin-based volunteers.
                        All content on this website was sourced or created by
                        volunteers from the VGG community. We are not currently
                        registered as a legal entity, company, or organisation.
                        Hence, VGG does accept any liability for content
                        published on our site. If you have any questions or
                        concerns, please send an email to garten@daszuhause.com
                        so we can manage your request.
                    </p>
                    <h5 class="modal-title mt-3">Contact</h5>
                    <p>www.vgg.green</p>
                    <p>garten@daszuhause.com</p>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "impressum",
};
</script>

<style scoped>
#impressum {
    cursor: pointer;
}
</style>
