<template>
  <section>
    <div class="actions">
      <nuxt-link class="btn btn-default" @click="fetch" :to="{ path: '/' }">
        Go to tickets
      </nuxt-link>
      <nuxt-link class="btn btn-default" :to="{ path: '/create' }">
        <span class="glyphicon glyphicon-plus"></span>
        Add user
      </nuxt-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">User</label>
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
          <th>ID</th>
          <th>Firstname and Lastname</th>
          <th>Email</th>
          <th>Role</th>
          <th>Telephone</th>
          <th>Username</th>
          <th class="col-sm-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <div>{{ user.id }}</div>
          </td>
          <td>{{ user.firstname + ' ' + user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.telephone }}</td>
          <td>{{ user.username }}</td>
          <td>
            <nuxt-link class="btn btn-warning btn-xs" :to="{ path: '/edit_user' }">
              <i class="far fa-edit"></i>Edit
            </nuxt-link>
            <div
              @click="deleteUserById(user.id)"
              class="btn delete btn-danger btn-xs"
            >
              X<i class="far fa-trash-alt"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Axios from "Axios";

export default {
  async fetch() {
    // Fetche data from API local 
    this.users = await fetch(
      "http://localhost:8080/users/all"
    ).then((res) => res.json());
    console.log(this.users);
  },
  created() {
  },
  layout: "vue-crud",
  data() {
    return { searchKey: "", users: {} };
  },
  computed: {
    filteredusers() {
      return this.users.filter(
        (user) =>
          user.description
            .toLowerCase()
            .indexOf(this.searchKey.toLowerCase()) !== -1
      );
    },
  },
  methods: {
    deleteUserById(id) {
      let foundIndex = this.users.findIndex((p) => p.id === id);
      Axios.delete("http://localhost:8080/users/?id=" + id).then(
        (response) => {
          this.users.splice(foundIndex, 1);
          console.log(this.users);
        }
      );
    },
    updateUser(user) {
      let foundIndex = this.users.findIndex((p) => p.id === this.users.id);
      console.log("update " + foundIndex + this.users.name);
      //
    },
  },

  components: {},
};
</script>

<style>
.form-group {
  max-width: 500px;
}

.actions {
  padding: 10px 0;
}

.glyphicon-euro {
  font-size: 12px;
}
</style>
