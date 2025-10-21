<template>
    <Banner bannerSrc="/img/enterprise/banner.jpg" />
    <div class="w-full flex justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none px-4 sm:px-6"
        >
            <h1 class="text-4xl sm:text-6xl text-primary my-10">
                {{ $t("enterprise.enterprise") }}
            </h1>
            <h2 class="text-lg mb-5">
                {{ $t("enterprise.enterprise_description.1") }}
            </h2>
            <h2 class="text-lg mb-5 text-primary">
                {{ $t("enterprise.enterprise_description.2") }}
            </h2>
            <h2 class="text-lg mb-12 lg:mb-28 font-semibold">
                {{ $t("enterprise.enterprise_description.3") }}
            </h2>
            <div
                class="flex flex-wrap lg:flex-nowrap lg:flex-row gap-16 lg:gap-32"
            >
                <div class="lg:w-2/5">
                    <div class="lg:sticky lg:top-20 text-pretty">
                        <h2 class="text-primary text-5xl mb-2">
                            {{ $t("enterprise.sticky.titles.1") }}
                        </h2>
                        <h2 class="text-primary text-5xl mb-2">
                            {{ $t("enterprise.sticky.titles.2") }}
                        </h2>
                        <h2 class="text-primary text-5xl mb-8">
                            {{ $t("enterprise.sticky.titles.3") }}
                        </h2>
                        <p class="mb-4">
                            {{ $t("enterprise.sticky.description.1") }}
                        </p>
                        <p
                            class="mb-4"
                            v-if="$t('enterprise.sticky.description.2')"
                        >
                            {{ $t("enterprise.sticky.description.2") }}
                        </p>
                        <Manifesto />
                    </div>
                </div>
                <div class="lg:w-3/5 h-full text-pretty">
                    <div class="w-full mb-16">
                        <h3 class="text-primary text-2xl mb-4">
                            {{ $t("enterprise.implantation") }}
                        </h3>
                        <ul class="list-disc list-inside mb-6">
                            <li>{{ $t("enterprise.implantation_items.1") }}</li>
                            <li>{{ $t("enterprise.implantation_items.2") }}</li>
                            <li>{{ $t("enterprise.implantation_items.3") }}</li>
                            <li>{{ $t("enterprise.implantation_items.4") }}</li>
                        </ul>
                        <img
                            src="/img/enterprise/01.jpg"
                            alt=""
                            class="w-full h-48 object-cover"
                        />
                    </div>
                    <div class="w-full mb-16">
                        <h3 class="text-primary text-2xl mb-4">
                            {{ $t("enterprise.dialog") }}
                        </h3>
                        <ul class="list-disc list-inside mb-6">
                            <li>{{ $t("enterprise.dialog_items.1") }}</li>
                            <li>{{ $t("enterprise.dialog_items.2") }}</li>
                            <li>{{ $t("enterprise.dialog_items.3") }}</li>
                            <li>{{ $t("enterprise.dialog_items.4") }}</li>
                        </ul>
                        <img
                            src="/img/enterprise/02.jpg"
                            alt=""
                            class="w-full h-48 object-cover"
                        />
                    </div>
                    <div class="w-full mb-16">
                        <h3 class="text-primary text-2xl mb-4">
                            {{ $t("enterprise.financing") }}
                        </h3>
                        <ul class="list-disc list-inside mb-6">
                            <li>{{ $t("enterprise.financing_items.1") }}</li>
                            <li>{{ $t("enterprise.financing_items.2") }}</li>
                            <li>{{ $t("enterprise.financing_items.3") }}</li>
                            <li>{{ $t("enterprise.financing_items.4") }}</li>
                        </ul>
                        <img
                            src="/img/enterprise/03.jpg"
                            alt=""
                            class="w-full h-48 object-cover"
                        />
                    </div>
                    <div class="w-full mb-16">
                        <h3 class="text-primary text-2xl mb-4">
                            {{ $t("enterprise.expertise") }}
                        </h3>
                        <ul class="list-disc list-inside mb-6">
                            <li>{{ $t("enterprise.expertise_items.1") }}</li>
                            <li>{{ $t("enterprise.expertise_items.2") }}</li>
                            <li>{{ $t("enterprise.expertise_items.3") }}</li>
                            <li>{{ $t("enterprise.expertise_items.4") }}</li>
                        </ul>
                        <img
                            src="/img/enterprise/04.jpg"
                            alt=""
                            class="w-full h-48 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div
                class="my-10 lg:my-32 flex flex-col items-center justify-center"
            >
                <h2 class="text-primary text-6xl mb-8 text-center">
                    {{ $t("enterprise.meeting") }}
                </h2>
                <p class="w-2/3 mb-4 text-lg text-pretty sm:text-center">
                    {{ $t("enterprise.meeting_description.1") }}
                </p>
                <p
                    class="w-2/3 text-primary text-lg mb-10 text-pretty sm:text-center"
                >
                    {{ $t("enterprise.meeting_description.2") }}
                </p>
                <Button
                    :text="$t('enterprise.start')"
                    :onClick="startAudit"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.enterprise"));
</script>
