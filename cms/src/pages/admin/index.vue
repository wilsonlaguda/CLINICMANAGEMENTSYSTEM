<script setup>
import { RouterView } from 'vue-router'
import layout from '@/layouts/default.vue'

</script>

<template>
    <layout>
        <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <RouterView></RouterView>
            </div>
        </div>
    </layout>
</template>