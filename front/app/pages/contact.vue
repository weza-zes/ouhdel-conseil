<template>
    <Banner bannerSrc="/img/contact/banner.jpg" />
    <div class="w-full flex flex-col justify-center">
        <div
            class="container xl:mx-auto xl:w-4/5 2xl:w-3/5 xl:max-w-none px-4 sm:px-6"
        >
            <h1 class="text-4xl sm:text-6xl text-primary my-10">
                {{ $t("contact.contact") }}
            </h1>
            <p class="text-lg mb-5 text-justify text-pretty">
                {{ $t("contact.contact_description.1") }}
            </p>
            <h2 class="text-xl mb-10 text-primary font-bold">
                {{ $t("contact.contact_description.2") }}
            </h2>
            <div
                class="flex flex-col lg:flex-row items-start flex-wrap lg:flex-nowrap mb-10"
            >
                <p class="mb-2 lg:pr-5 lg:border-r-2 lg:border-r-primary">
                    <a
                        href="https://www.google.fr/maps/place/OUHDEL+CONSEIL/@48.8506404,2.3702892,17z/data=!4m6!3m5!1s0x47e6737edcb2bbbf:0xa8c0519132aeb6b4!8m2!3d48.8505216!4d2.3700905!16s%2Fg%2F11yk1rgtz5?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                        class="underline text-primary"
                    >
                        61 rue de Lyon, 75012 Paris, France
                    </a>
                </p>
                <p class="mb-2 lg:px-5 lg:border-r-2 lg:border-r-primary">
                    <a
                        href="mailto:sas.ouhdel@gmail.com"
                        class="underline text-primary"
                    >
                        sas.ouhdel@gmail.com</a
                    >
                </p>
                <p class="mb-2 lg:pl-5">
                    <a href="tel:+33778465007" class="underline text-primary">
                        07 78 46 50 07</a
                    >
                </p>
            </div>
            <h2 class="text-xl mb-6 text-primary font-bold">
                {{ $t("contact.opening_hours") }}
            </h2>
            <div class="flex gap-10 mb-10">
                <div class="flex flex-col">
                    <p class="mb-4">
                        {{ $t("contact.opening_hours_items.1.period") }}
                    </p>
                    <p class="mb-4">
                        {{ $t("contact.opening_hours_items.2.period") }}
                    </p>
                    <p class="mb-4">
                        {{ $t("contact.opening_hours_items.3.period") }}
                    </p>
                </div>
                <div class="flex flex-col">
                    <p class="mb-4 text-primary font-semibold">
                        {{ $t("contact.opening_hours_items.1.time") }}
                    </p>
                    <p class="mb-4 text-primary font-semibold">
                        {{ $t("contact.opening_hours_items.2.time") }}
                    </p>
                    <p class="mb-4 text-primary font-semibold">
                        {{ $t("contact.opening_hours_items.3.time") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { setPageTitle } = useTitle();

setPageTitle($t("nav.contact"));
</script>
