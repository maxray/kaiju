import { describe, it, expect, beforeEach } from 'vitest'
import { loadMonsters } from '../src/utils/loadMonsters'

describe('loadMonsters', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns an empty array if no monsters are saved', () => {
    const monsters = loadMonsters()
    expect(monsters).toEqual([])
  })

  it('returns saved monsters from localStorage', () => {
    const saved = [
      { id: '1', name: 'Alpha', topId: 'a', middleId: 'b', bottomId: 'c' }
    ]

    localStorage.setItem('monsters', JSON.stringify(saved))

    const monsters = loadMonsters()
    expect(monsters).toEqual(saved)
  })

    it('returns empty array if storage is corrupted', () => {
    localStorage.setItem('monsters', 'not-json')

    expect(loadMonsters()).toEqual([])
    })

})
