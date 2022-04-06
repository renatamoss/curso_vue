<template>
  <div>
    <h1>Hello Composition API</h1>
    <ul v-for="user in users" :key="user.id">
      <li @click="alertUserName(user)">
        name: {{ user.name }} - language: {{ languages.join(", ") }}
      </li>
      <li>age: {{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
import { alertUserName } from "../utils/alertUserName";

export default {
  setup() {
    const users = [
      { id: 1, name: "John", age: 18 },
      { id: 2, name: "Paul", age: 42 },
    ];

    const languages = ["english", "portuguese"];

    return { users, languages, alertUserName };
  },
};
</script>

<style>
ul li {
  list-style: none;
}
</style>