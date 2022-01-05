<template>
  <section>
    <h2>Edit product</h2>
    <form v-on:submit.prevent="updateUser">
      <user-form :the-user="user"></user-form>
      <button type="submit" class="btn btn-primary">Save</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import UserForm from "../components/user-form.vue";

export default {
  components: { UserForm },
  layout: "vue-crud",
  data() {
    // deep-clone the product (using JSON stringify + parse) to prevent that changes are applied directly.
    // Direct manipulation goes wrong when validation error occurs and user cancels.
    // Only change via mutations.
    return {
      product: JSON.parse(
        JSON.stringify(
          this.state.user.find(
            (product) => user.id === this.params.id
          )
        )
      ),
    };
  },
  methods: {
    updateUser(e) {
      this.commit("UPDATE_PRODUCT", this.product);
      this.push("/");
    },
  },
};
</script>
