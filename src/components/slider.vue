<template>
    <!-- Make a div wrapped slider,set height and width -->
    <div class="slider" style="width:100%;auto;height:500px;">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem
                v-for="(item, index) in someList"
                :key="index"
                :style="item.style"
                >{{ item.html }}</slideritem
            >
            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>

<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
export default {
    el: "#app",
    data() {
        return {
            //data list [array]
            someList: [
                {
                    html: "The Garden",
                    style: {
                        backgroundImage: `url(${require("@/assets/gardenGreen.jpg")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    },
                },
                {
                    html: "Pastatafel",
                    style: {
                        background: `url(${require("@/assets/pasta.jpg")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    },
                },
                {
                    html: "Projects",
                    style: {
                        background: `url(${require("@/assets/gardencute.jpg")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    },
                },
            ],
            //Slider configuration [obj]
            options: {
                currentPage: 0,
                thresholdDistance: 500,
                thresholdTime: 100,
                autoplay: 3000,
                loop: true,
                direction: "horizontal",
                loopedSlides: 1,
                slidesToScroll: 1,
                speed: 1000,
            },
        };
    },
    components: {
        slider,
        slideritem,
    },
};
</script>
<style scoped></style>
