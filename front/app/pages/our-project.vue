<template>
    <Banner bannerSrc="/img/our-project/banner.jpg" />
    <div class="w-full flex justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none px-4 sm:px-6"
        >
            <div class="mb-20">
                <h1 class="text-4xl sm:text-6xl text-primary my-10">
                    {{ $t("our_project.our_project") }}
                </h1>
                <p class="text-lg mb-5">
                    {{ $t("our_project.our_project_description.1") }}
                </p>
                <p class="text-lg mb-5 font-semibold">
                    {{ $t("our_project.our_project_description.2") }}
                </p>
                <p class="text-lg mb-5 font-semibold">
                    {{ $t("our_project.our_project_description.3") }}
                </p>
                <p
                    v-if="$t('our_project.our_project_description.4')"
                    class="text-lg mb-5 font-semibold"
                >
                    {{ $t("our_project.our_project_description.4") }}
                </p>
                <div class="flex justify-center items-center w-full">
                    <Button
                        v-if="$t('our_project.our_project_description.link')"
                        :text="$t('our_project.our_project_description.link')"
                    ></Button>
                </div>
            </div>
            <div
                class="sm:grid grid-flow-row lg:grid-cols-2 lg:grid-rows-2 grid-rows-3 grid-cols-1 gap-10"
            >
                <div class="mb-10 sm:mb-0">
                    <img
                        src="/img/our-project/01.jpg"
                        class="mb-6 hidden lg:block"
                        alt=""
                    />
                    <h2 class="text-primary text-xl mb-6">
                        {{ $t("our_project.structuring") }}
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            {{ $t("our_project.structuring_items.1") }}
                        </li>
                        <li>
                            {{ $t("our_project.structuring_items.2") }}
                        </li>
                        <li>
                            {{ $t("our_project.structuring_items.3") }}
                        </li>
                    </ul>
                </div>
                <div class="mb-10 sm:mb-0">
                    <img
                        src="/img/our-project/02.jpg"
                        class="mb-6 hidden lg:block"
                        alt=""
                    />
                    <h2 class="text-primary text-xl mb-6">
                        {{ $t("our_project.financing") }}
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            {{ $t("our_project.financing_items.1") }}
                        </li>
                        <li>
                            {{ $t("our_project.financing_items.2") }}
                        </li>
                        <li>
                            {{ $t("our_project.financing_items.3") }}
                        </li>
                    </ul>
                </div>
                <div class="mb-10 sm:mb-0">
                    <img
                        src="/img/our-project/03.jpg"
                        class="mb-6 hidden lg:block"
                        alt=""
                    />
                    <h2 class="text-primary text-xl mb-6">
                        {{ $t("our_project.operations") }}
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            {{ $t("our_project.operations_items.1") }}
                        </li>
                        <li>
                            {{ $t("our_project.operations_items.2") }}
                        </li>
                        <li>
                            {{ $t("our_project.operations_items.3") }}
                        </li>
                    </ul>
                </div>
                <div class="mb-10 sm:mb-0">
                    <img
                        src="/img/our-project/04.jpg"
                        class="mb-6 hidden lg:block"
                        alt=""
                    />
                    <h2 class="text-primary text-xl mb-6">
                        {{ $t("our_project.enterprise") }}
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            {{ $t("our_project.enterprise_items.1") }}
                        </li>
                        <li>
                            {{ $t("our_project.enterprise_items.2") }}
                        </li>
                        <li>
                            {{ $t("our_project.enterprise_items.3") }}
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="my-20 lg:my-32 flex flex-col items-center justify-center"
            >
                <h2 class="text-primary text-5xl sm:text-6xl mb-8 text-center">
                    {{ $t("our_project.start_smart") }}
                </h2>
                <p class="w-2/3 mb-4 text-lg text-pretty sm:text-center">
                    {{ $t("our_project.start_smart_description.1") }}
                </p>
                <p
                    class="w-2/3 text-primary text-lg mb-10 text-pretty sm:text-center"
                >
                    {{ $t("our_project.start_smart_description.2") }}
                </p>
                <Button
                    :text="$t('our_project.start')"
                    :onClick="startAudit"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.our-project"));
</script>
