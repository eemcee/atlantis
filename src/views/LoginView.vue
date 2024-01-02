<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <span class="display-6">Log into </span><span class="display-5">Vital Statistics Data Processing Application</span>
                <div class="align-items-center">
                    <span class="text-center">version 2.0</span>
                </div>
                <form @submit.prevent="login" class="mt-5">
                    <div class="mb-3">
                        <label for="email" class="form-label">Username: <span class="text-danger">*</span></label>
                        <input v-model="email" type="text" class="form-control" id="email" required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password: <span class="text-danger">*</span></label>
                        <input v-model="password" type="password" class="form-control" id="password" required/>
                    </div>
                    <div class="mb-3">
                        <dismissable-alert :show="alertStatus" :alert-message="alertMessage"
                                           :type="alertType" @dismiss="dismissAlert"
                        ></dismissable-alert>
                    </div>
                    <button type="submit" class="btn btn-outline-primary w-100">Login</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>

import {ref} from "vue";
import axios from "axios";
import DismissableAlert from "@/components/DismissableAlert.vue";

const email = ref('');
const password = ref('');
const alertStatus = ref(false);
const alertMessage = ref('');
const alertType = ref('');

const login = async () => {
    alertStatus.value = true;
    try {
    const response = await axios.post('/login', {
      username: email.value,
      password: password.value
    });

    alertType.value = response.data.status;
    alertMessage.value = response.data.message

  } catch (e) {
        console.log(e)
    alertType.value = "error";
    alertMessage.value = e.message
  }
}

const dismissAlert = () => {
  alertStatus.value = false
}

</script>

<style scoped>
.container-fluid {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
}
</style>