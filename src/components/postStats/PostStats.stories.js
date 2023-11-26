import PostStats from './PostStats.vue'

export default {
    title: 'PostStats',
    component: {PostStats},
    argTypes: {
        star: {
            control: { type: 'text' }
        },
        fork: {
            control: { type: 'text' }
        },
    }
}

const template = (args) => ({
    components: {PostStats},
    data () {
        return{ args }
    },
    template: `
        <PostStats v-bind="args"></PostStats>
    `
})

export const Default = template.bind({})

Default.args = {
    star: '157',
    fork:'4'
}