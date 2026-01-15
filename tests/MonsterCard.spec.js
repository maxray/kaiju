import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MonsterCard from '../src/components/MonsterCard.vue' // relative path

const mockPart = (name) => ({ name, image: `/img/${name}.png` })

describe('MonsterCard', () => {
  it('renders all three monster parts', () => {
    const wrapper = mount(MonsterCard, {
      props: {
        top: mockPart('head'),
        middle: mockPart('body'),
        bottom: mockPart('legs')
      }
    })

    const images = wrapper.findAll('img')
    expect(images.length).toBe(3)
    expect(images[0].attributes('alt')).toBe('head')
    expect(images[1].attributes('alt')).toBe('body')
    expect(images[2].attributes('alt')).toBe('legs')
  })
})
