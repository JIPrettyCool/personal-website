<template>
  <main
    class="bg-gray-200 dark:bg-[#070510] relative dark:text-white overflow-hidden transition duration-75 dark:selection:bg-white/10 selection:bg-black/10"
  >
    <div
      class="h-[2000px] blur-[100px] w-[200%] xyz-in absolute bg-contain"
      xyz="fade"
      :key="getInfo.thumbnailImage"
      :style="
        colorMode.value == 'dark'
          ? `background-image: url('${getInfo.thumbnailImage}'); opacity: 40%; animation-name: spin; animation-iteration-count: infinite; animation-duration: 85s; animation-timing-function: linear;`
          : ''
      "
    />
    <button
      name="theme"
      aria-label="theme icon"
      @click="switchTheme"
      class="flex items-center p-2 transition duration-150 bg-gray-300 dark:bg-gray-900 text-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 absolute top-3 right-3"
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
        <div class="flex flex-col mx-8 md:mx-0 md:space-y-3 md:w-7/12">
          <div class="relative">
            <v-image
              class="relative rounded-xl h-28 w-28 md:h-48 md:w-48"
              :loading="getLoading"
              :src="getInfo.userAvatar"
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
              {{ new Date().getUTCFullYear() - 2005 }} years old Pilot,
              studying in National Defence University.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-10/12 md:w-4/12 gap-2">
          <MusicCard class="block" />

          <span class="mt-6 mb-2 md:text-3xl xyz-in" xyz="fade left-4">
            Projects
          </span>
        
          <GitHubLink class="flex-shrink-0" :spotifyStatus="spotifyLoading" />
          <div id="app">
            <LinksCard />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Activity, useLanyard } from "@leonardssh/use-lanyard";
import { useLanyardStore } from "@/store";
import GitHubLink from "./components/GitHubLink.vue";
import LinksCard from "./components/LinksCard.vue";

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

  return {
    statusIndicator: store?.lanyardData?.discord_status || "Offline",
    userAvatar: `https://cdn.discordapp.com/avatars/${store?.lanyardData?.discord_user?.id}/${store?.lanyardData?.discord_user?.avatar}.png?size=1024`,
    thumbnailImage: (appleMusic?.assets?.large_image.startsWith("mp:external")
      ? appleMusic.assets.large_image.replace(
          /mp:external\/([^\/]*)\/(http[s])/g,
          "$2:/"
        )
      : `https://cdn.discordapp.com/app-assets/${appleMusic?.application_id}/${appleMusic?.assets?.large_image}`
    ).replace("96x96", "1024x1024"),
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
      } years old Pilot, studying in National Defence University.`,
    },
    { name: "theme-color", content: "#000000" },
    { property: "og:title", content: "meric." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: window.location.host },
    {
      property: "og:description",
      content: `${
        new Date().getFullYear() - 2005
      } years old Pilot, studying in National Defence University.`,
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
      } years old Pilot, studying in National Defence University.`,
    },
    {
      name: "twitter:image",
      content: `https://cdn.discordapp.com/avatars/${getInfo?.value?.userId}/${getInfo?.value?.userAvatar}.png?size=1024`,
    },
  ],
});
</script>
