<template>
    <div class="topline">
        <Topline>
            <template #headline>
                <h1>Gitogram/</h1>
                <div class="icon">
                        <Icon name="Home" />
                        <Icon name="Person" />
                        <Icon name="Exit" />
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <StoryUserItem @onPress="handlePress(story.id)" :avatar="story.imgUrl" :username="story.name" />
                    </li>
                </ul>
            </template>
        </Topline>
    </div>
    <Post />
</template>

<!-- SCRIPT -->
<script>
import Topline from '@/components/topline/Topline.vue'
import StoryUserItem from '@/components/storyUserItem/StoryUserItem.vue'
import Post from '@/components/post/Post.vue'
import Icon from '@/icons/Icon.vue'
import stories from './data.json'
export default {
  name: 'feeds',
  components: {
    Topline,
    Icon,
    StoryUserItem,
    Post
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>
.topline {
    margin-bottom: 32px;
    min-height: 276px;
    background: #fafafa;
    box-shadow: 0px 0.33000001311302185px 0px 0px #3C3C434A;
}
.icon {
    display: flex;
    align-items: center;
    gap: 24px;
}
.stories {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.stories-item {
    width: 92px;
    height: 116px;
}
</style>
