<template>
    <div>
        <div class="service-container">
            <template v-for="(blog, index) in blogList">
                <div class="singleservice" v-bind:key="index">
                    <img class="serviceicon"
                         src="http://www.freeiconspng.com/uploads/book-stack-icon--icon-search-engine-16.png">
                    <h2 class="servicetitle">
                        <a style="cursor: pointer" @click="redirectDetail(blog.id)">
                            {{blog.title}}
                        </a>
                    </h2>
                    {{ blog.content }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'BlogIndex',
  data () {
    return {
      blogList: null
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Token ' + store.state.tokenData
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
      this.$emit('catchId', id)
      this.$router.push(`/blog/${id}/`)
    }
  }
}
</script>

<style scoped>
    body {
        margin: 0px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .services-wrapper {
        width: auto;
        min-height: 400px;
        padding: 25px;
    }

    .service-container {
        text-align: center;
        margin-top: 25px;
    }

    .singleservice {
        display: inline-block;
        width: 25%;
        height: 100%;
        background-color: #f3f3f3;
        padding: 25px;
        color: #b2b2b2;
        font-family: avenir;
        text-align: left;
        margin-bottom: 15px;
        padding: 40px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 5px solid skyblue;
        border-radius: 10px;
    }

    .singleserviceb {
        display: inline-block;
        width: 25%;
        height: 100%;
        background-color: #f3f3f3;
        padding: 25px;
        color: #b2b2b2;
        font-family: avenir;
        text-align: left;
        margin-bottom: 15px;
        padding: 40px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 5px solid orange;
        border-radius: 10px;
    }

    @media (max-width: 500px) {
        .singleservice, .singleserviceb {
            width: 100%;
        }
    }

    h2.servicetitle {
        font-family: century gothic;
        font-size: 16pt;
        font-weight: normal;
        letter-spacing: 1px;
        padding-bottom: 0px;
        text-align: center;
        text-transform: uppercase;
        color: #8c8c8c;
    }

    img.serviceicon {
        width: 20%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 15px;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: .5;
    }

</style>
