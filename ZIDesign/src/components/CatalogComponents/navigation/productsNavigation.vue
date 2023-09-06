<script>
import style from './productsNavigation.scss';
import gStyle from '../../../assets/global_var/global_var.scss';
</script>

<template>
    <div class="prodNav">
        <div class="prodNav__links">
            <div class="links links__item">
                <h2>Продукция</h2>
                <router-link to="/Кровать">Тумбы</router-link>
                <router-link to="/Кровать">Комоды</router-link>
                <router-link to="/Кровать">Тумбы ТВ</router-link>
                <router-link to="/Кровать">Будуарные столы</router-link>
                <router-link to="/Кровать">Шкафы</router-link>
                <router-link to="/Кровать">Пеналы</router-link>
                <router-link to="/Кровать">Письменные столы</router-link>
                <router-link to="/Кровать">Предметы декора</router-link>
                <router-link to="/Кровать">Кровать</router-link>
            </div>
            <div class="links links__col">
                <h2>Коллекции</h2>
                <router-link to="Толедо">Геометрия</router-link>
                <router-link to="Толедо">Толедо</router-link>
                <router-link to="Толедо">Валенсия</router-link>
                <router-link to="Толедо">Сиена</router-link>
                <router-link to="Толедо">Корсика</router-link>
                <router-link to="Толедо">Прованс</router-link>
                <router-link to="Толедо">Тоскана</router-link>
                <router-link to="Толедо">Магия</router-link>
                <router-link to="Толедо">Домино</router-link>
                <router-link to="Толедо">Сиена-конфети</router-link>
                <router-link to="Толедо">Корсика-слим</router-link>
            </div>
        </div>
    </div>
</template>