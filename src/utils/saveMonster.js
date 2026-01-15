// utils/saveMonster.js
export const saveMonster = (monster) => {
  const existing = JSON.parse(localStorage.getItem('monsters') || '[]')

  const monsterWithId = {
    ...monster,
    id: monster.id || Date.now() // ensure unique ID
  }

  existing.push(monsterWithId)
  localStorage.setItem('monsters', JSON.stringify(existing))

  return monsterWithId
}
