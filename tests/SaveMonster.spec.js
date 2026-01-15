import { describe, it, expect, beforeEach } from 'vitest'
import { saveMonster } from '../src/utils/saveMonster'

describe('saveMonster', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('saves a monster to localStorage', () => {
    const monster = {
      name: 'Test Monster',
      topId: 'head-a',
      middleId: 'body-a',
      bottomId: 'legs-a'
    }

    saveMonster(monster)

    const saved = JSON.parse(localStorage.getItem('monsters'))

    expect(saved).toHaveLength(1)
    expect(saved[0]).toMatchObject(monster)
  })

    it('appends monsters instead of overwriting', () => {
    saveMonster({ topId: 'a', middleId: 'b', bottomId: 'c' })
    saveMonster({ topId: 'x', middleId: 'y', bottomId: 'z' })

    const saved = JSON.parse(localStorage.getItem('monsters'))

    expect(saved).toHaveLength(2)
    })
})
