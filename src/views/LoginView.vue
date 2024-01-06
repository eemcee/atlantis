<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <span class="display-6">Log into </span><span class="display-5">Wordsmith Wonders</span>
                <div class="align-items-center">
                    <span class="text-center">version x.x</span>
                </div>
                <form @submit.prevent="login" class="mt-5">
                    <div class="mb-3">
                        <label for="email" class="form-label">Username: <span class="text-danger">*</span></label>
                        <input v-model="username" type="text" class="form-control" id="username" required/>
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
import {useAuthStore} from "@/stores/auth.js";
import router from "@/router/index.js";

const username = ref('');
const password = ref('');
const alertStatus = ref(false);
const alertMessage = ref('');
const alertType = ref('');

const login = async () => {
    console.log('yesy')
    alertStatus.value = true;
  //for simplicity
  if (username.value === 'admin' && password.value === 'admin') {

    alertType.value = "success";
    alertMessage.value = "Successfully logged In.";
    useAuthStore().login({username: "admin", password: "admin"});
    await router.push('/public');

  } else {
    alertType.value = "danger";
    alertMessage.value = "Incorrect username or password."
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