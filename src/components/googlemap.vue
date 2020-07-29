<template>
    <div class="googlemap-container">
        <iframe
            width="100%"
            height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Am%20Sudhaus%204%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
        ></iframe>
    </div>
</template>

<script>
export default {
    name: "googlemap",
    data() {
        return {};
    },
    props: {}
};
</script>
