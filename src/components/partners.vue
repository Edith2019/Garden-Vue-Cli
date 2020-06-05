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
                    src="../assets/zuhause.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <a href="http://daszuhause.com" target="_blank">
                        <h5 class="card-title">Zuhause e.V.</h5>
                    </a>
                    <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                    <p class="card-text">
                        <small class="text-muted"
                            >Last updated 3 mins ago</small
                        >
                    </p>
                </div>
            </div>
            <div id="hover" class="card">
                <img
                    src="../assets/Infozentrale.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <a href="https://www.infozentrale.berlin" target="_blank">
                        <h5 class="card-title">Infozentrale</h5>
                    </a>
                    <p class="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                    </p>
                    <p class="card-text">
                        <small class="text-muted"
                            >Last updated 3 mins ago</small
                        >
                    </p>
                </div>
            </div>
            <div id="hover" class="card">
                <img
                    src="../assets/Maryon.png"
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
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </p>
                    <p class="card-text">
                        <small class="text-muted"
                            >Last updated 3 mins ago</small
                        >
                    </p>
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
                    <div class="card-header">Header</div>
                    <div class="card-body text-success">
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
                    <div class="card-header">Header</div>
                    <div class="card-body text-success">
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
                    <div class="card-header">Header</div>
                    <div class="card-body text-success">
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
</style>
