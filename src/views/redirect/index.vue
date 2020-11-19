<template>
  <div>重定向</div>
</template>

<script>
import $apis from "@/api/index";

export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    $apis.test.redirect().then((res) => {
      this.loading = false;
      console.log(this.loading);
    });
  },
  methods: {},
};
</script>

<style>
</style>