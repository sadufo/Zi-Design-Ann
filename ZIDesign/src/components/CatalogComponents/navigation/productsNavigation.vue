<script>
import style from './productsNavigation.scss';
import gStyle from '../../../assets/global_var/global_var.scss';
import productsItemCard from "../item/itemCard/productsitemcard.vue"

export default {
  components: {
    productsItemCard,
    },
    data() {
    return {
      items: [
        { collect: "Толедо", id: 1, category: "Кровати", title: "Толедо-2", imgUrl: "/src/assets/img/card-img1.png" },
        { collect: "Толедо", id: 2, category: "Шкафы", title: "Толедо-2", imgUrl: "/src/assets/img/card-img2.png" },
        { collect: "Толедо", id: 1, category: "Кровати", title: "Толедо-2", imgUrl: "/src/assets/img/card-img1.png" },
        { collect: "Толедо", id: 2, category: "Шкафы", title: "Толедо-2", imgUrl: "/src/assets/img/card-img2.png" },
      ],
      selectedCategory: null,
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory) {
        return this.items.filter((item) => item.category === this.selectedCategory);
      }
      return this.items;
    },
  },
  methods: {
    filterItems(category) {
      this.selectedCategory = category;
    },
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
                <button  @click="filterItems('Шкафы')">Шкафы</button>
                <button>Пеналы</button>
                <button>Письменные столы</button>
                <button>Предметы декора</button>
                <button  @click="filterItems('Кровати')">Кровати</button>
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
        <div v-for="item in filteredItems" :key="item.id">
          <productsItemCard
            class="itemCard"
            :collect="item.collect"
            :id="item.id"
            :category="item.category"
            :title="item.title"
            :img-url="item.imgUrl"
          ></productsItemCard>
        </div>
    </div>

</template>