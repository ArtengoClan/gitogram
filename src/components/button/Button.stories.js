import Button from './Button.vue'

export default {
    title: 'Button',
    component: {Button},
    argTypes: {
        hoverText: {
            control: { type: 'text' }
        }
    }
}

const template = (args) => ({
    components: {xButton:Button},
    data () {
        return{ args }
    },
    template: `
        <x-button v-bind="args">Following</x-button>
    `
})

export const Default = template.bind({})

Default.args = {
    hoverText: 'Unfollow'
}