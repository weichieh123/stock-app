<template>
  <v-sheet class="d-flex">
    <v-text-field
    class="stock-code"
      v-model="stockCode"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
      @change="handleSearch"
    ></v-text-field
    ><v-select class="stock-country" label="Select" v-model="country" :items="['TW']"></v-select>
  </v-sheet>
  <v-card v-if="quote" :title="stockCode+'.'+country" :subtitle="quote" text="..."></v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSearchStock } from '@/store/modules/searchStock'

const searchStockStore = useSearchStock()
const stockCode = ref('')
const country = ref('TW')
const quote = computed(() => searchStockStore.quote)

const handleSearch = async () => {
  await searchStockStore.searchStock(stockCode.value, country.value)
};
</script>

<style lang="scss" scoped>
.stock {
  &-code {
    margin: 0 8px;
  }
  &-country {
    margin: 0 8px;
    :deep(.v-input__details) {
      min-height: 0;
    }
  }
}
</style>
