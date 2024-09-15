<script setup>
const props = defineProps({
  data: Object
});
const listTag = props.data && props.data.style === 'ordered' ? 'ol' : 'ul';
</script>

<template>
  <pre>{{props.data}}</pre>
  <pre>{{listTag}}</pre>
  <component :is="listTag">
    <li v-for="(item, index) in data.items" :key="index">{{ item }}</li>
  </component>
</template>

<style>

ul, ol {
  list-style-position: inside; /* Список отображается внутри элемента */
  padding-left: 0; /* Убираем отступ по умолчанию */
  margin: 1em 0; /* Отступы сверху и снизу */
}

li {
  margin-bottom: 0.5em; /* Расстояние между элементами списка */
  padding: 0.5em; /* Отступ внутри каждого элемента списка */
  border: 1px solid #ddd; /* Граница вокруг элементов списка */
  border-radius: 4px; /* Закругленные углы */
  background-color: #f9f9f9; /* Фоновый цвет элементов */
  color: #333333;
}

ol {
  counter-reset: list-counter; /* Сброс счетчика для кастомной нумерации */
}

ol li {
  counter-increment: list-counter; /* Инкремент счетчика */
  list-style: none; /* Отключаем стандартную нумерацию */
}

ol li::before {
  content: counter(list-counter) ". "; /* Добавляем кастомную нумерацию перед элементом */
  font-weight: bold;
  margin-right: 0.5em; /* Отступ перед текстом элемента */
  color: #333; /* Цвет текста номера */
}

ul {
  list-style-type: disc; /* Стандартные маркеры для списка */
}

ul li::marker {
  color: #333; /* Цвет маркера */
}

</style>