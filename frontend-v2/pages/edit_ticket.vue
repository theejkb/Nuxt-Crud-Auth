<template>
  <section>
    <h2>Edit product</h2>
    <form v-on:submit.prevent="updateTicket">
      <ticket-form :the-ticket="ticket"></ticket-form>
      <button type="submit" class="btn btn-primary">Save</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import TicketForm from "../components/ticket-form.vue";

export default {
  components: { TicketForm },
  layout: "vue-crud",
  data() {
    // deep-clone the product (using JSON stringify + parse) to prevent that changes are applied directly.
    // Direct manipulation goes wrong when validation error occurs and user cancels.
    // Only change via mutations.
    return {
      product: JSON.parse(
        JSON.stringify(
          this.state.ticket.find(
            (ticket) => ticket.id === this.params.id
          )
        )
      ),
    };
  },
  methods: {
    updateTicket(e) {
      this.commit("UPDATE_PRODUCT", this.product);
      this.push("/");
    },
  },
};
</script>
