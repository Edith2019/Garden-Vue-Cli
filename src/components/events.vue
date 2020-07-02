<template>
    <div class="container-Events mx-auto">
        <div class="card">
            <div class="card-body">
                <h1>Events</h1>
                <p>
                    Every Saturday afternoon is Garden Day. We meet to garden,
                    fix, built and hung out together.
                </p>
            </div>
            <div class="container ">
                <div class="row">
                    <div class="col-sm padding">
                        <calendar></calendar>
                    </div>
                    <div class="col-sm d-flex align-items-center ">
                        <div
                            class="fb-page "
                            data-href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                            data-tabs="Events"
                            data-width=""
                            data-height=""
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true"
                        >
                            <blockquote
                                cite="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                                class="fb-xfbml-parse-ignore"
                            >
                                <a
                                    href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                                    >Vollguter Gemeinschaftsgarten</a
                                >
                            </blockquote>
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

.card {
    padding-bottom: 50px;
}

.padding {
    padding-bottom: 20px;
}
</style>
