<template>
   <Menu/>

</template>

<script setup>
import { ref } from 'vue';
import Menu from '../components/Menu.vue';

defineProps({
    listItems: Object
})
const isOpened = ref(false)
const openSide = (e) => {
    console.log("OpenSide" + e)
}
</script>

