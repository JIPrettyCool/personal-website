<template>
  <div v-if="getLoading">
    <div class="md:flex gap-3 hidden">
      <skeleton class="h-48 w-48 rounded-md" />
      <div class="gap-8 flex flex-col self-center">
        <skeleton class="w-24 h-4 rounded-md" />
        <skeleton class="w-52 h-4 rounded-md" />
        <skeleton class="w-48 h-4 rounded-md" />
      </div>
    </div>
    <skeleton class="h-4 rounded-md md:hidden w-full my-4" />
  </div>

  <div v-else-if="!getStatus.song" class="text-3xl" />

  <div v-else>
    <div class="flex items-center my-4 md:hidden">
      <icon
        name="cib:apple-music"
        class="text-[#ffffff] h-7 w-7 md:hidden mr-1"
      />
      <div class="text-xs">
        <span class="font-semibold"> {{ getStatus.song }} </span>
        <span class="font-thin">&nbsp;by&nbsp;</span>
        <span>{{ getStatus.artist }}</span>
      </div>
    </div>

    <div
      class="justify-between hidden text-xs rounded-lg font-extralight md:w-auto xyz-in md:h-48 md:max-w-xl md:text-md md:block"
      xyz="fade"
    >
      <section>
        <div class="flex flex-col pr-4 md:h-full">
          <div class="flex items-center gap-2 truncate md:w-full">
            <div class="hidden h-full w-72 md:block">
              <div class="flex-shrink-0">
                <v-image
                  class="h-full rounded-md xyz-in"
                  draggable="false"
                  :loading="getLoading"
                  :src="thumbnailImage"
                  :key="thumbnailImage"
                  xyz="fade"
                />
              </div>
            </div>

            <div
              class="flex flex-col w-full gap-2 px-2 overflow-hidden font-normal truncate md:text-xl"
            >
              <div
                class="flex my-2 space-x-4 space-y-1 overflow-hidden md:flex-col md:my-0 md:space-x-0 w-72"
              >
                <div class="truncate xyz-in" xyz="fade" :key="getStatus.song">
                  {{ getStatus.song }}
                </div>

                <span class="truncate">
                  <span class="font-thin">by</span>
                  <span
                    class="xyz-in ml-1.5"
                    xyz="fade"
                    :key="getStatus.artist"
                  >
                    {{ getStatus.artist }}
                  </span>
                </span>

                <span class="truncate">
                  <span class="font-thin">on</span>
                  <span class="xyz-in ml-1.5" xyz="fade" :key="getStatus.album">
                    {{ getStatus.album }}
                  </span>
                </span>
              </div>

              <div
                class="w-full h-1 mx-auto transition-all rounded-md dark:bg-white/40 bg-black/20"
              >
                <div
                  class="h-1 transition-all bg-black rounded-md dark:bg-white"
                  :style="`width: ${progress}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLanyardStore } from "@/store/index";
import { Activity } from "@leonardssh/use-lanyard";

const store = useLanyardStore();

const time = ref(new Date().getTime());

const getLoading = computed(
  () => Object.keys(store?.lanyardData || {}).length === 0
);

let thumbnailImage: string;
let activity: Activity | undefined;

const getStatus = computed(() => {
  activity = store?.lanyardData?.activities?.find(
    (activity) => activity.name === "Apple Music"
  );

  thumbnailImage = (
    activity?.assets?.large_image.startsWith("mp:external")
      ? activity.assets.large_image.replace(
          /mp:external\/([^\/]*)\/(http[s])/g,
          "$2:/"
        )
      : `https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}`
  ).replace("96x96", "1024x1024");

  return {
    statusIndicator: store?.lanyardData?.discord_status || "Offline",
    song: activity?.details,
    artist: activity?.state,
    album: activity?.assets?.large_text,
    albumurl: thumbnailImage,
  };
});

const progress = computed(() => {
  if (activity?.timestamps?.end) {
    const total = activity?.timestamps?.end - activity?.timestamps?.start;
    const progress =
      100 - (100 * (activity?.timestamps?.end - time.value)) / total;

    return progress;
  }
});

onMounted(() => {
  setInterval(() => {
    time.value = new Date().getTime();
  }, 500);
});
</script>
