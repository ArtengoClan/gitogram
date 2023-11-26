import PostHeader from './PostHeader.vue'

export default {
    title: 'PostHeader',
    component: {PostHeader},
    argTypes: {
        headerName: {
            control: { type: 'text' }
        },
        headerImg: {
            control: { type: 'text' }
        },
    }
}

const template = (args) => ({
    components: {PostHeader},
    data () {
        return{ args }
    },
    template: `
        <PostHeader v-bind="args"></PostHeader>
    `
})

export const Default = template.bind({})

Default.args = {
    headerName: 'User_1',
    headerImg:'https://kartinki.pics/uploads/posts/2022-12/1671764817_kartinkin-net-p-kartinka-litso-cheloveka-dlya-detei-oboi-16.png'
}