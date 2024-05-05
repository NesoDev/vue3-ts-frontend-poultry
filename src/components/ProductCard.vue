<template>
    <div class="product-card">
        <div class="product-details">
            <div class="product-name-description">
                <h3>{{ name }}</h3>
                <div class="product-description">
                    <p>
                        {{ description }}
                    </p>
                </div>
            </div>
            <div class="product-prices">
                <h3 class="product-offer-price">S/. {{ mount }}</h3>
                <h3 class="product-regular-price">{{ beforeMount }}</h3>
            </div>
        </div>
        <img :src="url" alt="Product Image">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mount: {
        type: String,
        required: true
    },
    beforeMount: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.product-card {
    font-family: "Roboto Condensed", sans-serif;
    border-radius: 16px;
    background: #fff;
    width: 420px;
    height: 128px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.product-card:hover {
    box-shadow: 0px 0px 10px rgba(139, 139, 139, 0.427);
}

.product-details {
    width: auto;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-name-description h3 {
    margin: 0;
    color: #000000D9;
    font-size: 18px;
}

.product-prices {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.product-prices h3 {
    margin: 0;
    margin-right: 10px;
}

img {
    border-radius: 8px;
    height: auto;
}

.product-description {
    width: 95%;
    height: 40px;
}

.product-description p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-description,
.product-regular-price {
    color: #9CA3AF;
}

.product-regular-price {
    text-decoration: line-through;
}
</style>