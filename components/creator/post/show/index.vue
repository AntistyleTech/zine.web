<script setup lang="ts">

const props = defineProps({
  id: Number
});

const isOpen = ref(false);
const blocks = ref(null);

const loadPost = async () => {
  try {
    const {data: post} = await useLazyAsyncData(() => usePost().getPost(Number(props.id)));
    blocks.value = post.value.data.blocks
    isOpen.value = true;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <CreatorPostShowButton @click="loadPost" />
    <CreatorPostShowModal :blocks="blocks" v-model="isOpen" />
  </div>
</template>