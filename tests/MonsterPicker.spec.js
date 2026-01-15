import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MonsterPartPicker from '../src/components/MonsterPartPicker.vue'

const parts = [
  { id: 'a', name: 'Head A', image: '/img/head-a.png' },
  { id: 'b', name: 'Head B', image: '/img/head-b.png' }
]

describe('MonsterPartPicker', () => {
  it('emits update:modelValue when a part is clicked', async () => {
    const wrapper = mount(MonsterPartPicker, { props: { parts } })
    await wrapper.find('button.part-card').trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0][0]).toEqual(parts[0])
  })
})
