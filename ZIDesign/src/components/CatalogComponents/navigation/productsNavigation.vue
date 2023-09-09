<script>
import style from './productsNavigation.scss';
import gStyle from '../../../assets/global_var/global_var.scss';
// import itemCardList from '../item/productsItem.vue'
import style2 from "../item/itemcard/productsitemcard.scss"
import productsItemCard from "../item/itemCard/productsitemcard.vue"

export default {
  components: {
    productsItemCard,
  },
}
</script>

<template>
    <div class="prodNav">
        <div class="prodNav__links">
            <div class="links links__item">
                <h2>Продукция</h2>
                <button>Тумбы</button>
                <button>Комоды</button>
                <button>Тумбы ТВ</button>
                <button>Будуарные столы</button>
                <button>Шкафы</button>
                <button>Пеналы</button>
                <button>Письменные столы</button>
                <button>Предметы декора</button>
                <button>Кровать</button>
            </div>
            <div class="links links__col">
                <h2>Коллекции</h2>
                <button>Геометрия</button>
                <button>Толедо</button>
                <button>Валенсия</button>
                <button>Сиена</button>
                <button>Корсика</button>
                <button>Прованс</button>
                <button>Тоскана</button>
                <button>Магия</button>
                <button>Домино</button>
                <button>Сиена-конфети</button>
                <button>Корсика-слим</button>
            </div>
        </div>
    </div>
    <div id="itemContainer" class="catalog__item">
        <productsItemCard
        :collect="'Толедо'"
        :id="1"
        :category="'кровать'"
        :title="'Толедо-2'"
        :imgUrl="'/src/assets/img/card-img1.png'"
        />
        <productsItemCard
        :collect="'Толедо'"
        :id="2"
        :category="'шкаф'"
        :title="'Толедо-2'"
        :imgUrl="'/src/assets/img/card-img2.png'"
        />
        <productsItemCard
        :collect="'Геометрия'"
        :id="3"
        :category="'кровать'"
        :title="'Геометрия'"
        :imgUrl="'/src/assets/img/card-img3.png'"
        />
        <productsItemCard
        :collect="'Толедо'"
        :id="1"
        :category="'кровать'"
        :title="'Толедо-2'"
        :imgUrl="'/src/assets/img/card-img1.png'"
        />
        <productsItemCard
        :collect="'Толедо'"
        :id="2"
        :category="'шкаф'"
        :title="'Толедо-2'"
        :imgUrl="'/src/assets/img/card-img2.png'"
        />
        <productsItemCard
        :collect="'Геометрия'"
        :id="3"
        :category="'кровать'"
        :title="'Геометрия'"
        :imgUrl="'/src/assets/img/card-img3.png'"
        />
    </div>
</template>