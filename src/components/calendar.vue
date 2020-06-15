<template>
    <div id="calendar">
        <Calendar :attributes="attributes">
            <!-- <div slot="day-popover" slot-scope="{ day, dayTitle, attributes }">
                <div class="text-xs text-gray-300 font-semibold text-center">
                    {{ dayTitle }}
                </div> -->
            <!-- <PopoverRow
                v-for="attr in attributes"
                :key="attr.key"
                :attribute="attr"
            >
                {{ customData.description }}
            </PopoverRow> -->
            <!-- </div> -->
            <!-- <div slot="day-popover" slot-scope="{ format }">
                {{ format(dragValue ? dragValue.start : range.start, "MMM D") }}
                -
                {{ format(dragValue ? dragValue.end : range.end, "MMM D") }}
            </div> -->
        </Calendar>
    </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
// import PopoverRow from "v-calendar/lib/components/popover-row.umd.min";

export default {
    data() {
        const todos = [
            {
                description: "Take Noah to basketball practice.",
                isComplete: false,
                dates: { weekdays: 6 }, // Every Friday
                color: "green",
            },
        ];
        return {
            incId: todos.length,
            todos,
        };
    },
    computed: {
        attributes() {
            return [
                // Attributes for todos
                ...this.todos.map((todo) => ({
                    dates: todo.dates,
                    dot: {
                        color: todo.color,
                        class: todo.isComplete ? "opacity-75" : "",
                    },
                    popover: {
                        label: todo.description,
                        visibility: "hover",
                    },
                    customData: todo,
                })),
            ];
        },
    },

    components: {
        // DatePicker,
        // PopoverRow,
        Calendar,

        // computed: {
        //     selectDragAttribute() {
        //         return {
        //             popover: {
        //                 visibility: "hover",
        //                 isInteractive: false, // Defaults to true when using slot
        //             },
        //         };
        //     },
        // },
    },
};
</script>
<style scoped>
#calendar {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
}
</style>
