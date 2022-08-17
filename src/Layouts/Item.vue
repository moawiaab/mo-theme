<template>
    <li class="mb-1 ">
        <button class=" btn align-items-center rounded px-1" :class="item.active && 'activated'">
            <span class="material-icons">{{item.icon}}</span>
            <span class="text">{{item.title}}</span>
            <!-- <span class="material-icons open">expand_less</span> -->
        </button>
    </li>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>