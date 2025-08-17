<script setup lang="ts">

</script>

<template>
  <div class="h-[50px] w-full flex items-center text-center justify-between gap-5 py-7 px-6 sm:px-6 lg:px-8">
    <!--Logo-->
    <div>
      <NuxtLink to="/">
        <div class="w-full flex items-center justify-start cursor-pointer">
        <!--TODO: Add NuxtLink to main page and change color logo-->
          <div class="flex items-center rounded-full bg-purple-400 mr-2">
            <NuxtImg height="35" width="35"
                    src="/AntistyleLogo.svg"/>
          </div>
          <h1 class="text-purple-400 origin-left font-medium text-xl duration-300">
            AntistyleTech
          </h1>
        </div>
      </NuxtLink>
    </div>
    <HeaderAuth/>
  </div>
</template>
