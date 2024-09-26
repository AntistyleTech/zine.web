import EditorJS from '@editorjs/editorjs';
import type { OutputData, BlockToolData, ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import { ref, onBeforeUnmount } from 'vue';

interface EditorData {
  title: string;
  contentItems: Array<{ type: string; data: BlockToolData }>;
}

export function useEditor(initialData: OutputData = { blocks: [] }) {
  const editor = ref<EditorJS | null>(null);
  const placeholderText = 'Write something...';

  const initEditor = (): void => {
    editor.value = new EditorJS({
      holder: 'editor',
      autofocus: true,
      placeholder: placeholderText,
      data: initialData,

      tools: {
        header: {
          class: Header  as unknown as ToolConstructable,
          config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
            inlineToolbar: true
          }
        },
        paragraph: {
          class: Paragraph  as unknown as ToolConstructable,
        },
        list: {
          class: List  as unknown as ToolConstructable,
        }
      },
      onReady: () => {
        console.log('Editor.js is ready!', initialData);
      },
      onChange: () => {
        console.log('Content has been changed!');
      }
    });
  };

  const getEditorData = async (): Promise<EditorData> => {
    if (editor.value) {
      const output = await editor.value.save();
      let title = '';
      if (output.blocks.length > 0) {
        const firstBlock = output.blocks[0];
        if (firstBlock.type === 'header' || firstBlock.type === 'paragraph') {
          title = firstBlock.data.text;
        }
        if (title.length > 255) {
          title = title.substring(0, 255);
        }
      }

      const contentItems = output.blocks.map(block => ({
        type: block.type,
        data: block.data,
      }));

      return { title, contentItems };
    }
    return { title: '', contentItems: [] };
  };

  onBeforeUnmount((): void => {
    if (editor.value) {
      editor.value.destroy();
    }
  });

  return { initEditor, getEditorData, editor };
}