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
        <div class="calendarBOx">
            <iframe
                class="mx-auto"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVollguterGemeinschaftsgarten%2F&tabs=events&width=200&height=400&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="600"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
            <calendar></calendar>
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

    mounted: function() {},
};
</script>

<style scoped>
.events-container {
    height: auto;
    width: 90%;
    margin: 200px auto;
    border: solid black 3px;
}

/* .calendarborder {
    border: solid red 4px;
    width: 300px;
}
.calendar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.calendarBOx {
    width: auto;
    height: auto; */
/* } */
</style>
