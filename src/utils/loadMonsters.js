export function loadMonsters() {
  try {
    return JSON.parse(localStorage.getItem('monsters')) || []
  } catch {
    return []
  }
}

