<script>
import style from './productsItemCard.scss'

export default{
    props: {
        title: String,
        imgUrl: String,
        id: Number,
        category: String,
        collect: String,
        price: String
    }
}
</script>

<template>
    <div class="productsItemCard">
        <div class="collect">{{ collect }}</div>
        <div class="id">{{ id }}</div>
        <div class="category">{{ category }}</div>
        <img :src="imgUrl" alt="#">
        <h2 class="title">{{ title }}</h2>
        <div class="price">{{ price }}</div>
        <!-- <button>подробнее</button> -->
    </div>
</template>