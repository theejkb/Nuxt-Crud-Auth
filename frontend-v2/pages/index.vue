<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Mes tickets</h1>
    </div>
    <div class="actions">
      <nuxt-link class="btn btn-default" :to="{ path: '/index_users' }">
        Go to users
      </nuxt-link>
      <nuxt-link class="btn btn-default" :to="{ path: '/create_ticket' }">
        <span class="glyphicon glyphicon-plus"></span>
        Add ticket
      </nuxt-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">ticket name</label>
        <input
          v-model="searchKey"
          class="form-control"
          id="search-element"
          requred
        />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Ticket Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Admin Name</th>
          <th>User Name</th>
          <th class="col-sm-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- <tr v-for="ticket in tickets" :key="ticket.id"> -->
          <!-- <td>
            <div>{{ ticket.id + " - " + ticket.name }}</div>
          </td>
          <td>{{ ticket.description }}</td>
          <td>{{ ticket.status }}</td>
          <td>{{ ticket.admin.firstname + " " + ticket.admin.lastname }}</td>
          <td>{{ ticket.user.firstname + " " + ticket.user.lastname }}</td>
          <td> -->
          <td>
            <div>1 - Crud</div>
          </td>
          <td>Build an App with Nuxt</td>
          <td>Progress...</td>
          <td>Steven</td>
          <td>Antoine</td>
          <td>
            <div class="btn margin-5 btn-info btn-xs" @click="sendMail(ticket)">
              <i class="far fa-edit"></i>Send Email
            </div>
            <nuxt-link
              class="margin-5 btn btn-warning btn-xs"
              :to="{ path: '/edit_ticket' }"
            >
              <i class="far fa-edit"></i>Edit
            </nuxt-link>

            <div
              @click="deleteTicketById(ticket.id)"
              class="btn margin-5 delete btn-danger btn-xs"
            >
              <span class="glyphicon"></span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>2 - API</div>
          </td>
          <td>Build an API with Java Spring</td>
          <td>Finish</td>
          <td>Antoine</td>
          <td>Steven</td>
          <td>
            <div class="btn margin-5 btn-info btn-xs" @click="sendMail(ticket)">
              <i class="far fa-edit"></i>Send Email
            </div>
            <nuxt-link
              class="margin-5 btn btn-warning btn-xs"
              :to="{ path: '/edit_ticket' }"
            >
              <i class="far fa-edit"></i>Edit
            </nuxt-link>

            <div
              @click="deleteTicketById(ticket.id)"
              class="btn margin-5 delete btn-danger btn-xs"
            >
              <span class="glyphicon"></span>
            </div>
          </td>
        </tr>
        <!-- </tr> -->
      </tbody>
    </table>
  </section>
</template>

<script>
import Axios from "Axios";

export default {
  created() {},
  layout: "vue-crud",
  data() {
    return { searchKey: "", tickets: {} };
  },
  computed: {
    filteredtickets() {
      return this.tickets.filter(
        ticket =>
          ticket.description
            .toLowerCase()
            .indexOf(this.searchKey.toLowerCase()) !== -1
      );
    }
  },
  methods: {
    deleteTicketById(id) {
      let foundIndex = this.tickets.findIndex(p => p.id === id);
      Axios.delete("http://localhost:8080/ticket/?id=" + id).then(response => {
        this.tickets.splice(foundIndex, 1);
        console.log(this.tickets);
      });
    },
    updateTicket(ticket) {
      let foundIndex = this.tickets.findIndex(p => p.id === this.tickets.id);
      console.log("update " + foundIndex + this.tickets.name);
      //
    },
    sendMail(ticket) {
      let foundIndex = this.tickets.findIndex((p) => p.id === ticket.id);
      Axios.put("http://localhost:8080/sendMail/?email=" + ticket.user.email +"&status=" + ticket.status).then(
          (response) => {
            this.tickets.splice(foundIndex, 1);
            console.log(this.tickets);
          }
      );
    },
  },

  components: {}
};
</script>
<style>
.margin-5 {
  margin-right: 5px;
}
.title {
  text-align: center;
}
nav {
  display: flex;
  justify-content: flex-end;
}
.login {
  display: flex;
  align-items: center;

  justify-content: center;
}
.btn-control {
  display: flex;
}
.btn-edit {
  margin-right: 15px;
}

.form-group {
  max-width: 500px;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}

.glyphicon-euro {
  font-size: 12px;
}
</style>
