<template>
    <img
        :src="bannerSrc"
        alt=""
        class="w-full h-80 object-cover object-center"
    />
</template>

<script setup>
const props = defineProps({
    bannerSrc: { type: String, required: true },
});
</script>
