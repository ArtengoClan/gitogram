import feeds from './feeds.vue'

export default {
    title: 'feeds',
    component: {feeds}
}

const template = (args) => ({
    components: {feeds},
    data () {
        return{ args }
    },
    template: `
        <feeds v-bind="args"></feeds>
    `
})

export const Default = template.bind({})

Default.args = {

}