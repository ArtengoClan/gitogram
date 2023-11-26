import Progress from './Progress.vue'
import { action } from "@storybook/addon-actions"

export default {
    title: 'Progress',
    component: Progress,
    argTypes: {
        onFinish: {
            action: "onFinish",
            description:"fires when progress reaches the end"
        }
    }
}


const template = (args) => ({
    components: { xProgress: Progress },
    data () {
        return { args }
    },
    template: '<x-progress  @onFinish="args.onFinish" />'
})

export const Default = template.bind({})