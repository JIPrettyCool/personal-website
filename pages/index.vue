<template>
  <main
    class="bg-gray-200 dark:bg-[#070510] relative dark:text-white overflow-hidden transition duration-75 dark:selection:bg-white/10 selection:bg-black/10"
  >
    <div
      class="h-[2000px] blur-[100px] w-[200%] xyz-in absolute bg-contain"
      xyz="fade"
      :key="store?.lanyardData.spotify?.album_art_url"
      :style="
        colorMode.value == 'dark'
          ? `background-image: url('${store?.lanyardData.spotify?.album_art_url}'); opacity: 40%; animation-name: spin; animation-iteration-count: infinite; animation-duration: 85s; animation-timing-function: linear;`
          : ''
      "
    />
    <button
      name="theme"
      aria-label="theme icon"
      @click="switchTheme"
      class="flex items-center p-2 transition duration-150 bg-transparent text-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 absolute top-3 right-3"
>
      <Icon
        :name="
          colorMode.value == 'light' ? 'majesticons:sun' : 'majesticons:moon'
        "
        class="h-5 w-5"
      />
    </button>
    <div
      class="container flex flex-col justify-center min-h-screen mx-auto text-lg transition duration-150 sm:justify-start"
    >
      <div
        class="flex flex-col items-center justify-between w-full pt-24 sm:flex-row md:pt-0 md:mt-48"
      >
        <div class="flex flex-col mx-4 md:mx-0 md:space-y-3 md:w-/12">
          <div class="relative">
            <v-image
              class="relative rounded-xl h-28 w-28 md:h-48 md:w-48"
              :loading="getLoading"
              :src="`https://cdn.discordapp.com/avatars/${getInfo.userId}/${getInfo.userAvatar}.png?size=1024`"
              draggable="false"
              alt="avatar"
            />
            <div
              v-tooltip="getInfo.statusIndicator.toUpperCase()"
              class="absolute hidden w-3 h-3 transition rounded-full top-1 left-1 animate-pulse md:block"
              :class="{
                'bg-[#3ba55d]': getInfo.statusIndicator === 'online',
                'bg-[#faa81a]': getInfo.statusIndicator === 'idle',
                'bg-[#ed4245]': getInfo.statusIndicator === 'dnd',
                'bg-[#747f8d]': getInfo.statusIndicator === 'offline',
              }"
            />
          </div>
          <div>
            <h1 class="flex my-2 text-3xl md:text-5xl xyz-in" xyz="fade left-2">
              Welcome&nbsp;
              <Icon
                name="twemoji:waving-hand"
                class="self-center h-7 w-7 md:h-10 md:w-10 animate-wavey rotate-90"
              />
            </h1>
            <p
              class="w-full md:w-7/12 text-md opacity-80 md:text-lg xyz-in"
              xyz="fade left-4"
            >
              {{ new Date().getUTCFullYear() - 2005 }} years old Freelance Dev.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-10/12 md:w-4/12 gap-2">
          <MusicCard class="block" />

          <div id="index">
            <LinksCard class="flex-shrink-0" :spotifyStatus="spotifyLoading" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { Activity, useLanyard } from "@leonardssh/use-lanyard";
import { useLanyardStore } from "@/store";
import LinksCard from "../components/LinksCard.vue";

let store = useLanyardStore();
const colorMode = useColorMode();

const switchTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

useLanyard({
  userId: "455384255774720011",
  socket: true,
  async onPresenceUpdate(presence) {
    store?.setData(presence);
  },
});

const getLoading = computed(
  () => Object.keys(store?.lanyardData || {}).length === 0
);

const spotifyLoading = computed(() => store?.lanyardData?.spotify === null);

const appleMusicLoading = computed(() => !!appleMusic);

const getInfo = computed(() => ({
  statusIndicator: store?.lanyardData?.discord_status || "Offline",
  userId: store?.lanyardData?.discord_user?.id,
  userAvatar: store?.lanyardData?.discord_user?.avatar,
}));

useHead({
  htmlAttrs: {
    class: colorMode.preference,
    lang: "en",
  },
  title: "meric.",

  meta: [
    {
      name: "description",
      content: `${
        new Date().getFullYear() - 2005
      } years old Freelance Developer.`,
    },
    { name: "theme-color", content: "#000000" },
    { property: "og:title", content: "meric." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: window.location.host },
    {
      property: "og:description",
      content: `${
        new Date().getFullYear() - 2005
      } years old Freelance Developer.`,
    },
    {
      property: "og:image",
      content: `https://cdn.discordapp.com/avatars/${getInfo?.value?.userId}/${getInfo?.value?.userAvatar}.png?size=1024`,
    },
    //
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "meric.",
    },
    {
      name: "twitter:description",
      content: `${
        new Date().getFullYear() - 2005
      } years old Freelance Developer.`,
    },
    {
      name: "twitter:image",
      content: `https://cdn.discordapp.com/avatars/${getInfo?.value?.userId}/${getInfo?.value?.userAvatar}.png?size=1024`,
    },
  ],
  script: [
    {
      src: "https://analytics.merickmrc.com/script.js",
      async: true,
      defer: true,
      'data-website-id': "249ffff8-d995-42a4-88bb-506f8c2c1410"
    }
  ]
});
</script>
