<template>
  <div class="app">
    <input 
      v-model="inputText" 
      placeholder="Enter something..."
    />

    <button @click="saveText">Save</button>

    <p>Saved text: {{ savedText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const inputText = ref("")
const savedText = ref("")

async function loadText() {
  const res = await fetch("/saveString")
  const data = await res.json()
  savedText.value = data.value || ""
}

async function saveText() {
  await fetch("/saveString", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: inputText.value })
  })
  savedText.value = inputText.value
}

onMounted(loadText)
</script>