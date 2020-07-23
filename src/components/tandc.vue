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
                        {{ $t("TermsAndConditions")}}
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
                    {{ $t("tandcDesc1")}}

                    </p>
                    <h2>{{ $t("AboutCookies")}}</h2>
                    <p>
                       {{ $t("tandcDesc2")}}
                    </p>

                    <h2>{{ $t("CookiesWebsite")}}</h2>
                    <p>
                       {{ $t("tandcDesc3")}}
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        {{ $t("Close")}}
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
