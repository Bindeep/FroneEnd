<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Post Title</label>
                <input v-model="articleTitle" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter Article Title">
                <small id="emailHelp" class="form-text text-muted">Title for your Article
                </small>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea v-model="articleContent" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button @click="postArticle" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ArticlePost',
  props: ['id'],
  data () {
    return {
      articleTile: null,
      articleContent: null
    }
  },
  methods: {
    postArticle () {
      alert(this.id)
      // axios.post(`http://localhost:8000/blog/${this.id}/article/create/`, {
      //   name: this.articleTile,
      //   content: this.articleContent
      // })
    }
  }
}
</script>

<style scoped>

</style>
