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
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.chequeId = id;
            const API_URL = 'http://localhost:8000/api/v1';
            axios.get(`${API_URL}/cheques` + id)
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
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCheque = app.cheque;
                const API_URL = 'http://localhost:8000/api/v1';
                axios.patch(`${API_URL}/cheques` + app.chequeId, newCheque)
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