<script setup>
const { parts, modelValue } = defineProps({
  parts: { type: Array, required: true },
  modelValue: { type: Object, default: null }
})

const emit = defineEmits(['update:modelValue'])

const selectPart = (part) => {
    emit('update:modelValue', part)
}
</script>

<template>
  <div class="part-picker">
    <button 
      v-for="part in parts" 
      :key="part.id" 
      class="part-card"
      :class="{ selected: modelValue && modelValue.id === part.id }"
      @click="selectPart(part)"
    >
      <img :src="part.image" :alt="part.name" />
      <p>{{ part.name }}</p>
    </button>
  </div>
</template>

<style scoped>
.part-picker {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.part-card {
  cursor: pointer;
  border: 2px solid transparent;
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  width: 100px;
  background: white;
  font: inherit;
}
.part-card.selected {
  border-color: #42b883;
}
.part-card img {
  width: 100%;
  display: block;
}
.part-card:focus {
  outline: 2px solid #42b883;
}
</style>
