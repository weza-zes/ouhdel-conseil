<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
    return locales.value;
});

const switchLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
};

const currentLocale = computed(() => {
    // Use first part of url path as locale because the variable is not reactive for some reason
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const firstPart = pathParts[0];

    const isValidLocale = availableLocales.value.some(
        (loc) => loc.code === firstPart,
    );

    return isValidLocale ? firstPart : "fr";
});
</script>

<template>
    <select
        :value="currentLocale"
        @change="switchLocale($event.target.value)"
        class="mr-5 p-4 bg-white hover:cursor-pointer"
    >
        <option
            v-for="availableLocale in availableLocales"
            :key="availableLocale.code"
            :value="availableLocale.code"
        >
            {{ availableLocale.name }}
        </option>
    </select>
</template>
