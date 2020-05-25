<template>
    <div>
        <div class="partners-container">
            <div class="partners-main">
                <h1>Our main Partners!</h1>
            </div>
            <div class="partners-friends">
                <h1>Our friends!</h1>
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
.partners-main {
    margin-top: 200px;
    height: 300px;
    background-color: white;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    margin-right: 10%;
    margin-left: 10%;
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
