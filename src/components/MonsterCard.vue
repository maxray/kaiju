<script setup>
defineProps({
  name: String,
  top: Object,
  middle: Object,
  bottom: Object
})
</script>

<template>
  <div class="monster-card">
    
    <div class="monster-frame">
      
      <img
        v-if="top"
        class="layer top"
        :src="top.image"
        :alt="top.name"
      />

      <img
        v-if="middle"
        class="layer middle"
        :src="middle.image"
        :alt="middle.name"
      />

      <img
        v-if="bottom"
        class="layer bottom"
        :src="bottom.image"
        :alt="bottom.name"
      />
      
      <h3 v-if="name" class="monster-name">{{ name }}</h3>
    </div>
  </div>
</template>

<style scoped>
 .monster-card {
  /* border: 2px dashed #ccc;
  padding: 1rem; */
  /* height: 600px;
  width: 200px;
  position: relative;
  background: #f9f9f9; */
}

.monster-frame {
  /* width: 200px;
  height: 300px;
  position: relative;
  background: #f9f9f9; */
  display: flex;
  flex-direction: column;
}

 .layer , h3{
  background: #f9f9f9;
  color: black;
} 

h3 {
    margin: 0;
    padding: 2rem;
}

img {max-width: 100%;}
</style>
