<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld/>-->

    <div id="content">
      <header id="top">
        <div class="row">
          <div class="header-content twelve columns">
            <h1 id="logo-text"><a href="/">PyDevOps</a>
            </h1>
            <p id="intro"> <strong> A blog about <strong>Python</strong> and <strong>DevOps</strong>.</strong></p>
          </div>
        </div>
        <nav id="nav-wrap">
          <a class="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show Menu
          </a>
          <a class="mobile-btn" href="#" title="Hide navigation">Hide Menu</a>
          <div class="row"></div>
        </nav> <!-- end #nav-wrap -->
      </header> <!-- Header End -->

      <!--    home templates-->
      <HomeBlog/>
      <!--    home templates-->

      <!-- Footer
      ================================================== -->
      <footer>
        <div class="row">
          <div class="twelve columns">
            <ul class="social-links">
              <li><a href="https://github.com/iamfeysal" target="_blank" rel="noopener">
                <i class="fa fa-github-square fa-lg"></i></a></li>
              <li><a href="https://www.linkedin.com/in/feysal-hassan-05594615b/" target="_blank" rel="noopener">
                <i class="fa fa-linkedin-square fa-lg"></i></a></li>
            </ul>
          </div>
          <div class="six columns info">
            <h3>About Somali Developer</h3>

            <p>A site where we will learn all about Python, Django, DevOps tools
              such as Docker and Kubernetes
            </p>

            <p>If you have more information to tell me, either about project
              collaboration or any other things, kindly hit me up on my
              social media platforms above.</p>
          </div>

          <div class="four columns">
            <img src="../assets/dark_logo_transparent_background.png" alt="logo" class="img-fluid">
<!--            <img src="" alt="logo" class="img-fluid">-->
          </div>

          <div class="two columns">
            <h3 class="social">Navigate</h3>

            <ul class="navigate group">
              <li><a href="/">Home</a></li>
            </ul>

          </div>
          <p class="copyright">&copy; Copyright 2020 Somali Developer. &nbsp;
            by <a title="iamfeysal" href="https://iamfeysal.com" rel="noopener" target="_blank"> iamfeysal </a>.</p>

        </div> <!-- End row -->

        <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-chevron-up"></i></a></div>

      </footer> <!-- End Footer-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeBlog from "@/components/HomeBlog.vue";

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    HomeBlog,
  }
}
</script>
