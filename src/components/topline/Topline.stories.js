import Topline from './Topline.vue'


export default {
    title: 'Topline',
    component: {Topline},
    argTypes: {
        content: {
            control: {
              type: 'text'
            },
            defaultValue: 'content'
          }
    }
}

const template = (args) => ({
    components: {Topline},
    data () {
        return{ args }
    },
    template: `
        <Topline>
            <template #headline>headline</template>
            <template v-if="${'content' in args}" v-slot:content>${args.content}</template>
        </Topline>
    `
})

export const Default = template.bind({})

Default.args = {
    content: 'content'
}
