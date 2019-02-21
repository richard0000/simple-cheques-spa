<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit Cheque</div>
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
                            <button class="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { fetchCheque, updateCheque } from api/index;
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.chequeId = id;
            this.getCheque(id)
                .then(function (resp) {
                    app.cheque = resp.data;
                })
                .catch(function () {
                    alert("Could not load your cheque")
                });
        },
        data: function () {
            return {
                chequeId: null,
                cheque: {
                    amount: 0,
                    paymentDate: '',
                    recipientName: '',
                }
            }
        },
        methods: {
            getCheque(id) {
                return fetchCheque(id);
            },
            saveChangesToCheque(id, data){
                return updateCheque(id, data);
            },
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCheque = app.cheque;
                this.saveChangesToCheque(app.chequeId, newCheque)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your cheque");
                    });
            }
        }
    }
</script>