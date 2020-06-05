<template>
    <div>
        <div class="card WhatWeDo-container">
            <div class="card-body">
                <h1 class="card-title">What we do ?</h1>
                <p class="card-text"></p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <br />
                <br />
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card">
                    <img
                        src="../assets/pasta.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img
                        src="../assets/House.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img
                        src="../assets/gardenGreen.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img
                        src="../assets/House.jpg"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whatwedo",
    props: {},
};
</script>

<style scoped>
.WhatWeDo-container {
    height: 300px;
    width: 90%;
    margin: 200px auto;
    margin-bottom: 0px;
}

.row.row-cols-1.row-cols-md-2 {
    padding: 5%;
    padding-top: 25px;
    margin-top: 0px;
}
</style>
