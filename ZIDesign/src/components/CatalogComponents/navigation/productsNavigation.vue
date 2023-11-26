<script>
import style from './productsNavigation.scss';
import gStyle from '../../../assets/global_var/global_var.scss';
import productsItemCard from "../item/itemCard/productsItemCard.vue"

export default {
  components: {
    productsItemCard,
    },
    data() {
    return {
      items: [
        { collect: "Домино", id: 1, category: "Будуарные столы", title: "Толедо-2", imgUrl: "/src/assets/img/domino/1.jpg", price: "10$" },
        { collect: "Домино", id: 2, category: "Кровати", title: "Толедо-2", imgUrl: "/src/assets/img/domino/2.jpg", price: "10$"},
        { collect: "Домино", id: 3, category: "Комоды", title: "Толедо-2", imgUrl: "/src/assets/img/domino/3.jpg", price: "10$"},
        { collect: "Домино", id: 4, category: "Комоды", title: "Толедо-2", imgUrl: "/src/assets/img/domino/4.jpg", price: "10$"},
        { collect: "Домино", id: 5, category: "Комоды", title: "Толедо-2", imgUrl: "/src/assets/img/domino/5.jpg", price: "10$"},
        { collect: "Домино", id: 6, category: "Кровати", title: "Толедо-2", imgUrl: "/src/assets/img/domino/6.jpg", price: "10$"},
        { collect: "Домино", id: 7, category: "Тумбы", title: "Толедо-2", imgUrl: "/src/assets/img/domino/7.jpg", price: "10$"},
        { collect: "Домино", id: 8, category: "Предметы декора", title: "Толедо-2", imgUrl: "/src/assets/img/domino/8.jpg", price: "10$"},
        { collect: "Домино", id: 9, category: "Письменные столы", title: "Толедо-2", imgUrl: "/src/assets/img/domino/9.jpg", price: "10$"},
        { collect: "Домино", id: 10, category: "Тумбы ТВ", title: "Толедо-2", imgUrl: "/src/assets/img/domino/10.jpg", price: "10$"},
        { collect: "Домино", id: 11, category: "Шкафы", title: "Толедо-2", imgUrl: "/src/assets/img/domino/11.jpg", price: "10$"},
        { collect: "Домино", id: 12, category: "Шкафы", title: "Толедо-2", imgUrl: "/src/assets/img/domino/12.jpg", price: "10$"},
        { collect: "Геометрия", id: 13, category: "Шкафы", title: "Толедо-2", imgUrl: "/src/assets/img/123.png", price: "101$"},
      ],
      selectedCategory: null,
      selectedCollect: null,

    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory) {
        return this.items.filter((item) => item.category === this.selectedCategory);
      } if (this.selectedCollect) {
        return this.items.filter((item) => item.collect === this.selectedCollect);
      }
      return this.items;
    },
    // filteredCollect() {
    //   if (this.selectedCollect) {
    //     return this.items.filter((item) => item.collect === this.selectedCollect);
    //   }
    //   return this.items;
    // },
  },
  methods: {
    filterItems(category) {
      this.selectedCollect = null;
      this.selectedCategory = category;
    },
    filterCollect(collect) {
      this.selectedCategory = null;
      this.selectedCollect = collect;
    },
  },
}
</script>

<template>
    <div class="prodNav">
        <div class="prodNav__links">
            <div class="links links__item">
                <h2>Продукция</h2>
                <button @click="filterItems('Тумбы')">Тумбы</button>
                <button @click="filterItems('Комоды')">Комоды</button>
                <button @click="filterItems('Тумбы ТВ')">Тумбы ТВ</button>
                <button @click="filterItems('Будуарные столы')">Будуарные столы</button>
                <button @click="filterItems('Шкафы')">Шкафы</button>
                <button @click="filterItems('Пеналы')">Пеналы</button>
                <button @click="filterItems('Письменные столы')">Письменные столы</button>
                <button @click="filterItems('Предметы декора')">Предметы декора</button>
                <button @click="filterItems('Кровати')">Кровати</button>
            </div>
            <div class="links links__col">
                <h2>Коллекции</h2>
                <button @click="filterCollect('Геометрия')">Геометрия</button>
                <button>Толедо</button>
                <button>Валенсия</button>
                <button>Сиена</button>
                <button>Корсика</button>
                <button>Прованс</button>
                <button>Тоскана</button>
                <button>Магия</button>
                <button @click="filterCollect('Домино')">Домино</button>
                <button>Сиена-конфети</button>
                <!-- <button>Корсика-слим</button> -->
            </div>
        </div>
    </div>
    <div id="itemContainer" class="catalog__item">
        <div class="itemCardProd" v-for="item in filteredItems" :key="item.id">
          <productsItemCard
            class="itemCard"
            :collect="item.collect"
            :id="item.id"
            :category="item.category"
            :img-url="item.imgUrl"
            :title="item.title"
            :price="item.price"
          ></productsItemCard>
        </div>
    </div>

</template>