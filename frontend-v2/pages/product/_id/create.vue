<template>
  <section>
    <h2>Ajouter un ticket</h2>
    <form v-on:submit.prevent="createProduct">
      <ticket-form :the-ticket="ticket"></ticket-form>
      <button type="submit" class="btn btn-primary">Create</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import TicketForm from "../../../components/ticket-form.vue";

export default {
  components: { TicketForm },
  layout: "vue-crud",
  data() {
    return {
      ticket: { name: "", description: "", status: "" },
    };
  },
  methods: {
    // addTicket() {
    //   console.log("addTicket" + this.ticket);
    //   let uri = "http://localhost:8080/tickets";
    //   this.axios.put(uri, this.ticket).then((response) => {
    //     router.push({
    //       tickets: "tickets",
    //     });
    //     console.log(response);
    //   });
    // },
    createProduct (e) {
      this.$store.commit('ADD_PRODUCT', this.product)
      this.$router.push('/')
    }
  },
};
</script>
