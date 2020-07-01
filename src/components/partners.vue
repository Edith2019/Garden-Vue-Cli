<template>
    <div>
        <div class="card Partner">
            <div class="card-body">
                <h1 class="card-title">Partners</h1>
                <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                </p>
            </div>
        </div>
        <div class="card-deck rounded border">
            <div id="hover" class="card">
                <img
                    src="../assets/zuhause-min.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <a href="http://daszuhause.com" target="_blank">
                        <h5 class="card-title">Zuhause e.V.</h5>
                    </a>
                    <p class="card-text">
                        Zuhause- Zuhause e.V. ist ein vielfältiges
                        Künstler*innen Kollektiv. Der Vollguter
                        Gemeinschaftsgarten wurde erst durch den Zuhause e.V.
                        initiert.
                    </p>
                    <p class="card-text"></p>
                </div>
            </div>
            <div id="hover" class="card">
                <img
                    src="../assets/Infozentrale-min.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <a href="https://www.infozentrale.berlin" target="_blank">
                        <h5 class="card-title">Infozentrale</h5>
                    </a>
                    <p class="card-text">
                        Infozentrale- Die Infozentrale auf dem Vollgut wurde als
                        DesignBuild Projekt des Natural Building Labs von 36
                        ArchitekturstudentInnen geplant und befindet sich in der
                        Mitte von Vollguter Gemeinschaftsgarten.
                    </p>
                    <p class="card-text"></p>
                </div>
            </div>
            <div id="hover" class="card">
                <img
                    src="../assets/Maryon-min.png"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <a
                        class="main-card"
                        href="https://maryon.ch/stiftung/tochterunternehmen/terra-libra/herzlich-willkommen/"
                        target="_blank"
                    >
                        <h5 class="card-title">Stiftung Edith Maryon</h5>
                    </a>
                    <p class="card-text">
                        Edyth Marion- Die Stiftung Edith Maryon entzieht
                        Grundstücke der Spekulation, damit sie dauerhaft
                        sozialverträglich nutzen können. das VGG ....
                    </p>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
        <div class="card Partner ">
            <div class="card-body">
                <h1 class="card-title">Friends</h1>
                <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                </p>
            </div>
        </div>
        <div class="row rounded border ">
            <div class="col-sm">
                <div class="card border-success mb-5" style="max-width: 18rem;">
                    <div class="card-header text-success">Header</div>
                    <div class="card-body ">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card border-success mb-5" style="max-width: 18rem;">
                    <div class="card-header text-success">Header</div>
                    <div class="card-body ">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card border-success mb-5" style="max-width: 18rem;">
                    <div class="card-header text-success">Header</div>
                    <div class="card-body ">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "partners",
    props: {},
};
</script>

<style scoped>
.Partner {
    height: auto;
    width: 90%;
    margin: 200px auto;
    margin-bottom: -5px;
}
#hover {
    transition: all 0.2s ease-in-out;
}
#hover:hover {
    transform: scale(1.1);
}
.card-deck {
    margin-left: 5%;
    margin-right: 5%;
    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}

.row {
    margin-left: 5%;
    margin-right: 5%;
    background-color: none;
    padding-top: 5%;
    padding-bottom: 5%;
}

.col-sm {
    margin-left: 3%;
    margin-right: 3%;
}

.card-deck.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}
.row.rounded.border {
    background-color: rgba(255, 255, 255, 0.9);
}
</style>
