import Slider from './Slider.vue'
import { action } from "@storybook/addon-actions"

export default {
    title: 'Slider',
    component: Slider
}


const template = (args) => ({
    components: { Slider },
    data () {
        return { args }
    },
    template: '<Slider />'
})

export const Default = template.bind({})