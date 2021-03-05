<template>
  <div class="mt-4">
    <p>Last Update: {{ $moment().format("MMMM Do YYYY, hh:mm:ss a") }}</p>
  </div>
</template>

<style scoped>
p {
  color: #7b6fff;
  font-size: 16px;
  font-weight: 600;
}
</style>