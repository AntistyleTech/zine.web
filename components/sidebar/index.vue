<script setup lang="ts">

  const open = ref<boolean>(false);

  const colorMode = useColorMode()

</script>

<template>
  <div>
    <!--Mobile Sidebar-->
    <div class="z-50 absolute flex items-center justify-between p-4 h-[50px] md:hidden">
      <transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <UIcon v-if="!open"
               class="z-50 cursor-pointer left-2 top-2 text-2xl text-purple-400"
               name="i-majesticons-menu"
               @click="open = true"/>
      </transition>
      <transition
          enter-active-class="transform transition-transform duration-300"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition-transform duration-300"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
      >
        <div v-if="open" class="fixed top-0 left-0 z-50 w-full h-screen bg-purple-800">
          <UIcon class="absolute text-2xl z-50 cursor-pointer right-4 top-4 text-gray-300"
                 name="i-majesticons-close"
                 @click="open = false"/>
          <!-- <SidebarMenu/> -->
        </div>
      </transition>
    </div>

    <!--Desktop Sidebar-->
    <div class="hidden md:flex flex-col h-screen relative bg-purple-800 duration-300" :class="{'w-72': open, 'w-16': !open}">
      <!--Sidebar Logo-->
      <div class="h-[50px]">
        <SidebarLogo :open="open"/>
      </div>
      <!--Sidebar Button-->
      <div class="flex items-center justify-center text-center w-6 h-6  rounded-full bg-white absolute border-2 border-purple-400 -right-3 top-3"
        :class="{'bg-gray-950': colorMode.value !== 'light'}">
        <UIcon class="w-4 h-4 bg-purple-400  cursor-pointer"
               :class="{'rotate-180': !open}"
               name="i-majesticons-arrow-left-line"
               @click="open = !open"/>
      </div>

      <!--Sidebar Menu-->
      <SidebarMenu :open = "open"/>

    </div>

  </div>
</template>

<script></script>