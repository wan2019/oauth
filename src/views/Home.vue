<template>
   <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>
      <div class="testBox">
        <GoogleSigninButton @sign-in="getToken" ></GoogleSigninButton>
        <LogoutButton></LogoutButton>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import GoogleSigninButton from '@/components/general/GoogleSigninButton.vue'
import LogoutButton from '../components/general/LogoutButton.vue'

export default {
  name: 'Home',
  components: {
    GoogleSigninButton,
    LogoutButton
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    getToken(val) {
      console.log('id_token', val);

    },
    async oAuthSignIn(provider, id_token) {
      try {
        await this.$store.dispatch('oAuthLogin', {
          provider,
          id_token
        });
        this.$emit('submit');
      } catch (error) {
        console.error(error);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.flag {
  &__box {
    text-align: center;
  }
  &__img {
    height: 2rem;
    object-fit: contain;
  }
}
.testBox {
  // height: 300px;
  // width: 300px;
  margin: auto;
}
</style>
