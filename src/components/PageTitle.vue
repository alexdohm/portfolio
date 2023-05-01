<template>
  <div class="q-ma-md q-ma-sm-none">
    <h3 class="text-center q-ma-md">
      <slot></slot>
    </h3>
    <div>
      <slot name="description"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "PageTitle"
}
</script>

<style scoped>

</style>