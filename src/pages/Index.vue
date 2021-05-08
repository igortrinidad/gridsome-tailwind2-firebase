<template>
  <Layout>

    <div class="w-full h-full flex flex-col items-center justify-center p-6">
      <div class="w-full flex flex-col">
        <div class="w-full flex flex-col" v-for="(message, index) in store.messages.messages" :key="index">
          <span>{{ message.content }} - {{ message.displayName }} {{message.createdAt}}</span>
        </div>
      </div>

      <div class="w-full flex flex-col text-white">
        <label>Insert your message</label>
        <input @keydown.enter="storeMessage()" v-model="content" class="px-3 py-2 bg-white border focus:outline-none text-grey" placeholder="Insert your message" />
      </div>

      <button @click="storeMessage()" class="mt-2 self-start bg-yellow text-black px-3 py-2 border-none">
        Send message
      </button>

      <button @click="signInWithGoogle()" class="mt-2 self-start bg-yellow text-black px-3 py-2 border-none">
        Sign up
      </button>

    </div>
  </Layout>
</template>

<script>

import store from '~/store'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      store,
      content:''
    }
  },
  methods: {
    signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    storeMessage() {
      store.messages.store(this.content)
      this.content = null
    }
  }
}
</script>