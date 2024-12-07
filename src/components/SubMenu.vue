<template>
    <a-sub-menu :key="menuInfo.id">
    <span slot="title">
      <a-icon v-if="menuInfo.icon" :type="menuInfo.icon" />
      <span>{{ menuInfo.text }}</span>
    </span>
        <template v-for="item in menuInfo.subMenu">
            <a-menu-item v-if="!item.subMenu" :key="item.path" @click="handleMenuClick(item)">
                <a-icon v-if="item.icon" :type="item.icon" />
                <span>{{ item.text }}</span>
            </a-menu-item>
            <sub-menu v-else :key="item.id" :menu-info="item" />
        </template>
    </a-sub-menu>
</template>

<script>
  export default {
    name: 'SubMenu',
    props: {
      menuInfo: {
        type: Object,
        required: true,
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