<template>
  <!-- Content
   ================================================== -->
  <div id="content-wrap">
    <div class="row">
      <div id="main" class="eight columns">
        <article class="entry">
          <header class="entry-header">
            <div class="wp">
              <ul  class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="">post detail</a></li>
              </ul>
            </div>
            <h2 class="entry-title">
              {{ $route.params.title }}
            </h2>
            <div class="entry-meta">
              <ul>
                <li ><i class="fa fa-clock-o fa-lg" rel="category tag"></i>
                  {{formatDate($route.params.publish)}}
                </li>&nbsp;
                <li>{{$route.params.read_time}}</li>&nbsp;
                <li><i class="fa fa-comments-o fa-lg" title="number of comments"></i>
                  {{$route.params.total_comment}}
                </li>
              </ul>
            </div>
          </header>
          <div class="entry-content-media">
          </div>
          <div class="entry-content">
            <p class="lead"></p>
          </div>
          <p class="tags">
            <span>Tagged in </span>:
            <a href="" class="badge badge-pill badge-info">{{$route.params.tags}}
            </a>
          </p>
          <ul class="post-nav group">
            <li class="prev">
              <strong>Previous Article</strong>
              <a rel="prev" href=""></a>
            </li>
            <li class="next">
              <strong>Next Article</strong>
              <a rel="next" href=""></a>
            </li>
          </ul>
          <div class="share">
          </div>
        </article>
        <br>
        <!-- Comments
 ================================================== -->
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">Comments:
                  <span>{{$route.params.total_comment}}</span>
                </a>
              </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse">
              <ul class="list-group">
                <li>
                  <a href="#"></a>
                  <span><small class="text-muted"></small></span><br />
                  {{$route.params.comment}}

                </li>
                <div style="padding-left: 40px">
                  <span><small class="text-muted">ago </small></span><br /><br />
                </div>
                <hr>
              </ul>
              <div class="panel-footer">
                <form method="post">
                  <div class="form-row">
                    <div class="col-sm">
                      <div class="form-group">
                      </div>
                    </div>
                  </div>
                  <input class="btn btn-primary" type="submit" value="comment">
                  <div class="d-flex justify-content-end">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- main End -->
      <div id="sidebar" class="four columns">
        <div class="widget widget_popular">
          <h3>More Similar Post</h3>
          <ul class="link-list">
            <li><a href="">
            </a>
            </li>
            There are no similar posts yet.
          </ul>
        </div>
      </div> <!-- end sidebar -->

    </div> <!-- end row -->
  </div> <!-- end content-wrap -->
</template>

<script>
import moment from "moment";

export default {
  name: "BlogDetail",

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/yyyy')
      }
    },
  },
}
</script>

<style>

</style>