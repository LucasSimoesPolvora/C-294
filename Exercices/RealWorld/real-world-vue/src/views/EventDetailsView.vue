<script setup>
import { ref, onMounted } from 'vue';

import EventServices from '@/services/EventServices';

const event = ref(null)

const props = defineProps({
    id:{
        required: true
    }
})

onMounted(() => {
    EventServices.getEvent(id.value)
    .then((response) => {
        event.value = Response.data
    }).catch((error) => {
        console.log(error)
    })
})
</script>

<template>
    <div v-if="event">
        <h1>{{  event.title }}</h1>
        <p>{{  event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>