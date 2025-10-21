<script setup>
import { ref } from "vue";

const mobileNavOpen = useState("mobileNavOpen", () => false);
const route = useRoute();

watch(
    () => route.fullPath,
    () => {
        mobileNavOpen.value = false;
    },
);

function toggleMobileNav() {
    mobileNavOpen.value = !mobileNavOpen.value;
}
</script>

<template>
    <div class="flex flex-col fixed bg-white w-full z-50 shadow-lg">
        <div class="flex flex-row justify-between items-center">
            <div
                class="lg:hidden ml-5 hover:cursor-pointer"
                @click="toggleMobileNav"
            >
                <img
                    :src="[
                        mobileNavOpen
                            ? '/img/navicon-close.svg'
                            : '/img/navicon-hamburger.svg',
                    ]"
                    src="/img/navicon-hamburger.svg"
                    alt="Show Nav"
                    class="w-10 h-10"
                />
            </div>

            <img
                class="ml-5"
                src="/img/logo.png"
                alt="Ouhdel Conseil"
                width="150"
                height="60"
            />

            <Nav nav-show="hidden lg:block" />

            <LanguageSwitcher />
        </div>

        <Nav :nav-show="[mobileNavOpen ? 'block' : 'hidden', 'lg:hidden']" />
    </div>
</template>
