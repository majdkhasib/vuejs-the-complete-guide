<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: #4c07a5;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin: 0;
}
h1 a {
  color: white;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
li {
  margin: 0 0.5rem;
}
a {
  text-decoration: none;
  padding: 1em;
  color: #f391e3;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}
</style>