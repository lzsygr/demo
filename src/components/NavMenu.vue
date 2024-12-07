<template>
  <a-menu mode="horizontal" :selectedKeys="[currentPath]">
    <template v-for="item in menuData">
      <a-menu-item v-if="!item.subMenu" :key="item.path" @click="handleMenuClick(item)">
        <a-icon v-if="item.icon" :type="item.icon" />
        <span>{{ item.text }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.id" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
  import SubMenu from './SubMenu.vue';

  export default {
    components: {
      SubMenu,
    },
    props: {
      menuData: {
        type: Array,
        required: true,
      },
    },
    computed: {
      currentPath() {
        return this.$route.path;
      },
    },
    methods: {
      handleMenuClick(item) {
        if (item.path) {
          this.$router.push(item.path);
        }
      },
    },
  };
</script>