<template>
  <div class="shadow">
    <br>
    <v-btn @click="Logout">登出</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    async Logout() {
      try {
        const isLogout = window.confirm('確定要登出');
        if (isLogout) {
          const auth2 = window.gapi.auth2.getAuthInstance();
          auth2.signOut().then(() => {
            console.log('Google User signed out.');
          });
          // 可以在這個時候移除 cookie
          window.alert('已登出');
        }
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.messages);
        } else {
          window.alert(error.detail);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>