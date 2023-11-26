import Toggler from './Toggler.vue'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Toggler',
    components: Toggler,
}

export const defaultView = {
    render: (args) => ({
      components: { Toggler },
      setup() {
        return { args };
      },
      template: '<Toggler v-bind="args" @onToggle="action" />',
      methods: { action: action('isOpened') }
    }),
    args: {
      
    },
  };


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// export const Primary = {
//   render: (args, { argTypes }) => ({
//     components: { Toggler },
//     props: Object.keys(argTypes),
//     template: '<Toggler  @onToggle="onClick" />',
//   }),
//   args: {

//   },
// };




// export const defaultView = {
//     render: (args) => ({
//       components: { Toggler },
//       setup() {
//         return { args };
//       },
//       template: '<Toggler @onToggle="onClick" />',
//     }),
//     args: {

//     },
//   };

// import Toggler from './Toggler.vue'
// import {action} from '@storybook/addon-actions'

// const methods = {
//     onAction: action("onAction")
// }

// export default {
//     title: "Toggler",
//     components: {Toggler}
// }

// export const defaultView = () => ({
//     components: {Toggler},
//     template: '<Toggler @onToggle="onAction" />',
//     methods
// })