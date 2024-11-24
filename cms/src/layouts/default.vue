<script setup>
import {RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue'
import sidebar from '@/components/sidebar.vue'

</script>

<template>
 <navbar/>
 <sidebar/>
 <slot></slot>
</template>

