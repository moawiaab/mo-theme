<template>
    <li class="mb-1 ">
        <button class=" btn btn-toggle align-items-center rounded-t  px-1" data-bs-toggle="collapse"
            :data-bs-target="`#${items.id}-collapse`" :class="items.active && 'collapsed activated'">
            <span class="material-icons">{{items.icon}}</span>
            <span class="text">{{items.title}}</span>
            <span class="material-icons open">expand_less</span>
        </button>
        <div :class="items.active && 'show'" class="collapse" :id="`${items.id}-collapse`" >
            <ul class="btn-toggle-nav list-unstyled pb-1 ">
                <li><a href="#" class="rounded btn"> - Overview</a></li>
                <li><a href="#" class=" rounded btn"> - Updates</a></li>
                <li><a href="#" class=" rounded btn"> - Reports</a></li>

            </ul>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        items: Object
    }
}
</script>
