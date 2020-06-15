<template>
    <div id="calendar">
        <DatePicker
            mode="range"
            v-model="range"
            :select-attribute="selectDragAttribute"
            :drag-attribute="selectDragAttribute"
            is-inline
            @drag="dragValue = $event"
        >
            <div slot="day-popover" slot-scope="{ format }">
                {{ format(dragValue ? dragValue.start : range.start, "MMM D") }}
                -
                {{ format(dragValue ? dragValue.end : range.end, "MMM D") }}
            </div>
            <!-- <Calendar> </Calendar> -->
        </DatePicker>
    </div>
</template>

<script>
// import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
    data() {
        return {
            dragValue: null,
            range: {
                start: new Date(2018, 0, 8),
                end: new Date(2018, 0, 12),
            },
        };
    },
    components: {
        // Calendar,
        DatePicker,
    },
    computed: {
        selectDragAttribute() {
            return {
                popover: {
                    visibility: "hover",
                    isInteractive: false, // Defaults to true when using slot
                },
            };
        },
    },
};
</script>
