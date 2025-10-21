<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
    navShow: {
        type: String,
        default: "",
    },
    flexDirection: {
        type: String,
        default: "",
    },
});

const { locale } = useI18n();
const selectedRouteClass = "bg-primary text-white";
const defaultNavClass = "";
const defaultNavElemClass = "p-5";

// Get the locale prefix for links
const getLocalizedPath = (path) => {
    // If locale is default (usually 'fr'), don't add prefix
    // Adjust this based on your i18n config
    if (locale.value === "fr") {
        return path;
    }
    return `/${locale.value}${path}`;
};

// Check if current route matches, accounting for locale
const isCurrentRoute = (path) => {
    const currentPath = route.path;
    const localizedPath = getLocalizedPath(path);
    return currentPath === localizedPath || currentPath === path;
};
</script>

<template>
    <nav
        :class="[
            props.navShow,
            'transition-all duration-300 ease-in-out transform',
        ]"
    >
        <ul
            :class="[
                'flex justify-between items-left lg:items-center',
                props.flexDirection || 'flex-col lg:flex-row',
            ]"
        >
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.welcome") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/about') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/about')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.about") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/international') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/international')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.international") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/enterprise') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/enterprise')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.enterprise") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    {
                        [selectedRouteClass]: isCurrentRoute(
                            '/technical-partners',
                        ),
                    },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/technical-partners')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.technical-partners") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/our-project') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/our-project')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.our-project") }}
                    </div>
                </NuxtLink>
            </li>
            <li
                :class="[
                    defaultNavClass,
                    { [selectedRouteClass]: isCurrentRoute('/contact') },
                ]"
            >
                <NuxtLink :to="getLocalizedPath('/contact')">
                    <div :class="defaultNavElemClass">
                        {{ $t("nav.contact") }}
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
