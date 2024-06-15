<template>
  <main
    class="bg-gray-200 dark:bg-[#070510] relative dark:text-white overflow-hidden transition duration-75 dark:selection:bg-white/10 selection:bg-black/10"
  >
    <div
      class="h-[2000px] blur-[100px] w-[200%] xyz-in absolute bg-contain"
      xyz="fade"
      :key="getInfo.thumbnailImage"
      :style="{
        backgroundImage: `url('${getInfo.thumbnailImage}')`,
        opacity: colorMode.value === 'dark' ? '40%' : '100%', 
        animationName: colorMode.value === 'dark' ? 'spin' : 'none', 
      }"
    ></div>
    <button
      name="theme"
      aria-label="theme icon"
      @click="switchTheme"
      class="flex items-center p-2 transition duration-150 bg-transparent text-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 absolute top-3 right-3"
    >
      <Icon
        :name="colorMode.value === 'light' ? 'majesticons:sun' : 'majesticons:moon'"
        class="h-5 w-5"
      />
    </button>
    <div
      class="container flex flex-col justify-center min-h-screen mx-auto text-lg transition duration-150 sm:justify-start"
    >
      <div
        class="flex flex-col items-center justify-between w-full pt-24 sm:flex-row md:pt-0 md:mt-48"
      >
        <div class="flex flex-col w-10/12 md:w-4/12 gap-2">
          <div id="music">
            <MusicLink class="flex-shrink-0" :spotifyStatus="spotifyLoading" />
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
import MusicLink from "../components/MusicLink.vue";

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

let appleMusic: Activity | undefined;

const appleMusicLoading = computed(() => !!appleMusic);

const getInfo = computed(() => {
  appleMusic = store?.lanyardData.activities?.find(
    (activity) => activity.name === "Apple Music"
  );

  const thumbnailImage = (
    appleMusic?.assets?.large_image.startsWith("mp:external")
      ? appleMusic.assets.large_image.replace(
          /mp:external\/([^\/]*)\/(http[s])/g,
          "$2:/"
        )
      : `https://cdn.discordapp.com/app-assets/${appleMusic?.application_id}/${appleMusic?.assets?.large_image}`
  ).replace("96x96", "1024x1024");

  return {
    statusIndicator: store?.lanyardData?.discord_status || "Offline",
    userAvatar: `https://cdn.discordapp.com/avatars/${store?.lanyardData?.discord_user?.id}/${store?.lanyardData?.discord_user?.avatar}.png?size=1024`,
    thumbnailImage: thumbnailImage,
    song: appleMusic?.details,
    artist: appleMusic?.state,
    album: appleMusic?.assets?.large_text,
  };
});

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
      } years old Pilot.`,
    },
    { name: "theme-color", content: "#000000" },
    { property: "og:title", content: "meric." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: window.location.host },
    {
      property: "og:description",
      content: `${
        new Date().getFullYear() - 2005
      } years old Pilot.`,
    },
    {
      property: "og:image",
      content: `https://cdn.discordapp.com/avatars/${getInfo?.value?.userId}/${getInfo?.value?.userAvatar}.png?size=1024`,
    },
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
      } years old Pilot.`,
    },
    {
      name: "twitter:image",
      content: `https://cdn.discordapp.com/avatars/${getInfo?.value?.userId}/${getInfo?.value?.userAvatar}.png?size=1024`,
    },
  ],
});
</script>
