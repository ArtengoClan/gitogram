import Comment from './Comment.vue'

export default {
    title: 'Comment',
    components: Comment,
}

export const defaultView = {
    render: (args) => ({
      components: { Comment },
      setup() {
        return { args };
      },
      template: '<Comment v-bind="args" />',
    }),
    args: {
        username: 'joshua_l',
        text: 'Enable performance measuring in production, at the users request'
    },
  };
