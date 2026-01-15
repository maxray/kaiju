<script setup>
import MonsterPartPicker from './components/MonsterPartPicker.vue'
import MonsterCard from './components/MonsterCard.vue'
import MonsterGallery from './components/MonsterGallery.vue'
import monsterParts from './data/monsterparts.json'
import { ref, onMounted } from 'vue'
import { saveMonster } from './utils/saveMonster'
import { loadMonsters } from './utils/loadMonsters'



const savedMonsters = ref([])
const monsterName = ref('')
const top = ref(null)
const middle = ref(null)
const bottom = ref(null)


const saveCurrentMonster = () => {
  saveMonster({
    name: monsterName.value,
    topId: top.value?.id,
    middleId: middle.value?.id,
    bottomId: bottom.value?.id
  })
  savedMonsters.value = loadMonsters() // refresh reactive array
}

onMounted(() => {
  savedMonsters.value = loadMonsters()
})

const handleDelete = (id) => {
  savedMonsters.value = savedMonsters.value.filter(m => m.id !== id)
  localStorage.setItem('monsters', JSON.stringify(savedMonsters.value))
}
</script>

<template >
<h1>Kaiju Kreat0r</h1>  
  <div class="wrapper">
    <div>
      

      <h2>Pick a Top</h2>
      <MonsterPartPicker v-model="top" :parts="monsterParts.tops" />

      <h2>Pick a Middle</h2>
      <MonsterPartPicker v-model="middle" :parts="monsterParts.middles" />

      <h2>Pick a Bottom</h2>
      <MonsterPartPicker v-model="bottom" :parts="monsterParts.bottoms" />
    </div>
    <div>
      <h2>Your Kaiju</h2>
      <label class="monster-name">
        Name your Kaiju:
        <input
          type="text"
          v-model="monsterName"
          placeholder="Name your monster"
        />
      </label>
      <MonsterCard 
        :name="monsterName"
        :top="top"
        :middle="middle"
        :bottom="bottom"
      />
      <button @click="saveCurrentMonster" :disabled="!top || !middle || !bottom">
        Save Monster
      </button>

    </div>

    <MonsterGallery
  :savedMonsters="savedMonsters"
  :monsterParts="monsterParts"
   @delete-monster="handleDelete"
/>
  </div>
</template>
<style scoped>
  .wrapper {
    display: flex;
    gap: 1rem;
  }

  .monster-name {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }

  .monster-name input {
    padding: 0.5rem;
    font-size: 1rem;
  }

</style>