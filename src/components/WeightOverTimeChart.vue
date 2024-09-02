<template>
  <section>
    <h1 class="text-2xl font-bold">Growth Chart</h1>
    <p class="text-lg mt-4">
        Hover over a data point to view the exact weight for that day.
    </p>
    <div :class="containerClass" :style="customStyles">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { parseISO, format } from 'date-fns'

// Register the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

// Define the props
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  gender: {
    type: String,
    default: 'female'
  },
  weightUnit: {
    type: String,
    default: 'oz'
  },
  containerClass: {
    type: String,
    default: 'p-4 rounded-lg shadow-md w-full h-64 md:h-80 lg:h-96'
  },
  customStyles: {
    type: Object,
    default: () => ({})
  },
  chartLabel: {
    type: String,
    default: 'Weight'
  }
})

// Function to format the date as "Abbreviated month day"
const formatDate = (dateStr) => {
  const date = parseISO(dateStr)
  const options = { month: 'short', day: 'numeric' }
  return format(date, 'MMM d', { timeZone: 'UTC'})
}

// Computed properties for chart data and options
const chartData = computed(() => {
  if (!props.data || props.data.length === 0) {
    return {
      labels: [],
      datasets: []
    }
  }

  return {
    labels: props.data.map(entry => formatDate(entry.date)),
    datasets: [
      {
        label: `${props.chartLabel} (${props.weightUnit})`,
        backgroundColor: props.gender === 'male' ? 'rgba(0, 123, 255, 0.2)' : 'rgba(255, 105, 180, 0.2)',
        borderColor: props.gender === 'male' ? 'rgba(0, 123, 255, 1)' : 'rgba(255, 105, 180, 1)',
        pointBackgroundColor: props.gender === 'male' ? 'rgba(0, 123, 255, 1)' : 'rgba(255, 105, 180, 1)',
        data: props.data.map(entry => entry.weight),
        fill: false,
        tension: 0.4
      }
    ]
  }
})

const chartOptions = computed(() => {
  const labelCount = props.data.length;
  let maxTicksLimit = Math.floor(labelCount / 4);

  if (maxTicksLimit < 4) maxTicksLimit = 4; // Ensure there's a minimum number of ticks

  return {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day',
          color: '#666' // X-axis label color, neutral for both light and dark mode
        },
        ticks: {
          color: '#666', // X-axis tick color, neutral for both light and dark mode
          maxTicksLimit: maxTicksLimit,
          autoSkip: true
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.1)' // Subtle grid lines for better readability
        }
      },
      y: {
        title: {
          display: true,
          text: `${props.chartLabel} (${props.weightUnit})`,
          color: '#666' // Y-axis label color, neutral for both light and dark mode
        },
        ticks: {
          color: '#666' // Y-axis tick color, neutral for both light and dark mode
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.1)' // Subtle grid lines for better readability
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#666' // Legend text color, neutral for both light and dark mode
        }
      },
      tooltip: {
        backgroundColor: '#333', // Tooltip background color for readability
        titleColor: '#fff',      // Tooltip title color for readability
        bodyColor: '#fff'        // Tooltip body color for readability
      }
    }
  };
});
</script>
