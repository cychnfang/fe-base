// MyComponent.test.js
import { mount, type VueWrapper } from '@vue/test-utils'
import MyComponent from '@/components/test-component/index.vue'

test('it should work', async () => {
  const wrapper = mount<VueWrapper>(MyComponent)

  await wrapper.find('#test').trigger('click')

  expect(wrapper.vm.count).toBe(1)

  expect(wrapper.html()).toContain('12')
})
