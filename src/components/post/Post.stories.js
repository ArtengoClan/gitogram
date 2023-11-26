import Post from './Post.vue'
import Feed from '@/components/feed/Feed.vue'
import PostHeader from '@/components/postHeader/PostHeader.vue'
import PostStats from '@/components/postStats/PostStats'

export default {
    title: 'Post',
    component: {Post},
    argTypes: {
        username: {
            control: { type: 'text' }
        },
        userImg: {
            control: { type: 'text' }
        },
        star: {
            control: { type: 'text' }
        },
        fork: {
            control: { type: 'text' }
        },
    }
}

const template = (args) => ({
    components: {Post, Feed, PostHeader, PostStats},
    data () {
        return{ args }
    },
    template: `
        <Post v-bind="args">
            <template #postContent>
                <span class="post-content_bold">Язык</span>
                Описание
            </template>
        </Post>
    `
})

export const Default = template.bind({})

Default.args = {
    username: 'UserName',
    userImg: 'https://kartinki.pics/uploads/posts/2022-12/1671764817_kartinkin-net-p-kartinka-litso-cheloveka-dlya-detei-oboi-16.png',
    star: '157',
    fork: '4'
}