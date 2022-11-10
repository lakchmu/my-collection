<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </template>

    <v-app-bar-title>My Collection</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" floating permanent order="1">
    <v-list
      density="compact"
      nav
      :selected="selectedLink"
      :onClick:select="onSelected"
      :items="links"
    />
  </v-navigation-drawer>

  <v-main><slot /></v-main>

  <v-footer color="primary" app order="0" class="footer">
    <span>lakchmu@gmail.com&nbsp</span>
    <span>2022</span>
  </v-footer>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter();

const drawer = ref<boolean>(true);
const selectedLink = ref<string[]>([route.path]);

const links = [
  {
    title: 'Home',
    value: '/home',
    props: {
      prependIcon: 'mdi:mdi-view-dashboard',
    },
  },
  {
    title: 'Hello',
    value: '/hello',
    props: {
      prependIcon: 'mdi:mdi-forum',
    },
  },
  {
    title: 'Add New Collection',
    value: '/add-new-collection',
    props: {
      prependIcon: 'mdi:mdi-forum',
    },
  },
];

interface SelectedProps {
  id: string;
  value: boolean;
  path: string[];
}

const onSelected = ({ id }: SelectedProps) => {
  router.push({ path: id });
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
}
</style>
