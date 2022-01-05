<template>
  <section>
    <h2>Ajouter un ticket</h2>
    <form v-on:submit.prevent="addTicket">
      <ticket-form :the-ticket="ticket"></ticket-form>
      <button type="submit" class="btn btn-primary">Create</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import TicketForm from "../components/ticket-form.vue";
import Axios from "Axios";
export default {
  components: { TicketForm },
  layout: "vue-crud",
  data() {
    return {
      ticket: {name: "", description: "", status: "", admin_id: "", user_id: "" },
    };
  },
  methods: {
    addTicket(ticket) {
      console.log(ticket.name)
      console.log("addTicket" + this.ticket);
      Axios.put("http://localhost:8080/tickets", {
        name: ticket.name,
        description: ticket.description,
        status: ticket.status,
        admin_id: ticket.admin_id,
        user_id: ticket.user_id }
      ).then(
          (response) => {
            console.log(this.ticket);
          }
      );
    },
  },
};
</script>
