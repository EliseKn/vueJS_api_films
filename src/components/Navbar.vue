<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to='/'>Accueil </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/favoris'>Favoris </router-link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
}

</script>


<style scoped>
router-link {
  color: black;
  cursor: pointer;
}

</style>
