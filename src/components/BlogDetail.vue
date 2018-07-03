<template>
    <div class="container">
        <template v-for="(article, index) in articleList">
            <div class="panel panel-primary" v-bind:key="index">
                <div class="panel-heading " role="tab" :id="'heading'+index">
                    <h4 class="panel-title">
                        <a @click="likeArticle(article.id)" class="btn btn-success btn-sm pull-right"
                           style="position: relative; top: -5px">
                            <span class="glyphicon glyphicon-thumbs-up">
                            </span>{{article.has_user_liked? 'Unlike':'Like'}}
                        </a>
                        <a role="button" data-toggle="collapse" :href="'#collapse'+index" aria-expanded="true"
                           :aria-controls="'collapse'+index" class="trigger collapsed">
                            {{article.name}}
                        </a>
                    </h4>
                </div>
                <div :id="'collapse'+index" class="panel-collapse collapse" role="tabpanel"
                     :aria-labelledby="'heading'+index">
                    <div class="panel-body">
                        <h4 style="margin-bottom: 50px; font-family: fantasy">{{article.content}}</h4>
                        <div class="pull-right">
                            <p>Publish Status:<a style="cursor: pointer"
                                                 @click="changeStatus(article.id, {'is_published': !article.is_published})">{{article.is_published?
                                'Published':'Unpublished'}}</a></p>
                            <p>Archive Status:<a style="cursor: pointer"
                                                 @click="changeStatus(article.id, {'is_archived': !article.is_archived})">{{article.is_archived?
                                'Archived':'Unarchived'}}</a></p>
                            <p>Author:{{article.author_name}}</p>
                            <p>Created At:{{article.created_at}}</p>
                        </div>
                        <div class="col-lg-6">
                            <div style="margin-bottom: 30px">
                            <h3>Comments</h3>
                            <template v-for="(comment, index) in article.comments">
                            <p v-bind:key="index">
                                {{comment.commented_by_name}}=> {{comment.content}}
                                <a>Delete</a>
                            </p>
                            </template>
                            </div>
                            <h4 class="heading" style="color: darkred">Add A Comment Below</h4>
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control status-box" rows="3"
                                              placeholder="Enter your comment here..."></textarea>
                                </div>
                            </form>
                            <div class="button-group pull-right">
                                <a @click="postComment(article.id)" style="cursor:pointer;" class="btn btn-primary">Post</a>
                            </div>
                            <ul class="posts">
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  name: 'BlogDetail',
  props: ['id'],
  data () {
    return {
      articleList: null
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Token ' + store.state.tokenData
    this.getArticle()
  },
  methods: {
    getArticle () {
      axios.get(`http://localhost:8000/blog/${this.id}/articles/`)
        .then((response) => {
          this.articleList = response.data
        })
        .catch((error) => {
          alert(error)
        })
    },
    changeStatus (articleId, data) {
      axios.patch(`http://localhost:8000/blog/${this.id}/articles/${articleId}/`, data)
        .then((response) => {
          this.getArticle()
        })
        .catch((error) => {
          alert(error)
        })
    },
    likeArticle (id) {
      axios.post(`http://localhost:8000/article/${id}/like/`)
        .then((response) => {
          this.getArticle()
        })
        .catch((error) => {
          alert(error)
        })
    },
    postComment (id) {
      console.log(this.articleList)
    }
  }
}
</script>

<style scoped>
    body {
        margin: 50px;
    }

    a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }

    .controls {
        margin-bottom: 10px;
    }

    .collapse-group {
        padding: 10px;
        border: 1px solid darkgrey;
        margin-bottom: 10px;
    }

    .panel-title .trigger:before {
        content: '\e082';
        font-family: 'Glyphicons Halflings';
        vertical-align: text-bottom;
    }

    .panel-title .trigger.collapsed:before {
        content: '\e081';
    }
</style>
