<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                           href="#list-home" role="tab" aria-controls="home">All Blogs</a>
                    </div>
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(blog,index) in blogList" v-bind:key="index">
                            <a href="#" @click="redirectDetail(blog.id)">{{ blog.title }}</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogIndex',
  data () {
    return {
      blogList: null
    }
  },
  created () {
    axios.get('http://localhost:8000/blogs/')
      .then((response) => {
        this.blogList = response.data
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    redirectDetail (id) {
      this.$router.push(`/blog/${id}/`)
    }
  }
}
</script>

<style scoped>
    .container {
        padding: 40px;
    }

    .page-header {
        font-size: 30px;
        font-style: oblique;
        color: brown;
    }

    .comment-container {
        position: relative;
        max-width: 700px;
        margin: 50px auto;
        overflow: hidden;
        font-family: serif;
    }

    .meta {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .avatar {
        border-radius: 50%;
        width: 40px;
    }

    .name {
        margin-left: 5px;
        transform: translateY(-100px);
        display: inline-block;
        color: #2d69eb;
        transition: all 0.3s;
    }

    .placeholder {
        position: absolute;
        top: 50%;
        font-size: 18px;
        color: #999999;
        left: 60px;
        margin-top: -15px;
    }

    textarea {
        height: 70px;
        transition: all 0.3s;
        font-size: 18px;
        box-sizing: border-box;

        color: #ffffff;
    }

    .btns {
        position: absolute;
        bottom: 10px;
        left: 10px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }

    textarea {
        height: 50px;
        color: #444;
        padding-top: 60px;
        padding-bottom: 40px;
    }

    .placeholder {
        display: none;
    }

    .btns {
        opacity: 1;
        visibility: visible;
    }
</style>
