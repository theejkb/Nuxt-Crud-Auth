<template>
  <span>
    <div class="form-group">
      <label for="edit-email">Email</label>
      <input type="text" class="form-control" id="edit-email" v-model="theUser.email"/>
    </div>
    <div class="form-group">
      <label for="edit-firstname">Firstname <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-firstname" v-model="theUser.firstname"/>
    </div>

    <div class="form-group">
      <label for="edit-lastname">Lastname <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-lastname" v-model="theUser.lastname"/>
    </div>

    <div class="form-group">
      <label for="edit-role">Role <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-role" v-model="theUser.role"/>
    </div>

    <div class="form-group">
      <label for="edit-telephone">Telephone <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-telephone" v-model="theUser.telephone"/>
    </div>

     <div class="form-group">
      <label for="edit-username">Username <span class="glyphicon"></span></label>
      <input type="text" class="form-control" id="edit-username" v-model="theUser.username"/>
    </div>
  </span>
</template>

<script>
  export default {
     name: 'UserForm',
    props: ['theUser' ]
  }
</script>
