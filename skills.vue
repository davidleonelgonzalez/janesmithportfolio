<!-- Skills.vue -->
<template>
    <div>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [],
      };
    },
    created() {
      // Fetch skills data
      fetch('https://your-backend-api/skills')
        .then(response => response.json())
        .then(skills => this.skills = skills)
        .catch(error => console.error('Error fetching skills:', error));
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  