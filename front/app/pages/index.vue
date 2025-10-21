<template>
    <div
        class="w-full grid grid-flow-row lg:grid-cols-2 lg:grid-rows-2 grid-rows-3 grid-cols-1"
    >
        <div class="w-full xl:min-h-[55vh] flex justify-center items-center">
            <div
                class="flex flex-col gap-10 justify-center items-left sm:w-1/2 sm:h-1/2 w-2/3 h-2/3"
            >
                <h1 class="text-2xl text-gray-600">OUHDEL Conseil</h1>
                <div>
                    <h2 class="text-primary text-3xl sm:text-4xl">
                        {{ $t("home.catchphrase") }}
                    </h2>
                </div>
                <Button :text="$t('home.start')" :onClick="goToAbout" />
            </div>
        </div>
        <div
            class="hidden lg:block xl:min-h-[55vh]"
            style="background-image: url(/img/home/home-1.jpg)"
        ></div>
        <div
            class="w-full xl:min-h-[55vh] bg-cover bg-center flex items-start justify-start"
            style="background-image: url(/img/home/home-2.jpg)"
        >
            <h2 class="text-white text-5xl mt-20 mx-auto w-80">
                {{ $t("home.partners") }}
            </h2>
        </div>
        <div class="w-full xl:min-h-[55vh]">
            <div class="flex flex-col gap-5 m-10 text-base">
                <h2 class="text-primary text-3xl">{{ $t("home.why_us") }}</h2>
                <p>{{ $t("home.why_us_text.1") }}</p>
                <p>{{ $t("home.why_us_text.2") }}</p>
                <p>{{ $t("home.why_us_text.3") }}</p>
                <p>{{ $t("home.why_us_text.4") }}</p>
                <p>{{ $t("home.why_us_text.5") }}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-8 mt-16 justify-center items-center">
        <h2 class="mx-10 lg:text-center text-primary text-5xl">
            {{ $t("home.work_together") }}
        </h2>
        <h3 class="sm:text-xl text-lg md:w-2/3 mx-10 text-center">
            {{ $t("home.work_together_text") }}
        </h3>
        <h3 class="sm:text-xl text-lg md:w-2/3 mx-10 text-center">
            {{ $t("home.work_together_click_below") }}
        </h3>
    </div>
    <section class="flex justify-center items-center my-20">
        <div
            class="flex flex-row justify-evenly flex-wrap w-full xl:w-3/4 gap-4"
        >
            <NuxtLink
                :class="defaultShowcaseElementClasses.container"
                to="/international"
            >
                <img
                    class="object-cover w-32 h-32 rounded-full shadow-lg"
                    src="/img/home/territorial.jpg"
                    alt=""
                />
                <h3 class="text-xl text-primary text-center">
                    {{ $t("home.showcase_international.title") }}
                </h3>
                <p>{{ $t("home.showcase_international.question") }}</p>
                <p class="font-bold">
                    {{ $t("home.showcase_international.answer") }}
                </p>
            </NuxtLink>
            <NuxtLink
                :class="defaultShowcaseElementClasses.container"
                to="/enterprise"
            >
                <img
                    class="object-cover w-32 h-32 rounded-full shadow-lg"
                    src="/img/home/enterprise.jpg"
                    alt=""
                />
                <h3 class="text-xl text-primary text-center">
                    {{ $t("home.showcase_enterprise.title") }}
                </h3>
                <p>{{ $t("home.showcase_enterprise.question") }}</p>
                <p class="font-bold">
                    {{ $t("home.showcase_enterprise.answer") }}
                </p>
            </NuxtLink>
            <NuxtLink
                :class="defaultShowcaseElementClasses.container"
                to="/technical-partners"
            >
                <img
                    class="object-cover w-32 h-32 rounded-full shadow-lg"
                    src="/img/home/international.jpg"
                    alt=""
                />
                <h3 class="text-xl text-primary text-center">
                    {{ $t("home.showcase_partners.title") }}
                </h3>
                <p>{{ $t("home.showcase_partners.question") }}</p>
                <p class="font-bold">
                    {{ $t("home.showcase_partners.answer") }}
                </p>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.welcome"));

const goToAbout = () => {
    goToPage("/about");
};

const defaultShowcaseElementClasses = {
    container:
        "shadow-lg w-3/4 lg:basis-1/4 rounded-xl flex flex-col justify-around gap-5 items-center p-10 hover:scale-105 transition-transform duration-100",
};
</script>
