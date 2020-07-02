<template>
    <div class="container-Events mx-auto">
        <div class="card ">
            <div class="card-body">
                <h1>Events</h1>
                <p>
                    Every Saturday afternoon is Garden Day. We meet to garden,
                    fix, built and hung out together.
                </p>
            </div>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-md-auto mx-auto ">
                        <calendar></calendar>
                    </div>
                    <div class="col col-md-auto mx-auto ">
                        <div class="calendarBOx ">
                            -->
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVollguterGemeinschaftsgarten%2F&tabs=Events&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=202851787539015"
                                width="340"
                                height="214"
                                style="border:none;overflow:hidden"
                                scrolling="no"
                                frameborder="0"
                                allowTransparency="true"
                                allow="encrypted-media"
                                class="embed-responsive-item"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import calendar from "./calendar.vue";
export default {
    name: "events",
    data() {
        return {
            mode: "single",
            selectedDate: null,
            date: new Date(),
        };
    },
    props: {
        value: {},
    },
    components: {
        calendar,
    },
    created: function() {},

    mounted: function() {
        console.log("data", this.data);
    },
};
</script>

<style scoped>
.container-Events {
    height: auto;
    width: 90%;
    margin-top: 200px;

    padding-top: 100px;
}
.row.justify-content-md-center {
    padding-top: 30px;
    align-items: center;
    padding-bottom: 40px;
}
</style>
