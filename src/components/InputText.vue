<template>
    <div>
        <label class="form-label fw-bold">
            {{ props.label }}
            <span v-if="props.required" class="text-danger">*</span>
        </label>
        <Field :name="props.name" :type="props.type" class="form-control"/>
        <ErrorMessage :name="props.name" as="div" v-slot="{ message }">
            <p class="text-danger">{{ message }}</p>
        </ErrorMessage>
    </div>
</template>

<script setup>
import {Field, ErrorMessage} from 'vee-validate';
import {ref} from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
})
</script>