<template>
    <div class="ende">
        <button
            v-for="entry in languages"
            :key="entry.title"
            @click="changeLocale(entry.language)"
        >
            <flag
                :iso="entry.flag"
                v-bind:squared="false"
                v-if="entry.languages"
                :folder="entry"
            />
            {{ entry.title }}
        </button>
    </div>
</template>

<script>
import i18n from "../plugin/i18n";
export default {
    name: "languages",
    data() {
        return {
            languages: [
                { flag: "us", language: "en", title: "English" },
                { flag: "de", language: "de", title: "Deutsch" },
                { flag: "tr", language: "tr", title: "Türkçe" },
                // { flag: "ar", language: "ar", title: "عربى" },
                { flag: "jp", language: "jp", title: "日本語" },
            ],
        };
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        },
    },
};
</script>

<style>
.ende {
    position: relative;
    margin-right: 50px;
}
button {
    border: none;
    background: none;
    padding-top: 8px;
}

@media only screen and (max-width: 800px) {
    .ende {
        max-width: 300px;
        margin-bottom: 50px;
    }
    button {
        padding-left: 0px;
        padding-right: 20px;
        margin-left: 0px;
    }
}
</style>
