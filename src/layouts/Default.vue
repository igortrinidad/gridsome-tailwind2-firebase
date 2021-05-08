<template>
  <div class="w-full h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
    <slot></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

