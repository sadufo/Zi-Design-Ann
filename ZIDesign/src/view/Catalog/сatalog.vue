<script setup>
import Nav from '@/components/static/nav/nav.vue';
import ProductsNavigation from '../../components/CatalogComponents/navigation/productsNavigation.vue'
import ProductsItem from '../../components/CatalogComponents/item/productsItem.vue'
</script>

<template>
         <Nav class="itsNav"/>
         <div class="comp-row">
             <ProductsNavigation/>
             <ProductsItem/>
         </div>
</template>

<style scoped>
    .itsNav{
        position: relative;
    }
    .comp-row{
        display: flex;
    }
</style>

