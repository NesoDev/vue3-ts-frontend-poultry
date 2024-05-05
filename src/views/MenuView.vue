<template>
    <div class="container-menu">
        <div class="container-img">
            <img src="../assets/Captura de pantalla 2024-05-02 162748.png" alt="">
            <img src="../assets/Captura de pantalla 2024-05-02 162646.png" alt="">
            <img src="../assets/Captura de pantalla 2024-05-02 162504.png" alt="">
        </div>
        <div class="content">
            <ProductCard v-for="product, i in products" :key="i" :name="product.name"
                :description="product.description" :mount="product.mount" :beforeMoun="product.beforeMount"
                :url="product.url" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';

interface Product {
    name: string,
    description: string,
    mount: string,
    beforeMount: string,
    url: string
}

const products: Array<Product> = [
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
    {
        name: "BanqueTori",
        description: "1 Pollo Tori + Papas + Chaufa* + Ensalada Clásica + Gaseosa 1.5 lt. + Salsas Incl. = 2 La Brava + 2 La Mayo + 2 La Vinagreta.",
        mount: "94.90",
        beforeMount: "116.90",
        url: "https://img.aimo.co/_voiTHgZNVOHinAt1f8MJAyfiD8=//112x112/smart/https%3A%2F%2Feisappstorage.blob.core.windows.net%2Fb2f9b3c4-1be2-443e-b60e-a9787bdaf762%2Fconfig%2Fproducts-images%2F065cfb7f-2ea7-40b1-a920-898b5427a73c.png%3Fsv%3D2020-08-04%26se%3D2044-05-02T12%253A36%253A55Z%26sr%3Db%26sp%3Dr%26sig%3DCvKCfrqpzbbIevlwjUYN3OlQZK8Fs4I2K0GiLE6nP%252B4%253D"
    },
]

</script>

<style scoped>
.container-menu {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #f0f2f5;
}

.container-img {
    width: 100%;
    height: 250px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    display: flex;
    align-items: center;
}

.container-img img {
    overflow: hidden;
    width: 100%;
}

.container-img:nth-child(1) {
    grid-column: 1 / 2;
}

.container-img:nth-child(2) {
    grid-column: 2 / 3;
}

.container-img:nth-child(3) {
    grid-column: 3 / 4;
}

.container-img:nth-child(4) {
    grid-column: 4 / 5;
}

.container-img:nth-child(5) {
    grid-column: 5 / 6;
}

.content {
    padding: 30px 0;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    background: #f0f2f5;
}
</style>