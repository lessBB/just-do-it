<template>
  <div>
    search
    <!-- param参数{{this.$route.params.keywords}} -->
    <!-- query参数{{this.$route.query.keywords1}} -->
    <br>
    <!-- param参数{{keywords}} -->
    query参数{{keywords1}}
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keywords','keywords1']
}
</script>

<style lang="less" scoped>
    
</style>
