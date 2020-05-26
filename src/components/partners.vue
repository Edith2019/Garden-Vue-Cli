<template>
    <div>
        <div class="partners-container">
            <div class="partners-main">
                <h1>Our Partners...</h1>
                <div class="main-Logo">
                    <a
                        class="main-card"
                        href="http://daszuhause.com"
                        target="_blank"
                    >
                        <img src="@/assets/zuhause.jpg" />
                        <p>Zuhause e.V.</p>
                    </a>

                    <a
                        class="main-card"
                        href="https://www.infozentrale.berlin"
                        target="_blank"
                    >
                        <img src="@/assets/Infozentrale.jpg" />
                        <p>Infozentrale</p>
                    </a>

                    <a
                        class="main-card"
                        href="https://maryon.ch/stiftung/tochterunternehmen/terra-libra/herzlich-willkommen/"
                        target="_blank"
                    >
                        <img src="@/assets/Maryon.png" />
                        <p>Stiftung Edith Maryon</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="partners-friends">
            <h1>...our friends!</h1>
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
.partners-main {
    margin-top: 200px;
    height: 400px;
    background-color: white;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-right: 10%;
    margin-left: 10%;
}

/* .align-items {
    display: flex;
    flex-direction: column;
    align-items: center;
} */

.main-Logo {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

img {
    width: 150px;
    height: 150px;
    transition: transform 0.2s;
}

img:hover {
    transform: scale(1.3);
}

p {
    margin-top: 45px;
    color: black;
}

p:hover {
    color: #37bc61;
}
a {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.partners-friends {
    height: 200px;
    background-color: white;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 10%;
    margin-right: 10%;
    opacity: 93%;
    text-align: right;
}
</style>
