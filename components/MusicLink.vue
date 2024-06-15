<template>
      <div class="flex gap-2 my-2">
      <a
      class="relative h-[40rem] w-[30rem] group flex flex-col justify-between bg-gradient-to-t from-black overflow-hidden rounded-2xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
      href="/"
      target="_blank"
    >
      <span aria-hidden="true" class="pointer-events-none absolute inset-0 -z-20">
        <img
          :src="imgSrc"
          alt="music gif"
          class="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7]"
        />
        <span
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" class="px-6 pt-6">
            <Icon name="cib:apple-music" class="self-center -my-20 w-6 h-6 md:w-auto xl:flex-shrink-0"></Icon>
      </span>
      <span class="space-y-0.5 px-6 pb-6">
        <span class="block font-semibold">Country Roads Take Me HOOOOOME!</span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: 'https://http.cat/images/404.jpg' 
    }
  }
}
</script>