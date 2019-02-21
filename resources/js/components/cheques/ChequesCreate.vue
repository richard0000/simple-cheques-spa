<template>
  <div>
    <div class="form-group">
      <router-link to="/" class="btn btn-default">Back</router-link>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">Create new cheque</div>
      <div class="panel-body">
        <form v-on:submit="saveForm()">
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Amount</label>
              <input type="text" v-model="cheque.amount" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Payment Date</label>
              <input type="text" v-model="cheque.paymentDate" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Recipient Name</label>
              <input type="text" v-model="cheque.recipientName" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <button class="btn btn-success">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      cheque: {
        amoutn: 0,
        paymentDate: "",
        recipientName: ""
      }
    };
  },
  methods: {
    saveForm() {
      event.preventDefault();
      var app = this;
      var newCheque = app.cheque;
      axios
        .post("/api/v1/cheques", newCheque)
        .then(function(resp) {
          app.$router.push({ path: "/" });
        })
        .catch(function(resp) {
          console.log(resp);
          alert("Could not create your cheque");
        });
    }
  }
};
</script>