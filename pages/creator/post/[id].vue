<script setup lang="ts">
const id = useRoute().params.id;
const {data: post} = await useAsyncData(() => usePost().getPost(Number(id)));
const editorData = {
  blocks: [
    { type: 'header', data: { text: 'Header', level: 2 } },
    { type: 'paragraph', data: { text: 'This is a paragraph.' } },
    { type: 'list', data: { style: 'unordered', items: ['Item 1', 'Item 2'] } },
  ],
};
</script>

<template>
<!--  <CreatorPostEdit :post="post.va"/>-->
  <client-only>
    <div class="flex flex-col">
      <h3>this iis editor render</h3>
      <editor-render  :blocks="editorData.blocks"/>
    </div>

  </client-only>

<!--  <client-only>-->
<!--    <editor :initial-data="post"/>-->
<!--  </client-only>-->

</template>