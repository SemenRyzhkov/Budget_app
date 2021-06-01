<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">
        Submit
      </ElButton>
    </ElForm>

    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <span>Value must not be 0</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">Ok</el-button>
      </span>
    </el-dialog>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data() {
    const checkValue = (rule, value, callback) => {
      let check = null;
      if (!value) {
        check = callback(new Error("Please input the value"));
      } else if (!Number.isInteger(value)) {
        check = callback(new Error("Please input digits"));
      } else check = callback();
      return check;
    };

    return {
      dialogVisible: false,
      checkValue: null,
      formData: {
        type: "INCOME",
        comment: "",
        value: 0
      },
      rules: {
        type: [{ required: true, message: "Please, select type", trigger: "blur" }],
        comment: [{ required: true, message: "Please, input comment", trigger: "change" }],
        value: [{ validator: checkValue, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.formData.value = this.absValue(this.formData.value);
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
    absValue(value) {
      if (this.formData.type === "OUTCOME") {
        return value > 0 ? -value : value;
      }
      if (this.formData.type === "INCOME") {
        return Math.abs(value);
      }
      return value;
    }
  }
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
