<template>
    <a
        href="/pdf/manifesto.pdf"
        target="_blank"
        class="flex flex-col items-center"
    >
        <img
            src="/img/about/plaquette.png"
            class="w-64 h-96"
            alt="Notre plaquette"
        />
        <p
            class="flex justify-center text-primary underline italic mt-4 mb-10 sm:mb-0"
        >
            {{ t("about.download_our_brochure") }}
        </p>
    </a>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
