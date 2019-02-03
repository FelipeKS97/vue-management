<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Novos cadastros na Plataforma',
          backgroundColor: '#41b883',
          data: [40, 39, 10, 40, 39, 80]
        },
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
</script>
