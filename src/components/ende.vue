<template>    
        <div class="ende">
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </button>
        </div>
        
</template>

<script>
import i18n from '../plugin/i18n';
export default {
name:"languages",
data() {
            return {
                languages: [
                    { flag: 'us', language: 'en', title: 'English' },
                    { flag: 'de', language: 'de', title: 'Deutsch' },
                    { flag: 'tr', language: 'tr', title: 'Türk' },
                    { flag: 'ar', language: 'ar', title: 'عربى' },
                ]
            };
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
}
</script>

<style>

.ende {
 position: absolute;
border: solid 5px green;


}

button {
    border: none;
    background: none;
    margin-left: 50px;
    padding-top: 8px;


}

@media only screen and (max-width: 400px) {
.ende {
    max-width: 300px;

}
button {
        padding-left: 0px;
padding-right: 20px;
margin-left: 0px;
}

}
</style>