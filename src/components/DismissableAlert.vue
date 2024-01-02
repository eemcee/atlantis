<template>
    <div v-if="props.show" class="alert alert-dismissible fade show" :class="getType" role="alert">
        {{ alertMessage }}
        <button @click="dismissAlert" type="button" class="btn-close" aria-label="Close"></button>
    </div>
</template>
<script setup>
import {computed} from "vue";

const emits = defineEmits(['dismiss']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    alertMessage: String,
    type: String
});

const getType = computed( () => {
    return `alert-${props.type}`;
});

const dismissAlert = () => {
    emits('dismiss');
}

</script>