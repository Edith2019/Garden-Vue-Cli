<template>
    <div class="googlemap-container">
        <iframe
            width="100%"
            height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Werbellinstr.%2050%20Neuk%C3%B6lln%2C%20Berlin%2C%20Germany&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    props: {},
};
</script>
