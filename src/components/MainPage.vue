<template>
    <h1>Page</h1>
    {{ recettes }}
    <ul>
        <li v-for="r in recettes">{{ r.name  }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { useRecetteStore } from '@/stores/recette';

    const storeRecette = useRecetteStore()

    storeRecette.DeleteRecette(1)

    const maRecette = {
        id: 10,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Steack patte",
                description:
                    "Steack patte, c'est la vie.",
                note: 5
    }
    
    const pizza = {
        id: 4,
                image: "https://i.imgur.com/b9zDbyb.jpg",
                name: "Pizza renne",
                description:
                    "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
                note: 2
    }

    storeRecette.updateRecette(maRecette) // ajout avec nouvel id
    storeRecette.updateRecette(pizza) // mise à jour grâce au même id
    // storeRecette.resetStore() // vide recettes

    const recettes = storeRecette.getRecettes

</script>