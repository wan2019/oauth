<template>
   <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>
      <div class="testBox">
        <GoogleSigninButton @sign-in="getToken" ></GoogleSigninButton>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import GoogleSigninButton from '@/components/general/GoogleSigninButton.vue'

export default {
  name: 'Home',
  components: {
    GoogleSigninButton
  },
  data() {
    return {
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    getToken(val) {
      console.log('this my id', val);

    },
    getList () {
      $api.testGet('v2/all').then(resp => {
        const { data } = resp
        console.log('data', data[0])
        this.desserts = (data)? data : []
      })
    },
    getNameList () {
      // if (!this.search) return
      // $api.testGet(`v2/name/eesti`).then(resp => {
      //   const { data } = resp
      //   console.log('data', data[0])
      //   this.desserts = (data)? data : []
      // })
    },
    openDialog (item) {
      console.log('open dialog');
      this.item = item
      this.dialog = true
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
