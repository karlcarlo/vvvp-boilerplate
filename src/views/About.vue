<script setup>
import { useStore } from '../store/comm'

const commStore = useStore()

function clickHandler() {
    commStore.inc(5)
}
</script>

<template>
    <div>
        About Page - {{ commStore.count }} - <button @click="clickHandler">增加count</button>
    </div>
</template>