<template>
    <Banner bannerSrc="/img/about/banner.jpg" />
    <div class="w-full flex justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none flex flex-col px-4 sm:px-6"
        >
            <h2 class="text-4xl text-primary mb-10 mt-10 sm:text-start">
                {{ $t("about.our_manifest") }}
            </h2>
            <div
                class="flex gap-4 flex-wrap sm:flex-nowrap h-3/4 justify-center sm:justify-start mb-10 sm:mb-16"
            >
                <Manifesto class="w-3/5 sm:w-2/5" />
                <div
                    class="flex flex-col gap-5 w-full sm:w-3/5 h-4/5 text-pretty lg:text-justify min-w-0"
                >
                    <p class="break-words">
                        <span class="text-primary">
                            {{ $t("about.manifest_description.1_param") }}
                        </span>
                        {{
                            $t("about.manifest_description.1").replace(
                                "{0}",
                                "",
                            )
                        }}
                    </p>
                    <p class="break-words">
                        {{ $t("about.manifest_description.2") }}
                    </p>
                    <p class="break-words">
                        {{ $t("about.manifest_description.3") }}
                    </p>
                    <p class="break-words">
                        {{ $t("about.manifest_description.4") }}
                    </p>
                    <p class="break-words">
                        {{ $t("about.manifest_description.5") }}
                    </p>
                </div>
            </div>
            <h2 class="text-4xl text-primary xl:mb-10 mb-6">
                {{ $t("about.who_are_we") }}
            </h2>
            <div
                class="mb-10 sm:mb-14 text-pretty text-justify flex flex-col gap-5 sm:mx-20"
            >
                <p class="break-words">
                    {{ $t("about.who_are_we_description.1") }}
                </p>
                <p class="break-words">
                    {{ $t("about.who_are_we_description.2") }}
                </p>
                <p class="break-words">
                    {{ $t("about.who_are_we_description.3") }}
                </p>
                <p class="break-words">
                    {{ $t("about.who_are_we_description.4") }}
                </p>
            </div>
            <h2 class="text-4xl text-primary xl:mb-10 mb-6">
                {{ $t("about.our_values") }}
            </h2>
            <div
                class="mb-10 sm:mb-14 text-pretty lg:text-justify flex flex-col gap-5 sm:mx-20"
            >
                <p class="break-words">
                    {{ $t("about.our_values_description.description") }}
                </p>
                <p class="break-words">
                    <span class="mr-2 text-primary text-2xl"
                        >{{
                            $t("about.our_values_description.values.1.title")
                        }} </span
                    >{{
                        $t("about.our_values_description.values.1.description")
                    }}
                </p>
                <p class="break-words">
                    <span class="mr-2 text-primary text-2xl"
                        >{{
                            $t("about.our_values_description.values.2.title")
                        }} </span
                    >{{
                        $t("about.our_values_description.values.2.description")
                    }}
                </p>
                <p class="break-words">
                    <span class="mr-2 text-primary text-2xl"
                        >{{
                            $t("about.our_values_description.values.3.title")
                        }} </span
                    >{{
                        $t("about.our_values_description.values.3.description")
                    }}
                </p>
                <p class="break-words">
                    <span class="mr-2 text-primary text-2xl"
                        >{{
                            $t("about.our_values_description.values.4.title")
                        }} </span
                    >{{
                        $t("about.our_values_description.values.4.description")
                    }}
                </p>
                <p class="break-words">
                    <span class="mr-2 text-primary text-2xl"
                        >{{
                            $t("about.our_values_description.values.5.title")
                        }} </span
                    >{{
                        $t("about.our_values_description.values.5.description")
                    }}
                </p>
            </div>
            <h2 class="text-4xl text-primary mb-2">
                {{ $t("about.want_to_know_more") }}
            </h2>
            <h3 class="text-xl text-primary mb-3">
                {{ $t("about.contact_us") }}
            </h3>
            <LazyIconsLinkedIn class="mb-5" />
            <div class="flex justify-center items-center">
                <Button
                    :text="$t('contact.contact')"
                    :onClick="goToContactPage"
                    class="mb-20"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.about"));

function goToContactPage() {
    goToPage("contact");
}
</script>
