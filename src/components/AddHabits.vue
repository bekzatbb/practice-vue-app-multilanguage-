<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    addNewHabit: Function,
  },
  setup() {
    const newHabit = ref('');

    const addHabit = () => {
      if (newHabit.value.trim() !== '') {
        if (typeof addNewHabit === 'function') {
          addNewHabit(newHabit.value);
          console.log('Adding habit:', newHabit.value);
        }
        newHabit.value = '';
      }
    }

    return {
      newHabit,
      addHabit,
    };
  },
});
</script>

<template>
  <div class="text-center mt-5">
    <h3 class="text-xl font-semibold text-gray-800">New Habit</h3>
    <input v-model="newHabit" @keyup.enter="addHabit" class="w-full p-2 border rounded mt-2" placeholder="Type something..." />
    <button @click="addHabit" class="px-4 py-2 bg-blue-500 text-white rounded mt-2">Add Habit</button>
  </div>
</template>

<style scoped>

</style>