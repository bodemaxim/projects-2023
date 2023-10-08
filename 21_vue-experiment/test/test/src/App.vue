<script setup lang="ts">
import { ref } from 'vue'

interface IStudent {
  id: number
  firstName: string
  lastName: string
  ageGroup: string
}

interface IStudents {
  students: IStudent[]
}

const myStudents: IStudents = {
  students: [
    { id: 1, firstName: 'Марина', lastName: 'Вайнберг', ageGroup: 'взрослый' },
    { id: 2, firstName: 'Влад', lastName: 'Ярыгин', ageGroup: 'взрослый' },
    { id: 3, firstName: 'Никита', lastName: 'Шипилов', ageGroup: 'школьник' },
    { id: 4, firstName: 'Амир', lastName: 'Матар', ageGroup: 'школьник' }
  ]
}

/**
 * Возвращаем цвет для надписи "возрастная группа"
 * @param {string} ageGroup - Возрастная группа студента.
 * @returns {string} - Цвет.
 */
const getAgeGroupColor = (ageGroup: string) => {
  if (ageGroup === 'взрослый') {
    return 'red'
  } else if (ageGroup === 'школьник') {
    return 'green'
  }
}
</script>

<template>
  <h1>Список студентов</h1>
  <ul>
    <li v-for="student in myStudents.students" :key="student.id">
      {{ student.lastName }} {{ student.firstName }}
      <sup :style="{ color: getAgeGroupColor(student.ageGroup) }">{{ student.ageGroup }}</sup>
    </li>
  </ul>
</template>

<style scoped>
.age-group-index {
  color: green;
}
</style>
