<template>
  <div class="menu p-2">
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
  name: 'recursive-menu',
  data: () => ({
    menuTree: [
      {
        label: "Home",
        icon: "home",
        children: [
          {
            label: "level 1.1",
            children: [
              {
                label: "level 1.1.1",
                children: [
                  {
                    label: "level 1.1.1.1"
                  }
                ]
              }
            ]
          },
          {
            label: "level 1.2"
          }
        ]
      },
      {
        label: "Dashboard",
        icon: "dashboard",
        children: [
          {
            label: "level 2.1",
          },
          {
            label: "level 2.2"
          },
          {
            label: "level 2.3"
          }
        ]
      },
      {
        label: "Settings",
        icon: "settings"
      }
    ]
  }),
  components: {
    MenuItem
  }
}
</script>

<style lang="scss" scoped>
.menu {
  direction: rtl;
  background-color: transparent;
  height: 100vh;
  width: var(--sidebar-width);
  right: 0;
  top: 0;
  // border-left: 1px solid #ececec;
  transition: all .3s ease;
  overflow: auto;
}
</style>