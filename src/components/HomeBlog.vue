<template>
  <!-- Content
     ================================================== -->
  <div id="content-wrap">
    <div class="row">
      <div id="main" class="eight columns">
        <article class="entry" v-for="post in posts" :key="post.id">
          <header class="entry-header">
            <h2 class="entry-title">
              <router-link :to="{
                name: 'detail', params: {id:
                post.id, title:
                post.title,
                slug: post.slug,
                publish: post.publish,
                read_time: post.read_time,
                }}">
                {{ post.title }}
              </router-link>
            </h2>
            <div class="entry-meta">
              <ul>
                <li>
                  <i class="fa fa-calendar fa-lg"></i>
                  {{ formatDate(post.publish)}}</li>
                &nbsp;
                <li>
                </li>
                <li>
                  <i class="fa fa-refresh"></i>
                  {{ formatDate(post.updated) }}</li>
                &nbsp;
                <li>
                  <i class="fa fa-clock-o fa-lg" title="read time in minutes">
                    {{ post.read_time }}
                  </i>
                </li>
              </ul>
            </div>
          </header>
          <div class="entry-content">
            <p class="lead">{{ post.description }}</p>
          </div>
        </article> <!-- end entry -->
      </div> <!-- end main -->

      <div id="sidebar" class="four columns">
        <div class="side-wrap">
          <div class="widget widget_categories">
            <div>
              <h3 >About Me</h3>
              <p>My Name is <strong>Feisal Ibrahim.
              </strong>I'm a Python and DevOps architect living and working in Nairobi, Kenya.
              </p>
              <a href="https://iamfeysal.com">more and interesting stuffs</a>
              <div>
                <ul class="colorlib-social-icons">
                  <li>
                    <a href="https://github.com/iamfeysal" target="_blank" rel="noopener">
                      <i class="fa fa-github-square fa-lg">&nbsp;Github</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr>
          <div class="widget widget_popular">
            <h3>Popular Post</h3>
            <ul class="link-list">
              <div v-for="popular_post in popularPosts" :key="popular_post.id">
                <li>
                  <router-link :to="{name: 'detail', params: {id: popular_post.id, title: popular_post.title, slug: popular_post.slug}}">
                    {{ popular_post.title }}
                  </router-link>
                </li>
                <div v-if="!popular_post">No Request</div>
              </div>
            </ul>
          </div>
          <div class="widget widget_popular">
            <h3>Most commented posts</h3>
            <ul class="link-list">
              <div v-for="most_commented_post in mostCommentedPosts" :key="most_commented_post.id">
                <li>
                  <a href="">
                    {{ most_commented_post }}
                  </a>
                </li>
                <div v-if="!most_commented_post">No Request</div>
              </div>
            </ul>
          </div>
          <div class="widget widget_tags">
            <h3>Post Tags.</h3>
            <div class="tagcloud group">
              <a href="">
                post tags
              </a>
            </div>
          </div>
        </div>
      </div> <!-- end sidebar -->
    </div> <!-- end row -->

  </div> <!-- end content-wrap -->

  <!--  <BlogDetail/>-->
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: "HomeBlog",

  data() {
    return {
      // posts
      posts: [],
      popularPosts:[],
      mostCommentedPosts:[],
    }
  },
  mounted () {
    this.get_Posts();
    this.get_Poular_Posts();
    this.get_Most_CommentedPosts();
  },
  methods: {
    get_Posts() {
      axios({
        method:'get',
        url: 'http://127.0.0.1:8000/posts_list_resource',
      }).then(response => this.posts = response.data);
    },
    get_Poular_Posts() {
      axios({
        method:'get',
        url: 'http://127.0.0.1:8000/popular_posts_resource',
      }).then(response => this.popularPosts = response.data);
    },
    get_Most_CommentedPosts() {
      axios({
        method:'get',
        url: 'http://127.0.0.1:8000/most_commented_posts_resource',
      }).then(response => this.mostCommentedPosts = response.data);
    },
    formatDate(value){
      if (value) {
        return moment(String(value)).format('DD/MM/yyyy')
      }
    },
  }
}

</script>

<style>

</style>