<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <div class="button_container">
        <el-button class="all" type="primary" @click="switchFilter('ALL')"
          >Show all</el-button
        >
        <el-button class="income" type="success" @click="switchFilter('INCOME')"
          >Income</el-button
        >
        <el-button
          class="outcome"
          type="danger"
          @click="switchFilter('OUTCOME')"
          >Outcome</el-button
        >
      </div>
      <template v-if="!isEmpty">
        <div v-for="(item, prop) in sortedList" :key="prop">
          <ListItem :item="item" @deleteItem="deleteItem" />
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" />
    </el-card>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'BudgetList',
  components: {
    ListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    filter: 'ALL',
  }),
  created() {
    this.sortList('ALL');
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    sortedList() {
      if (this.filter === 'ALL') return this.list;

      const newArr = Object.entries(this.list).filter(
        ([, value]) => value.type === this.filter
      );
      return newArr.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    switchFilter(val) {
      switch (val) {
        case 'INCOME': {
          this.filter = val;
          break;
        }
        case 'OUTCOME': {
          this.filter = val;
          break;
        }
        default: {
          this.filter = val;
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.button_container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
