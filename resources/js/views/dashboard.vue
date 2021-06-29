<template>
  <div>dashboard</div>
  <button @click.prevent="_logout()">logout</button>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions({ _logout: "SIGN_OUT" }),
  },
};
</script>