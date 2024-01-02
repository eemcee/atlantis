<template>
    <div class="container d-flex flex-row justify-content-between">
        <div>
            <p class="display-6">User Management</p>
        </div>
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNewUser">
                <font-awesome-icon :icon="['fas', 'plus']"/>
                Add New User
            </button>
        </div>
    </div>


  <!-- Modal -->
    <div class="modal fade" id="addNewUser" tabindex="-1" aria-labelledby="addNewUser">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form class="row mx-3 needs-validation" novalidate @submit="onSubmit" :validation-schema="schema">
                        <div class="col-12 mt-3">
                            <input-text label="Name" v-model="user.name" name="name" required />
                        </div>
                        <div class="col-12 mt-3">
                            <input-text label="Username" v-model="user.username" name="username" required />
                        </div>
                        <div class="col-12 mt-3">
                            <label class="form-label fw-bold">Role <span class="text-danger">*</span></label>
                            <select v-model="user.role" class="form-select">
                                <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.value }}</option>
                            </select>
                        </div>
                        <div class="col-12 mt-3">
                            <input-text label="Email Address" v-model="user.emailAddress" name="emailAdd" required />
                        </div>
                        <div class="col-12 mt-3">
                            <input-text label="Mobile Number" v-model="user.mobileNumber" name="mobileNumber" />
                        </div>
                        <div class="d-flex mt-3 d-flex flex-row justify-content-end">
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </Form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>

import {reactive} from "vue";
import { Form } from 'vee-validate';
import * as yup from 'yup';
import InputText from '@/components/InputText.vue'

const schema = yup.object({
    name: yup.string()
        .max(50, 'Only 50 characters are allowed in Name.')
        .required('Name is required.'),
    username: yup.string()
        .min(8, 'Must be at least 8 characters long.')
        .required('Username is required.'),
    emailAdd: yup.string().email('Must be a valid email address.').required('Email address is required.'),
    mobileNumber: yup.number().positive('No negative values.')
})

const user = reactive({
  name: "",
  username: "",
  role: "",
  emailAddress: "",
  mobileNumber: ""
});

const roles = reactive([
  {
    id: 1,
    value: "Admin"
  },
  {
    id: 2,
    value: "Team Leader"
  },
]);

const onSubmit = async (values) => {
  console.log(values)
};

</script>