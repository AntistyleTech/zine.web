<script setup lang="ts">
  // TODO: Change id in submenu (try to use index)
  const menus = ref([
    {
      title: "Create Post",
      icon: "i-majesticons-file-line",
      url: "/creator/editor",
      submenu: false,
      spacing: false,
    },
    {
      title: "Posts",
      icon: "i-majesticons-file-plus-line",
      url: "/creator/post",
      submenu: false,
      spacing: false,
    },
    // {
    //   title: "Items 3",
    //   icon: "i-majesticons-bath-shower",
    //   submenu: true,
    //   spacing: false,
    //   id: "submenu-1",
    //   isOpen:false,
    //   submenuItems: [
    //     {
    //       title: "Submenu Item 3.1",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 3.2",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 3.3",
    //       url: "/me"
    //     }
    //   ]
    // },
    // {
    //   title: "Item 4",
    //   icon: "i-majesticons-bath-shower",
    //   url: "/me",
    //   submenu: false,
    //   spacing: false,
    // },
    // {
    //   title: "Item 5",
    //   icon: "i-majesticons-bath-shower",
    //   spacing: false,
    //   submenu: true,
    //   id: "submenu-2",
    //   isOpen:false,
    //   submenuItems: [
    //     {
    //       title: "Submenu Item 5.1",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 5.2",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 5.3",
    //       url: "/me"
    //     }
    //   ]
    // },
    // {
    //   title: "Item 6",
    //   icon: "i-majesticons-bath-shower",
    //   spacing: true,
    //   submenu: true,
    //   id: "submenu-3",
    //   isOpen: false,
    //   submenuItems: [
    //     {
    //       title: "Submenu Item 6.1",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 6.2",
    //       url: "/me"
    //     },
    //     {
    //       title: "Submenu Item 6.3",
    //       url: "/me"
    //     }
    //   ]
    // },
    // {
    //   title: "Item 7",
    //   icon: "i-majesticons-bath-shower",
    //   url: "/me",
    //   spacing: true,
    //   submenu: false,
    // },
    // {
    //   title: "Item 8",
    //   icon: "i-majesticons-bath-shower",
    //   url: "/me",
    //   submenu: false,
    //   spacing: false,
    // },
  ])

  const props = defineProps({
    open: {
      type: Boolean,
    },
  });

  const toggleSubmenu: boolean = ref((id) => {
    const item = menus.value.find(item => item.id === id);
    if (item) {
      item.isOpen = !item.isOpen;
    }
  });
</script>

<template>
  <div class="p-2 bg-purple-800">
    <div class="text-gray-300 text-sm flex items-center cursor-pointer "
         v-for='(item, index) in menus'
         key="index"
         :class="{'mt-9': item.spacing, 'mt-2': !item.spacing}">

      <div v-if="item.submenu" class="flex flex-col items-center"
           :class="{'w-full': props.open}">
          <div class="w-full flex items-center justify-between transition rounded-md hover:bg-purple-700 p-2 gap-x-4"
             @click.prevent="toggleSubmenu(item.id)">
            <div>
          <UIcon class="text-2xl block float-left" :name="item.icon" />
          <span class="text-base font-medium flex-1 duration-300 ml-2"
                :class="{'hidden': !props.open}">
              {{ item.title }}
            </span>
            </div>
          <UIcon class="text-2xl block"
                 name="i-majesticons-chevron-down"
                 v-if="item.submenu && props.open"
                 :class="{'rotate-180': item.isOpen}"
          />
        </div>

        <div v-if="item.submenu && item.isOpen && props.open"
             class="text-sm flex flex-col w-full transition duration-300"
             v-for='(submenuItem, submenuIndex) in item.submenuItems'
             :key="'submenu-' + submenuIndex"
             :class="{'hidden': !props.open}">
          <NuxtLink
              :to="submenuItem.url"
              class="flex w-full items-center gap-x-4 p-2 px-5 rounded-md hover:bg-purple-700 ">
              <span class="font-medium ml-2">
                {{submenuItem.title}}
              </span>
          </NuxtLink>

        </div>

      </div>

      <!-- Иначе оборачиваем в NuxtLink -->
<!--      <UPopover mode="hover" :popper="{ placement: 'right',  offsetDistance: 12 }" class="flex w-full items-center gap-x-4">-->
      <NuxtLink v-if="!item.submenu" :to="item.url" class="flex items-center transition rounded-md hover:bg-purple-700 p-2"
                :class="{'w-full': props.open}">
        <UIcon class="text-2xl block float-left" :name="item.icon" />
        <span class="text-base font-medium flex-1 duration-200 ml-2"
              :class="{'hidden': !props.open}">
              {{ item.title }}
            </span>
      </NuxtLink>
<!--        <template #panel v-if="!props.open">-->
<!--        <div class="flex p-2">-->
<!--          <span> {{item.title}}</span>-->
<!--        </div>-->
<!--      </template>-->
<!--      </UPopover>-->

    </div>
  </div>
<!--  <div>-->

<!--    <div class="px-4 grow">-->
<!--      <div class="grid gap-4">-->
<!--          <div class="flex items-center w-full gap-2 px-2 py-1 transition rounded hover:bg-pink-100 cursor-pointer"-->
<!--              v-for='(item, index) in items'-->
<!--              :key="index" >-->
<!--            <UIcon :name="item.icon"></UIcon>-->
<!--            <span>{{item.title}}</span>-->
<!--          </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->


</template>

<style>

</style>