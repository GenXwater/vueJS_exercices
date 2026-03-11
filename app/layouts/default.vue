<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Actualite</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="route.path === '/' ? 'active' : ''" to="/">Accueil</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="route.path === '/contact' ? 'active' : ''" to="/contact">Contact</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        <!-- Begin page content -->
        <main class="flex-shrink-0">
            <div id="mainContainer" class="container">
                <slot />
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer mt-auto py-3 bg-body-tertiary">
            <div class="container">
                <span class="text-body-secondary">Place sticky footer content here.</span>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    const route = useRouter().currentRoute // va chercher le chemin pour ensuite utiliser la classe "active" et donc gérer la surbrillance du menu, via :class="route.path"
</script>

<style>
    #mainContainer {
        margin-top: 80px;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>