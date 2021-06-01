<template>
  <div class="total-value" :class="{ red: isMinus, black: isZero, green: isPlus }">
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isPlus() {
      return this.total > 0;
    },
    isZero() {
      return this.total === 0;
    },
    isMinus() {
      return this.total < 0;
    }
  }
};
</script>

<style scoped>
.total-value {
  max-width: 460px;
  font-style: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  font-size: 26px;
  text-transform: uppercase;
  margin: 10px auto;

}

.red {
  background: #f56c6c;
  color: rgba(219, 13, 13, 0.918);
}
.black {
  color: #303133;
  background: rgba(173, 173, 173, 0.151);
}
.green {
  color: #67c23a;
  background: rgba(27, 252, 6, 0.151);
}
</style>
