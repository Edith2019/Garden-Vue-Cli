<template>
    <div class="events-container">
        <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FVollguterGemeinschaftsgarten&tabs=events&width=300&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
            width="500"
            height="300"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
        ></iframe>
        <div class="textevents">
            <h1>Events</h1>
            <br />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "events",
    data() {
        return {};
    },
    props: {},
    created: function() {},

    mounted: function() {},
};
</script>

<style scoped>
.textevents {
    width: 300px;
}
.events-container {
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 5%;
    margin-right: 5%;
    background-color: #37bc61;
    height: 400px;
    margin-top: 200px;
    opacity: 93%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>
