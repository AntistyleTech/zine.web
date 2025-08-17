<script setup lang="ts">

  const props = defineProps({
    id: Number
  });

  const isOpen = ref(false);
  const blocks = ref(null);

  const loadPost = async () => {
    try {
      const post = await usePost().getPost(Number(props.id));
      blocks.value = post.data.blocks
      isOpen.value = true;
    } catch (error) {
      console.error(error);
    }
};

</script>

<template>
  <div>
    <CreatorPostShowButton @click="loadPost" />
    <CreatorPostShowModal :blocks="blocks" v-model="isOpen" l prevent-close/>
  </div>
</template>