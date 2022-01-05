<template>
  <span>
    <div class="form-group">
      <label for="edit-name">Name</label>
      <input type="text" class="form-control" id="edit-name" v-model="theTicket.status"/>
    </div>
    <div class="form-group">
      <label for="edit-description">Description <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-description" v-model="theTicket.description"/>
    </div>

    <div class="form-group">
      <label for="edit-status">Status <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-status" v-model="theTicket.status"/>
    </div>

    <div class="form-group">
      <label for="edit-admin">Admin ID <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-admin" v-model="theTicket.admin"/>
    </div>

    <div class="form-group">
      <label for="edit-user">User ID <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-user" v-model="theTicket.user"/>
    </div>
  </span>
</template>

<script>
  export default {
     name: 'TicketForm',
    props: ['theTicket' ]
  }
  console.log('theTicket');
</script>
<style>
section{
      padding: 5rem 3.5rem;

}
</style>
