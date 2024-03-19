<template>
    <div>
        <!-- Form to capture user input -->
        <form @submit.prevent="confirmSubmit"
            style="max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">

            <label for="name" style="display: block; margin-bottom: 10px;">Name:</label>
            <input type="text" id="name" v-model="formData.name" required pattern="[A-Z].{5,}"
                title="Name must start with an uppercase letter and be at least 6 characters long"
                style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">

            <label for="email" style="display: block; margin-bottom: 10px;">Email:</label>
            <input type="email" id="email" v-model="formData.email" required pattern=".+@.+"
                title="Please enter a valid email address"
                style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">

            <button type="submit"
                style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>

        </form>


        <!-- Display previous responses -->
        <div v-if="responses.length > 0">
            <h2>Previous Responses:</h2>
            <div v-for="(response, index) in responses" :key="index">
                <h3>Response {{ index + 1 }}:</h3>
                <p>Name: {{ response.name }}</p>
                <p>Email: {{ response.email }}</p>
            </div>
        </div>
    </div>
    <div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

// Reactive variables to store form data and previous responses
const formData = ref({
    name: '',
    email: ''
});

const responses = ref([]);

// Function to submit form data
const submitForm = async () => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData.value);
        const newResponse = { ...formData.value }; // Create a copy of the form data
        responses.value.push(newResponse); // Add the new response to the array
        // Reset the form after successful submission
        formData.value = {
            name: '',
            email: ''
        };
        // Show success message
        Swal.fire({
            title: "Success!",
            text: "Data submitted successfully.",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "OK",
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        // Show error message
        Swal.fire({
            title: "Error!",
            text: "Failed to submit data.",
            icon: "error",
            showCancelButton: false,
            confirmButtonText: "OK",
        });
    }
};

// Function to confirm submission
const confirmSubmit = async () => {
    Swal.fire({
        title: 'Do you want to submit the data?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        icon: 'question'
    }).then((result) => {
        if (result.isConfirmed) {
            submitForm();
        } else {
            // Show toast notification if user cancels submission
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Data post is Not Successfull"
            });
        }
    });
};
</script>

<style>
/* Add your styles here */
</style>
