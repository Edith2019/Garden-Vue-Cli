<template>
    <div>
        <div class="social-media">
            <img
                class="fb-social"
                src="@/assets/instaproute.png"
                width="30px"
                height="30px"
            />
            <a
                href="https://www.facebook.com/VollguterGemeinschaftsgarten/"
                target="_blank"
            >
                <img
                    class="fb-social"
                    src="@/assets/fproute.png"
                    width="30px"
                    height="30px"
                />
            </a>
        </div>
        <intro />
    </div>
</template>

<script>
import intro from "./intro";
export default {
    components: {
        intro,
    },
};
</script>
