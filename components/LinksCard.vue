<template>
      <div class="flex gap-2 my-2">
      <a
      class="relative h-full w-full group flex flex-col justify-between bg-gradient-to-t from-black overflow-hidden rounded-2xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
      href="https://github.com/jiprettycool"
      target="_blank"
    >
      <span aria-hidden="true" class="pointer-events-none absolute inset-0 -z-20">
        <img
          :src="imgSrc"
          alt="cat img"
          class="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7]"
        />
        <span
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" class="px-6 pt-6">
        <span class="flex justify-between">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.607.069-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.91.832.09-.647.349-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.941 0-1.09.39-1.98 1.029-2.677-.103-.253-.447-1.272.097-2.65 0 0 .84-.27 2.75 1.024A9.578 9.578 0 0112 6.846a9.573 9.573 0 012.5.336c1.91-1.295 2.75-1.024 2.75-1.024.544 1.378.2 2.397.098 2.65.64.697 1.028 1.587 1.028 2.677 0 3.841-2.337 4.685-4.565 4.932.359.309.678.92.678 1.852 0 1.337-.012 2.418-.012 2.746 0 .267.18.577.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </span>
      <span class="space-y-0.5 px-6 pb-6">
        <span class="block font-semibold">GitHub</span>
      </span>
    </a>
  </div>
    <div class="flex gap-2">
      <a
        href="https://discord.gg/ZQSHn9b"
        target="_blank"
        class="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#458f] w-full"
      >
        <Icon name="cbi:discord" class="self-center w-6 h-6 md:w-auto mr-2 xl:flex-shrink-0"></Icon>
        <p class="text-[12px] text-white/90 -rotate-6">
          Discord Server
        </p>
      </a>
      <a
        href="https://x.com/iamrealji"
        target="_blank"
        class="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" class="w-6 h-6">
          <path d="M25.343 20.187L38.184 4H31.187L24 13.798L16.889 4H9.798L22.798 20.034L9 36H16.187L24 26.079L31.841 36H39L25.343 20.187z"/>
        </svg>
        <p class="text-[12px] text-white/55">
          Twitter
        </p>
      </a>
    </div>
    <div class="flex gap-2 my-2">
    <a
      href="https://www.upwork.com/freelancers/~01e177e9efb0626f9a"
      target="_blank"
      class="hover:scale-95 duration-500 transform-gpu h-[12rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#108a00] w-[9rem]"
    >
    <p class="text-[16px] text-white">
    <Icon name="fa6-brands:upwork" class="self-center -mx-1 w-6 h-6 md:w-auto xl:flex-shrink-0"></Icon>  
        WORK
    </p>
    </a>
    <a
      href="https://open.spotify.com/user/u9w9q28510i4ah0b38izr83q0?si=d77a6a73d6d74547"
      target="_blank"
      class="hover:scale-95 duration-500 transform-gpu h-[12rem] flex flex-col justify-center items-center rounded-lg text-white bg-gradient-to-b from-[#1ed760] to-[#ffffff] w-full"
    >
    <Icon name="mdi:spotify" class="self-center mx-2 w-6 h-6 md:w-auto xl:flex-shrink-0"></Icon>  
    <p class="text-[12px] text-white">
    Spotify   
    </p>
    </a>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imgSrc: 'https://http.cat/images/500.jpg' 
      }
    }
  }
  </script>