<template>
    <Banner bannerSrc="/img/international/banner.jpg" />
    <div class="w-full flex justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none px-4 sm:px-6"
        >
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex flex-col"
            >
                <h1 class="text-6xl text-primary mb-10">
                    {{ $t("international.our_mission") }}
                </h1>
                <h2 class="text-lg mb-5 ">
                    {{ $t("international.our_mission_description.1") }}
                </h2>
                <h2 class="text-xl text-primary ">
                    {{ $t("international.our_mission_description.2") }}
                </h2>
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <img
                    src="/img/international/01.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="01"
                />
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">01</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("international.missions.1.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("international.missions.1.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.1.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.1.items.3") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.1.items.4") }}
                        </li>
                        <li v-if="$t('international.missions.1.items.5')">
                            {{ $t("international.missions.1.items.5") }}
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">02</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("international.missions.2.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("international.missions.2.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.2.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.2.items.3") }}
                        </li>
                    </ul>
                </div>
                <img
                    src="/img/international/02.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="02"
                />
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <img
                    src="/img/international/03.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="03"
                />
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">03</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("international.missions.3.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("international.missions.3.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.3.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.3.items.3") }}
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">04</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("international.missions.4.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("international.missions.4.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.4.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("international.missions.4.items.3") }}
                        </li>
                    </ul>
                </div>
                <img
                    src="/img/international/04.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="04"
                />
            </div>
            <div
                class="py-10 lg:py-20 flex flex-col items-center justify-center"
            >
                <h2 class="text-primary text-6xl mb-8 text-center">
                    {{ $t("international.first_world_audit") }}
                </h2>
                <p class="w-2/3 mb-4 text-lg text-pretty sm:text-center">
                    {{ $t("international.first_world_audit_description.1") }}
                </p>
                <p class="w-2/3 text-primary text-lg mb-10 text-pretty sm:text-center">
                    {{ $t("international.first_world_audit_description.2") }}
                </p>
                <Button :text="$t('international.start')" :onClick="startAudit"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.international"));

function startAudit() {
    alert('WIP')
}
</script>
