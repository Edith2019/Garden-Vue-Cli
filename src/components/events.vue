<template>
    <div class="events-container mx-auto">
        <div class="card">
            <div class="card-body">
                <h1>{{ $t("Events")}}</h1>
                <p>
                    {{ $t("EventDesc")}}
                </p>
            </div>
            <div class="container ">
                <div class="row ">
                    <div class="col-sm d-flex justify-content-center padding" id="calendar-event">
                        <calendar></calendar>
                    </div>
                    <div class="col-sm text-center">
                        <div
                            class="fb-page rounded border"
                            data-href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                            data-tabs="events"
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
.events-container {
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



@media only screen and (min-width: 1300px) {
.events-container {
       width: 70%;
    }

    .fb-page.rounded.border {
        width: 200px;
    }
}
</style>
