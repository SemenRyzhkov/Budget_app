<template>
  <div>
    <div class="list-item">
      <span class="budget_comment"> {{ item.comment }} </span>
      <span
        class="budget_value"
        :class="
          item.type === 'INCOME' ? 'el-icon-top color-income' : 'el-icon-bottom color-outcome'
        "
      >
        {{ item.value }}</span
      >
      <ElButton type="danger" size="mini" @click="showDialog(item.id)">Delete</ElButton>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <span>Are you sure?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteItem">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ListItem",
  data: () => ({
    dialogVisible: false,
    deleteItemId: null,
    top: "el-icon-top",
    bottom: "el-icon-bottom"
  }),
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions("budgets", ["deleteIncome"]),
    deleteItem() {
      if (this.deleteItemId === null) return;
      this.deleteIncome(this.deleteItemId);
      this.deleteItemId = null;
      this.dialogVisible = false;
    },
    showDialog(id) {
      this.dialogVisible = true;
      this.deleteItemId = id;
    }
  }
};
</script>

<style scoped>
.budget_value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 15px;
}

.color-income {
  color: rgba(29, 192, 14, 0.548);
}
.color-outcome {
  color: rgba(219, 13, 13, 0.918);
}
</style>
