<template>
    <header class="header items-center  bg-white ease-out" :class="`${isScroll && 'shadow-md'}`">
        <div class="logo overflow-hidden bg-blue-dark text-white text-center" :class="`${isOpening && 'opened'}`">
            <span>logo</span>
        </div>
        <span class="material-icons cursor-pointer text-justify  text-dark mx-2 transition"
            @click="isOpening = !isOpening">
            menu
        </span>

        <slot name="header" />
        <div class="absolute left-2">
            <span class="material-icons text-red-500">
                logout
            </span>
        </div>
    </header>
    <main class="main-content">
        <aside :class="`${isOpening && 'opened'}`">
            <div class="aside bg-blue-dark" :class="`${isOpening && 'opened'}`">
                <!-- <ul class="grid grid-cols-1 divide-y-4 divide-dark w-full"> -->
                    <sadie-bar :listItems="listItems"/>
                <!-- </ul> -->
                <!-- <Menu/> -->
            </div>
            <!-- <slot name="aside" /> -->
        </aside>
        <div class="content-wrapper p-3 bg-body w-full" :class="`${isOpening && 'opened'}`">
            <slot name="content" />
        </div>
    </main>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import SadieBar from './SadieBar.vue';
import Menu from '../components/Menu.vue';

defineProps({
    listItems: Object
})

const isOpening = ref(false);
const isScroll = ref(false);


const handleScroll = () => {

    if (window.scrollY > 50) {
        isScroll.value = true
    } else {
        isScroll.value = false
    }
    console.log(isScroll.value)
}
onMounted(() => {
    window.addEventListener("scroll", handleScroll);

})
</script>

<style lang="scss">
:root {
    --sidebar-width: 250px;
    --sidebar-light: #e1e1e1;
    --blue-dark: #293042;
    --blue: #1fb6ff;
    --purple: #7e5bef;
    --pink: #ff49db;
    --orange: #ff7849;
    --green: #13ce66;
    --yellow: #ffc82c;
    --gray-dark: #273444;
    --gray: #8492a6;
    --gray-light: #d3dce6;
    --white: #f0f0f0;
    --body: #f6f8fb;
    --dark: #495057;
    --light: #f0f0f0;

}

* {
    margin: 0;
    padding: 0;
    direction: rtl;
}

header {
    display: flex;
    position: fixed;
    // right: var(--sidebar-width);
    box-shadow: 0 0 2rem 0 rgba(41, 48, 66, .1);
    width: 100%;
    height: 50px;
    z-index: 10;

    .logo {
        width: var(--sidebar-width);
        overflow: hidden;
        transition: 0.3s all ease-in-out;
        background-color: var(--blue-dark) !important;
        padding: 2mm;
        font-weight: bold;
        font-size: 18px;
        height: 100%;
    }

    .logo.opened {
        width: 0;
        padding: 0;

        &>span {
            transition: 0.3s all ease-in-out;
            margin-right: 8px;
        }
    }

}

main {
    display: flex;


    aside {
        width: var(--sidebar-width);
        background-color: var(--blue-dark);
        height: 100%;
        display: flex;
        transition: 0.3s all ease-in-out;

        // position: fixed;
        &.opened {
            width: 0;
        }

        .aside {
            top: 50px;
            position: fixed;
            width: var(--sidebar-width);
            background-color: var(--blue-dark);
            height: 100%;
            overflow: hidden;
            overflow-y: scroll;
            transition: 0.3s all ease-in-out;
            z-index: 11;

            &.opened {
                width: 0;
            }

            ul {
                list-style: none;
                // width: 100%;
                // background: #1fb6ff;
            }
        }

    }

    .content-wrapper {
        transition: 0.3s all ease-in-out;
        margin-top: 50px;
        margin-right: 30px;

        &.opened {
            margin-right: 5px;
        }
    }
}
</style>