<template>
    <div
        class="mapInmapgarden"
        ref="map"
        v-bind:style="{ width: width, height: height }"
    >
        <div
            class="marker"
            ref="icon"
            v-bind:style="{ w: this.w, h: this.h }"
        ></div>
    </div>
</template>

<script>
export default {
    name: "mapgarden",
    data() {
        return {
            platform: {},
            map: {},
            geocoder: {},
        };
    },
    props: {
        appId: String,
        appCode: String,
        lat: String,
        lng: String,
        width: String,
        height: String,
        w: String,
        h: String,
        location: String,
    },
    created() {
        this.pixelRatio = window.devicePixelRatio || 1;
        console.log("pixelRatio", this.pixelRatio);
        window.addEventListener("resize", () =>
            this.platform.getViewPort().resize()
        );
        this.platform = new H.service.Platform({
            app_id: this.appId,
            app_code: this.appCode,
        });
    },
    mounted: function() {
        console.log(
            "this.platform.createDefaultLayers().normal",
            this.platform.createDefaultLayers().normal
        );
        this.map = new H.Map(
            this.$refs.map,
            this.platform.createDefaultLayers().normal.map,
            {
                zoom: 12,
                center: { lng: this.lng, lat: this.lat },
            }
        );
        console.log("this.map", this.map);

        this.icon = new H.map.Icon(`${require("@/assets/Logo.png")}`, {
            size: { w: this.w, h: this.h },
        });
        this.marker = new H.map.Marker(
            { lat: this.lat, lng: this.lng },
            { icon: this.icon }
        );
        this.map.addObject(this.marker);
        console.log("icon", this.icon);

        this.behavior = new H.mapevents.Behavior(
            new H.mapevents.MapEvents(this.map)
        );
        // this.map.addObject(this.map);
        this.ui = new H.ui.UI.createDefault(this.map, this.defaultLayers);
    },
};
</script>

<style scoped>
.mapInmapgarden {
    border: solid white 4px;
    width: 400px;
    height: 300px;
}
</style>
