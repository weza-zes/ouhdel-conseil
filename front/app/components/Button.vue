<template>
    <button
        @click="handleClick"
        class="px-4 py-2 bg-primary text-white hover:bg-white hover:text-primary shadow-[inset_0_0_0_2px_theme(colors.primary)] transition"
    >
        {{ text }}
    </button>
</template>
<script setup>
const props = defineProps({
    text: { type: String, required: true },
    onClick: { type: Function, required: false },
});

const handleClick = () => {
    if (props.onClick) {
        props.onClick();
    }
};
</script>
