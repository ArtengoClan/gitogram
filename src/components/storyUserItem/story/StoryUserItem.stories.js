import StoryUserItem from './StoryUserItem.vue'

export default {
    title: 'StoryUserItem',
    component: {StoryUserItem},
    argTypes: {
        avatar: {
            control: { type: 'text' }
        },
        username: {
            control: { type: 'text' }
        },
    }
}

const template = (args) => ({
    components: {StoryUserItem},
    data () {
        return{ args }
    },
    template: `
        <StoryUserItem v-bind="args"/>
    `
})

export const Default = template.bind({})

Default.args = {
    avatar: 'https://kartinki.pics/uploads/posts/2022-12/1671764817_kartinkin-net-p-kartinka-litso-cheloveka-dlya-detei-oboi-16.png',
    username: 'UserName'
}