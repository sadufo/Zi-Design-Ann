<script>
import style from './productsItemCard.scss'

export default{
    props: {
        title: String,
        imgUrl: String,
        id: Number,
        category: String,
        collect: String
    }
}
</script>

<template>
    <div class="productsItemCard">
        <div class="collect">{{ collect }}</div>
        <div class="id">{{ id }}</div>
        <div class="category">{{ category }}</div>
        <h2>{{ title }}</h2>
        <img :src="imgUrl" alt="#">
        <!-- <button>подробнее</button> -->
    </div>
</template>