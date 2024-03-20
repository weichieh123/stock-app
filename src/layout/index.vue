<template>
  <router-view v-slot="{ Component }">
    <template v-if="$route.path !== '/'">
      <v-navigation-drawer>
        <v-list-item title="Stock" subtitle="123"></v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="1-代碼查詢"></v-list-item>
        <v-list-item link title="2-前10數據"></v-list-item>
        <v-list-item link title="3-儲存清單"></v-list-item>
      </v-navigation-drawer>
      <v-app-bar>
        <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
      </v-app-bar>
    </template>
    <v-main>
      <component :is="Component" />
    </v-main>
  </router-view>
</template>