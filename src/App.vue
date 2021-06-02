<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <BudgetList @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({}),
  computed: {
    ...mapGetters("budgets", ["budgetList"]),
    totalBalance() {
      return Object.values(this.budgetList).reduce((acc, item) => acc + item.value, 0);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
