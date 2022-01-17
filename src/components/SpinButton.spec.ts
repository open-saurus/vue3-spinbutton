import { mount } from '@vue/test-utils'
import SpinButton from './SpinButton.vue'

describe('SpinButton', () => {
    it('should display default label text as 0', () => {
        const wrapper = mount(SpinButton)

        expect(wrapper.find('label').text()).toEqual("0")
    })

    it('should display label text', () => {
        const modelValue = 5
        const wrapper = mount(SpinButton, { props: { modelValue } })

        expect(wrapper.find('label').text()).toEqual(modelValue.toString())
    })
})