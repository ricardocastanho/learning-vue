<template>
  <HomeHeader />
  <HomeContact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      Feedbacker © 2022
    </p>
  </div>
</template>

<script lang="ts">
import HomeContact from './Contact.vue'
import HomeHeader from './Header.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeContact
  }
}
</script>
