<template>
    <div class="container-card">
        <div class="container-text">
            <div class="container-name-description">
                <h3>{{ props.name }}</h3>
                <p id="description">{{ props.description }}</p>
            </div>
            <div class="container-mount">
                <h3 id="price-in-offer">{{ props.mount }}</h3>
                <h3 id="price">{{ props.beforeMount }}</h3>
            </div>
        </div>
        <img :src="props.url">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    mount: {
        type: String,
        require: true
    },
    beforeMount: {
        type: String,
        require: false
    },
    url: {
        type: String,
        require: true
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

.container-card {
    font-family: "Roboto Condensed", sans-serif;
    border-radius: 16px;
    background: #fff;
    width: 520px;
    height: auto;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.container-card:hover {
    box-shadow: 0px 0px 10px rgba(139, 139, 139, 0.427);
}

.container-text {
    width: auto;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-text h3 {
    color: #000000D9;
    font-size: 18px;
}

.container-mount {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.container-mount h3 {
    margin-right: 10px;
}

img {
    border-radius: 8px;
    height: auto;
}

#description,
#price {
    color: #9CA3AF;
}

#price {
    text-decoration: line-through;
}
</style>