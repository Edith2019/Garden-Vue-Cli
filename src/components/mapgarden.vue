<template>
    <div
        class="mapInmapgarden"
        ref="map"
        v-bind:style="{ width: width, height: height }"
    >
        <div
            class="marker"
            ref="icon"
            v-bind:style="{ icon: icon }"
            width="40px"
            height="40px"
        ></div>
    </div>
</template>

<script>
export default {
    name: "mapgarden",
    data() {
        return {
            map: {},
            platform: {},
        };
    },
    props: {
        appId: String,
        appCode: String,
        lat: String,
        lng: String,
        width: String,
        height: String,
    },
    created() {
        this.platform = new H.service.Platform({
            app_id: this.appId,
            app_code: this.appCode,
        });
        console.log("platform", this.platform);
    },
    mounted() {
        this.map = new H.Map(
            this.$refs.map,
            this.platform.createDefaultLayers().normal.map,
            {
                zoom: 15,
                center: { lng: this.lng, lat: this.lat },
            }
        );

        this.icon = new H.map.Icon(`${require("@/assets/Logo.png")}`, {
            size: { w: 40, h: 40 },
        });
        this.marker = new H.map.Marker(
            { lat: 52.479657, lng: 13.43189 },
            { icon: this.icon }
        );
        this.map.addObject(this.marker);
        console.log("icon", this.icon);
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
