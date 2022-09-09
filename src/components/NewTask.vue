<template>
   <div v-if="showErrorMessage">
      <p class="error-text">{{ errorMessage }}</p>
    </div>

    <div class="new-task-form">
      <div class="input-field">
        <input
          class="input-field-input"
          type="text"
          placeholder="Task Title"
          v-model="name"
        />
      </div>

      <div class="input-field">
        <input
          class="input-field-input"
          type="text"
          placeholder="Task Description"
          v-model="description"
        />
      </div>

      <button @click="errorFunction" class="button">Add</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";
// constant to save a variable that define the custom event that will be emitted to the homeView
const setTask = useTaskStore();
// constant to save a variable that holds the value of the title input field of the new task
const name = ref("");
// constant to save a variable that holds the value of the description input field of the new task
const description = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);
// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

const emit = defineEmits(["new-task"]);
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
const errorFunction = () => {
  if (name.value.length === 0 || description.value.length === 0) {
    showErrorMessage.value = true;
    errorMessage.value = "The task title or description is empty";
    setTimeout(() => {
      // errorMessage.value = null;
      showErrorMessage.value = false;
    }, 5000);
  } else {
    const newTask = {
      name: name.value,
      description: description.value,
    };

    emit("new-task", newTask);
    name.value = "";
    description.value = "";
  }
};
</script>

<style scoped>
  @import url(../assets/taskApp.css);
</style>
