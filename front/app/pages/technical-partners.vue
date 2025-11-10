<template>
    <div class="w-full flex justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none px-4 sm:px-6"
        >
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex flex-col"
            >
                <h1 class="text-6xl text-primary mb-10">
                    {{ $t("technical_partners.technical_partners") }}
                </h1>
                <h2 class="text-lg mb-5">
                    {{
                        $t(
                            "technical_partners.technical_partners_description.1",
                        )
                    }}
                </h2>
                <h2 class="text-lg mb-5 text-primary">
                    {{
                        $t(
                            "technical_partners.technical_partners_description.2",
                        )
                    }}
                </h2>
                <h2 class="text-lg mb-5 font-semibold">
                    {{
                        $t(
                            "technical_partners.technical_partners_description.3",
                        )
                    }}
                </h2>
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <img
                    src="/img/technical-partners/01.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="01"
                />
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">01</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("technical_partners.items.1.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("technical_partners.items.1.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.1.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.1.items.3") }}
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
                        {{ $t("technical_partners.items.2.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("technical_partners.items.2.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.2.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.2.items.3") }}
                        </li>
                    </ul>
                </div>
                <img
                    src="/img/technical-partners/02.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="02"
                />
            </div>
            <div
                class="px-10 py-10 lg:py-20 border-b-gray-200 border-b-2 flex gap-10"
            >
                <img
                    src="/img/technical-partners/03.jpg"
                    class="w-1/2 h-full hidden lg:block"
                    alt="03"
                />
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-primary text-3xl mb-2">03</h3>
                    <h3 class="text-primary text-2xl mb-5">
                        {{ $t("technical_partners.items.3.title") }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li class="mb-2">
                            {{ $t("technical_partners.items.3.items.1") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.3.items.2") }}
                        </li>
                        <li class="mb-2">
                            {{ $t("technical_partners.items.3.items.3") }}
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="py-10 lg:py-20 flex flex-col items-center justify-center"
            >
                <h2 class="text-primary text-6xl mb-8 text-center">
                    {{ $t("technical_partners.position") }}
                </h2>
                <p class="w-2/3 mb-4 text-lg text-pretty sm:text-center">
                    {{ $t("technical_partners.position_description.1") }}
                </p>
                <p
                    class="w-2/3 text-primary text-lg mb-10 text-pretty sm:text-center"
                >
                    {{ $t("technical_partners.position_description.2") }}
                </p>
                <p
                    class="w-2/3 text-primary text-lg mb-10 text-pretty sm:text-center"
                >
                    {{ $t("technical_partners.position_description.3") }}
                </p>
                <Button
                    :text="$t('technical_partners.start')"
                    :onClick="goToContactPage"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.technical-partners"));

function goToContactPage() {
    goToPage("contact");
}
</script>
