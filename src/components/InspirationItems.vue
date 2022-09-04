<template>
    <div>
        <div class="
        page-loader
        w-screen
        h-screen
        flex
        justify-center
        items-center
      " v-if="loading">
            <span class="loader"></span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mx-4 pt-6" v-else>
            <div class="grid-item mb-12 h-[16rem] w-full relative bg-zinc-100" v-for="inspirationItem in inspirationItems"
                :key="inspirationItem.name">
                <div class="item__inner w-full h-full bg-center bg-cover" :style="{
                    'background-image': 'url(' + inspirationItem.image + ')',
                }">
                    <!-- add overlay with external link icon -->
                    <div class="
              item__overlay
              hidden
              z-[9999]
              h-full
              w-full
              bg-[#00000084]
              justify-center
              items-center
            ">
                        <button @click="openExternalLink(inspirationItem.url)" class="
                btn
                border-white
                text-white
                hover:bg-white hover:text-black
                btn-outline
                opacity-100
              ">
                            open
                        </button>

                        <!-- card name -->
                        <div class="
                item__name
                absolute
                bottom-0
                left-0
                p-2
                text-white
                font-semibold font-display
              ">
                            {{ inspirationItem.name }}
                        </div>
                    </div>
                </div>
                <div class="item-name font-display font-bold text-lg" data-theme="light">
                    {{inspirationItem.name}}
                </div>
                <div class="item-dev font-display text-sm opacity-95">
                    {{inspirationItem.developer}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const listenToHover = () => {
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.querySelector(".item__overlay").classList.remove("hidden");
            item.querySelector(".item__overlay").classList.add("flex");
        });
        item.addEventListener("mouseleave", () => {
            item.querySelector(".item__overlay").classList.remove("flex");
            item.querySelector(".item__overlay").classList.add("hidden");
        });
    });
};

export default {
    data() {
        return {
            inspirationItems: [],
            loading: true,
        };
    },
    methods: {
        getInspirationItems() {
            fetch(`${import.meta.env.VITE_API_URL}/getAllWebsites`)
                .then((response) => response.json())
                .then((data) => {
                    this.loading = false;
                    this.inspirationItems = data.documents.reverse();
                    setTimeout(() => {
                        listenToHover();
                    }, 1000);
                });
        },
        openExternalLink(url) {
            window.open(url, "_blank");
        },
    },
    mounted() {
        this.getInspirationItems();
        //   this.listenToHover();
    },
};
</script>