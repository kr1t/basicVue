<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">VueTest</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
          </router-link>
          <router-link :to="{ name: 'about' }" class="nav-link">
            About
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>