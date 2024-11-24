<template>
    <div id="app">
      <h1>Appointment Scheduler</h1>
      <form @submit.prevent="addAppointment">
        <label for="name">Name:</label>
        <input type="text" v-model="newAppointment.name" required />
  
        <label for="date">Date:</label>
        <input type="date" v-model="newAppointment.date" required />
  
        <label for="time">Time:</label>
        <input type="time" v-model="newAppointment.time" required />
  
        <button type="submit">Schedule Appointment</button>
      </form>
  
      <h2>Scheduled Appointments</h2>
      <ul>
        <li v-for="(appoinllllllment, index) in appointments" :key="index">
          {{ appointment.name }} - {{ appointment.date }} at {{ appointment.time }}
          <button @click="removeAppointment(index)">Cancel</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAppointment: {
          name: '',
          date: '',
          time: ''
        },
        appointments: []
      };
    },
    methods: {
      addAppointment() {
        // Add the new appointment to the list
        this.appointments.push({ ...this.newAppointment });
  
        // Clear the form
        this.newAppointment = {
          name: '',
          date: '',
          time: ''
        };
      },
      removeAppointment(index) {
        // Remove the appointment from the list
        this.appointments.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin: 5px 0;
  }
  
  input {
    margin-bottom: 10px;
  }
  
  button {
    margin: 5px;
  }
  </style>
  