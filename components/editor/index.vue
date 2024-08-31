<script setup lang="js">
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from "@editorjs/paragraph";

const editor = ref(null)
const placeholderText = 'Write something...'

const props = defineProps({
  initialData: {
    type: Array,
  },
});

const initialData = { blocks: props.initialData.data.blocks};
console.log(initialData)
onMounted(() => {
  editor.value = new EditorJS({
    holder: 'editor',
    autofocus: true,
    placeholder: placeholderText,
    data: initialData,
    tools: {
      header: {
        class: Header,
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 3,
          inlineToolbar: true
      },
      paragraph: {
      class: Paragraph
    },
      list: {
      class: List
    }
    },

    onReady: () => {
      editor.value.render(editor.data)
      console.log('Editor.js is ready to work!')
    },

    // onChange: async (api, event) => {
    //   try {
    //     const output = await api.saver.save()
    //     console.log('Editor post:', output)
    //
    //     const contentItems = output.blocks.map(block => ({
    //       type: block.type,
    //       data: block.data,
    //     }));
    //     console.log(contentItems)
    //   } catch (error) {
    //     console.error('Error saving editor post:', error)
    //   }
    // },
  })
})

  const savePost = async () => {
    const token = useCookie('XSRF-TOKEN')
    console.log(token.value)
    if (editor.value) {
      try {
        const output = await editor.value.save();
        console.log('Editor post:', output);

        const contentItems = output.blocks.map(block => ({
          type: block.type,
          data: block.data,
        }));
        console.log(contentItems);

        const response = await $fetch( 'http://localhost/api/post', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'X-XSRF-TOKEN': token.value,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
        body: JSON.stringify({ contentItems }),
        });

        const result = await response;
        console.log('Server response:', result);
      } catch (error) {
        console.error('Error saving editor post:', error);
      }
    }
}

  const updatePost = async () => {}

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})

</script>

<template>
  <div class="flex justify-center items-start w-full">
    <div  class="block w-3/4 shadow p-2 h-screen" id="editor"></div>
    <UButton @click="savePost"> Save</UButton>
    <UButton v-if="initialData" @click="updatePost"> Update</UButton>
  </div>
</template>

<style>

@media (min-width: 651px) {
  .ce-block__content {
    max-width: calc(100% - 120px) !important;
    margin: 0 60px;
  }
}

@media (min-width: 651px) {
  .ce-toolbar__content {
    width: 0px !important;
    margin: 0 50px;
  }
}

.cdx-block {
  max-width: 100% !important;
}

@media (min-width: 651px) {
  .codex-editor--narrow .ce-toolbox .ce-popover {
    left: 0;
    right: 0;
  }
}

@media (min-width: 651px) {
  .codex-editor--narrow .ce-settings .ce-popover {
    right: 0;
    left: 0;
  }
}
/*Style Header EditorJs */
h1.ce-header{
  @apply text-3xl font-bold
}
h2.ce-header{
  @apply text-2xl font-semibold
}
h3.ce-header{
  @apply text-xl font-semibold
}
h4.ce-header{
  @apply text-lg font-semibold
}
h5.ce-header{
  @apply text-base font-semibold
}
h6.ce-header{
  @apply text-base font-semibold
}

</style>
