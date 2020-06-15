<template>
    <div class="card events-container">
        <div class="card-body">
            <h1>Events</h1>
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
        <!-- <calendar></calendar> -->
        <div class="calendarBOx">
            <div
                class="fb-page"
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
</template>

<script>
// import calendar from "v-calendar/lib/components/calendar.umd";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
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
    margin: 200px auto;
}
</style>
