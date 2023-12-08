<template>
  <!-- <Stories /> -->
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
                    <li class="stories-item" v-for="trending in trendings" :key="trending.id">
                        <StoryUserItem @onPress="handlePress(trending.id)" :avatar="trending.owner?.avatar_url" :username="trending.owner?.login" />
                    </li>
                </ul>
            </template>
        </Topline>
    </div>
    <Post v-for="trending in trendings" :key="trending.id" :star="trending.stargazers_count" :fork="trending.forks_count" :username="trending.owner?.login" :userImg="trending.owner?.avatar_url">
        <template #postContent>
            <span class="post-content_bold">{{ trending.language }}</span>
            {{ trending.description }}
        </template>
    </Post>
</template>

<!-- SCRIPT -->
<script>
import Topline from '@/components/topline/Topline.vue'
import StoryUserItem from '@/components/storyUserItem/StoryUserItem.vue'
import Post from '@/components/post/Post.vue'
import Icon from '@/icons/Icon.vue'
// import Stories from '@/components/stories/Stories.vue'
import stories from './data.json'
// import * as api from '../../api'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'feeds',
  components: {
    Topline,
    Icon,
    StoryUserItem,
    Post
    // Stories
  },
  data () {
    return {
      stories
      // items: []
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    handlePress (id) {
      this.$router.push({ name: 'stories', params: { initialSlide: id } })
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings.data
    })
  },
  async created () {
    try {
      // const { data } = await api.trandings.getTrendings()
      // this.items = data.items
      await this.fetchTrendings()
    } catch (error) {
      console.log(error)
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
.post-content_bold {
  font-weight: 700;
  line-height: 22px;
}
</style>
