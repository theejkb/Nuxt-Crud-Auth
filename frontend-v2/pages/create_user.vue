<template>
  <section>
    <h2>Ajouter un ticket</h2>
    <form v-on:submit.prevent="addUser">
      <user-form :the-user="user"></user-form>
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
      user: {},
    };
  },
  methods: {
    addUser(user) {
      Axios.put("http://localhost:8080/tickets", {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role,
        telephone: user.telephone,
        username: user.username,
        }
      ).then(
          (response) => {
            console.log(this.user);
          }
      );
    },
  },
};
</script>
