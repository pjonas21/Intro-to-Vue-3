const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            image: "./assets/images/socks_green.jpg",
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% poliester'],
            variants: [
                {id: 2234, color: 'green', image: "./assets/images/socks_green.jpg"},
                {id: 2235, color: 'blue', image: "./assets/images/socks_blue.jpg"},
            ],
            
            // code challenges
            description: "Socks on diferent colors, with logo of VueJS.",
            url: "http://www.github.com/pjonas21",
            onSale: true,
            sizes: ['pp', 'p', 'm', 'g', 'gg']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeItem() {
            if(this.cart > 0) this.cart -= 1
        }
    }

})
