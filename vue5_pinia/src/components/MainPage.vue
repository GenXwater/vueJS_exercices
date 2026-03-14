<template>
    <!-- ANCIEN EXERCICE
    <h1>Page</h1>
    {{ recettes }}
    <ul>
        <li v-for="r in recettes">{{ r.name  }}</li>
    </ul>
    -->

    <h1>Panier</h1>

    Total : {{ getTotalPrice }} €
    <br />
    <p>Produit dans le panier :</p>
    <ul>
        <li v-for="p in cart" :key="p.id">{{ p.name }} ({{ p.quantity }}) <button @click="deleteProduct(p.id)">X</button></li>
    </ul>
    <br />
    <br />
    <button @click="addProduct1">Ajouter produit 1 - 10€</button><br />
    <button @click="addProduct2">Ajouter produit 2 - 20€</button><br /><br />
    {{ getCart }}<br /><br />
    {{ cart }}

</template>

<script setup lang="ts">
    import { useRecetteStore } from '@/stores/recette';
    import { useCartStore } from '@/stores/cart';
    import { storeToRefs } from 'pinia';

    const storeRecette = useRecetteStore();

    storeRecette.DeleteRecette(1);

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

    // -------------------------------------- //

    const storeCart = useCartStore();

    const { getCart, getTotalPrice, cart } = storeToRefs(storeCart);
    const { addProduct } = storeCart; // permet de faire directement : addProduct(product1) au lieu de storeCart.addProduct(product2)
    const { deleteProduct } = storeCart;
    
    const product1 = {
        id: 2,
        name: "product1",
        price: 10,
        quantity: 1,
    };

    const product2 = {
        id: 3,
        name: "product2",
        price: 20,
        quantity: 1,
    };

    const addProduct1 = () => {
        addProduct(product1)
        storeCart.refreshkey++;
    }

    const addProduct2 = () => {
        storeCart.addProduct(product2)
        storeCart.refreshkey++;
    }
</script>