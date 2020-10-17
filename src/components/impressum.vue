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
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body"></div>
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

<style scoped></style>

// Name of the owner(often a business or organization) // The registered address
of the owner(cannot be a PO box) // Valid contact information(email address,
office number, phone number, fax, etc.) // Name of supervising authority //
Individual legal representative(owner or manager of the business) // VAT or any
equivalent state - issued number // License numbers or trade registry numbers
