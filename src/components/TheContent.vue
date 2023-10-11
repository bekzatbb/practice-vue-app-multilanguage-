<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddHabits from "./AddHabits.vue";
export default defineComponent({
  setup() {
    const completedDays = ref([''] as string[]);
    const habits = ref<string[]>([]);

    const isDayCompleted = (day: string) => {
      return completedDays.value.includes(day);
    };

    const toggleDay = (day: string) => {
      if (completedDays.value.includes(day)) {
        completedDays.value = completedDays.value.filter((d) => d !== day);
      } else {
        completedDays.value.push(day);
      }
    };

    const addNewHabit = (habitTitle: string) => {
      habits.value.push(habitTitle);
      console.log('Added habit:', habitTitle);
    }

    return {
      completedDays,
      addNewHabit,
      habits,
      isDayCompleted,
      toggleDay
    };

  },
  components: {
    AddHabits,
  },
});
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <div class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-2xl font-semibold text-gray-800">Habit Title</h2>

      <div class="mt-4 flex justify-between">
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Mon')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Mon') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Mon</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Tue')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Tue') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Tue</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Wed')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Wed') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Wed</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Thr')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Thr') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Thr</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Fri')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Fri') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Fri</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Sat')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Sat') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Sat</div>
        </div>
        <div class="h-100 flex flex-col items-center cursor-pointer" @click="toggleDay('Sun')">
          <div :class="{ 'bg-blue-500': isDayCompleted('Sun') }" class="rounded-full w-8 h-8 flex items-center justify-center text-white">
            <font-awesome-icon :icon="['fas', 'check']" />
          </div>
          <div>Sun</div>
        </div>
      </div>

      <AddHabits @addNewHabit="addNewHabit" />
    </div>
  </div>
</template>

<style scoped>

</style>