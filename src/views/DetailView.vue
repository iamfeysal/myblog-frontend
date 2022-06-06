<template>
  <div class="detail">
    <!-- detail templates-->
    <BlogDetail/>
    <!-- home templates-->
  </div>
</template>
<script>
// @ is an alias to /src

import BlogDetail from "@/components/BlogDetail.vue";
export default {
  name: 'HomeView',
  components: {
    BlogDetail,
  }
}
</script>