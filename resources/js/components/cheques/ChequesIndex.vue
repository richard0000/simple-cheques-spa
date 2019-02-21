<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createCheque'}" class="btn btn-success">Create new cheque</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Cheques list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>Amount</th>
                    <th>Payment Date</th>
                    <th>Recipient Name</th></th>
                    <th width="100"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cheque, index in cheques">
                        <td>{{ cheque.amount }}</td>
                        <td>{{ cheque.paymentDate }}</td>
                        <td @click="reloadCheques(cheque.recipientName)" >{{ cheque.recipientName }}</td>
                        <td>
                            <router-link :to="{name: 'editCheque', params: {id: cheque.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(cheque.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchCheques, fetchChequesFromName, destroyCheque } from '../../api/index';
export default {
  /**
   * Reactive data
   *
   */
  data: function() {
    return {
      cheques: []
    };
  },
  /**
   * Execute when route is mounted
   *
   */
  mounted() {
    var app = this;
    this.getCheques()
      .then(function(resp) {
        app.cheques = resp.data;
      })
      .catch(function(resp) {
        console.log(resp);
        alert("Could not load cheques");
      });
  },
  methods: {
    /**
     * Get all cheques from REST API
     *
     */
    getCheques(){
      return fetchCheques();
    },
    /**
     * update Cheques list filtering by recipientName using REST API
     *
     */
    reloadCheques(recipientName){
      fetchChequesFromName(recipientName)
        .then(function(resp) {
          app.cheques = resp.data;
        })
        .catch(function(resp) {
          console.log(resp);
          alert("Could not load cheques");
        });
    },
    /**
     * Delete one specific cheque using REST API
     *
     */
    deleteEntry(id, index) {
      if (confirm("Do you really want to delete it?")) {
        var app = this;
        destroyCheque(id)
          .then(function(resp) {
            app.cheques.splice(index, 1);
          })
          .catch(function(resp) {
            alert("Could not delete cheque");
          });
      }
    }
  }
};
</script>