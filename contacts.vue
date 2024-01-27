<!-- Contacts.vue -->
<template>
    <div>
      <h2>Contacts</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">{{ contact.email }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [],
      };
    },
    created() {
      // Fetch contacts data
      fetch('https://your-backend-api/contacts')
        .then(response => response.json())
        .then(contacts => this.contacts = contacts)
        .catch(error => console.error('Error fetching contacts:', error));
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  