<template>
    <Calendar :attributes="attributes"> </Calendar>
</template>
<script>
import Calendar from "v-calendar/lib/components/calendar.umd";

export default {
    data() {
        const todos = [
            {
                description: "Saturday afternoon is our usual garden day!",
                isComplete: false,
                dates: { weekdays: 7 }, // Every Friday
                color: "green"
            }
        ];
        return {
            incId: todos.length,
            todos
        };
    },
    computed: {
        attributes() {
            return [
                ...this.todos.map((todo) => ({
                    dates: todo.dates,
                    dot: {
                        color: todo.color,
                        class: todo.isComplete ? "opacity-75" : ""
                    },
                    popover: {
                        label: todo.description,
                        visibility: "hover"
                    },
                    customData: todo
                }))
            ];
        }
    },

    components: {
        Calendar
    }
};
</script>

