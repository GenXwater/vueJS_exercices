import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        refreshkey: 0, // variable qui permet un changement en temps réel
        cart : [
            {
                id: 1,
                name: "Cadeau",
                price: 0,
                quantity: 1,
            }
        ]
    }),

    // Getter 
    getters: {
        getCart(state): any {
            this;this.refreshkey
            return state.cart
        },

        getTotalPrice(state): number {
            this.refreshkey
            let total = 0
            state.cart.forEach(p => {
                total += p.price * p.quantity
            });
            return total
        },
    },

    // Actions
    actions: {
        clearCart() {
            this.cart = []
        },

        deleteProduct(itemId:number) {
            this.cart.splice(this.cart.findIndex(function(i){
                return i.id === itemId
            }), 1)
        },
        
        addProduct(item:any) {
            const foundIndex = this.cart.findIndex(function(i){
                return i.id === item.id
            })
            if (foundIndex !== -1) {
                item.quantity++
                this.cart[foundIndex] = item
            } else {
                this.cart[this.cart.length] = item
            }
        }
    },
})