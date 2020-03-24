<template>
  <div>
    <div v-if="list.length">
      <Post v-for="(item, $index) in list" :key="$index" :post="item"/>
    </div>
    <infinite-loading @infinite="infiniteHandler"/>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import Post from '@/components/Post.vue'
  // import moment from "moment"
  // import axios from "axios"
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Posts',
    components: {
      Post,
      InfiniteLoading
    },
    data() {
      return {
        numberPage: 1,
        list: [],
      }
    },
    methods: {
      infiniteHandler($state) {
        this.fetchPosts(this.numberPage).then(() => {

          // this.fetchPosts(this.numberPage)
          if (this.page.length) {
            this.numberPage += 1
            this.list.push(...this.page)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      },
      ...mapActions(['fetchPosts'])
    },
    computed: {
      ...mapGetters(['page'])
    }



    // async mounted () {
    //   this.fetchPosts()
    //
    //   this.morePosts()

    // function sendRequest (method, url) {
    //   return fetch(url).then(response => {
    //     return response.json()
    //   })
    // }

    // sendRequest('GET', requestUrl)
    //   .then(res => {
    //     this.posts = res
    //     this.posts.forEach(function(post) {
    //       post.createdAt = moment(String(post.createdAt)).format('DD MMMM YYYY')
    //     })
    //   })
    //   .catch(err => console.log(err))

    // window.addEventListener('scroll', () => {
    //   if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) {
    //     this.pageCounter++
    //     axios
    //       .get(`https://5e63f7a3782c970014a89ee5.mockapi.io/api/post?page=${this.pageCounter}&limit=10`)
    //       .then(response => {
    //         let newPosts = response.data,
    //           oldPosts = this.posts
    //         newPosts.forEach(function(dataItem) {
    //           let idCounter = 0
    //               oldPosts.forEach(function (postItem) {
    //             if (dataItem.id === postItem.id) {
    //               idCounter++
    //             }
    //           })
    //           if (idCounter === 0) {
    //             dataItem.createdAt = moment(String(dataItem.createdAt)).format('DD MMMM YYYY')
    //             oldPosts.push(dataItem)
    //           }
    //         })
    //       })
    //   }
    // })
    // }
  }

</script>

<style>
</style>
