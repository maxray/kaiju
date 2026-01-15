<script setup>
import { computed } from 'vue'
import MonsterCard from './MonsterCard.vue'

const props = defineProps({
  savedMonsters: { type: Array, required: true },
  monsterParts: { type: Object, required: true }
})

const emit = defineEmits(['delete-monster'])

const savedMonstersWithParts = computed(() => {
  return props.savedMonsters.map(monster => {
    const topPart = props.monsterParts.tops.find(p => p.id === monster.topId) || null
    const middlePart = props.monsterParts.middles.find(p => p.id === monster.middleId) || null
    const bottomPart = props.monsterParts.bottoms.find(p => p.id === monster.bottomId) || null
    return { ...monster, top: topPart, middle: middlePart, bottom: bottomPart }
  })
})

const deleteMonster = (id) => {
  emit('delete-monster', id)  // child emits only
}
</script>


<template>
  <section>
    <h2>Saved Monsters</h2>

    <p v-if="savedMonsters.length === 0">
      No monsters saved yet
    </p>

    <div v-else class="saved-monsters">
      <div v-for="monster in savedMonstersWithParts" :key="monster.id" class="saved-card">
        <MonsterCard
          :top="monster.top"
          :middle="monster.middle"
          :bottom="monster.bottom"
          :name="monster.name"
        />
        <button class="delete-btn" @click="deleteMonster(monster.id)">Delete</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.saved-monsters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.saved-card {
max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.delete-btn {
  background-color: #ff5c5c;
  border: none;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.delete-btn:hover {
  background-color: #ff2c2c;
}
</style>
