import Feed from './Feed.vue'

export default {
    title: 'Feed',
    component: {Feed}
}

const template = (args) => ({
    components: {Feed},
    data () {
        return{ args }
    },
    template: `
        <Feed></Feed>
    `
})

export const Default = template.bind({})

Default.args = {
}