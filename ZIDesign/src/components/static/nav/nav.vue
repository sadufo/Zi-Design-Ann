<script setup>
import style from './nav.scss'
import globalStyle from '../../../assets/global_var/global_var.scss'
</script>

<template>
    <div class="container">
        <div class="nav">
            <div class="nav__logo">
                <img class="logo__item" src="../../../assets/img/Logo.svg" alt="logo">
            </div>
            <div class="nav__links">
                <ul>
                    <router-link to="/">Главная</router-link>
                    <router-link to="/catalog">Каталог</router-link>
                    <router-link to="/project">Проекты</router-link>
                    <router-link to="/services">Услуги</router-link>
                    <router-link to="/about">О компании</router-link>
                </ul>
            </div>
            <div class="nav__social">
                <a href="#"><img src="../../../assets/img/instagram.svg" alt="instagram"></a>
                <a href="#"><img src="../../../assets/img/facebook.svg" alt="facebook"></a>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>