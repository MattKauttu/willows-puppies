<template>
  <section>
    <h3>Growth Chart</h3>
    <div class="growth-chart">
      <table>
        <tr v-for="record in growthChart" :key="record.date">
          <td>{{ record.date }}</td>
          <td>{{ record.weight }} oz</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  growthChart: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.growth-chart {
  margin-top: 20px;
}

.growth-chart table {
  width: 100%;
  border-collapse: collapse;
}

.growth-chart td {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>