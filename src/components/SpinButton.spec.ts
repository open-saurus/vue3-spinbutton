import { mount } from '@vue/test-utils'
import SpinButton from './SpinButton.vue'

describe('SpinButton', () => {
    it('should display default label text as 0', () => {
        const wrapper = mount(SpinButton)

        expect(wrapper.find('label').text()).toEqual("0")
    })

    it('should display label text', () => {
        const props = {
            modelValue: 5
        }
        const wrapper = mount(SpinButton, { props })

        expect(wrapper.find('label').text()).toEqual(props.modelValue.toString())
    })

    it('clicking on decrement button should decrease v-model value by 1', () => {
        const props = {
            modelValue: 0
        }
        const wrapper = mount(SpinButton, { props })

        wrapper.find('.spin-button > .btn-negative').trigger('click')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([props.modelValue - 1])
    })

    it('clicking on increment button should increase v-model value by 1', () => {
        const props = {
            modelValue: 0
        }
        const wrapper = mount(SpinButton, { props })

        wrapper.find('.spin-button > .btn-positive').trigger('click')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([props.modelValue + 1])
    })

    it('clicking on decrement button should decrease v-model value by step 3', () => {
        const props = {
            modelValue: 0,
            step: 3
        }
        const wrapper = mount(SpinButton, { props })

        wrapper.find('.spin-button > .btn-negative').trigger('click')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([props.modelValue - props.step])
    })

    it('clicking on increment button should increase v-model value by step 3', () => {
        const props = {
            modelValue: 0,
            step: 3
        }
        const wrapper = mount(SpinButton, { props })

        wrapper.find('.spin-button > .btn-positive').trigger('click')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([props.modelValue + props.step])
    })
})