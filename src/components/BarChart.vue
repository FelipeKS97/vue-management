
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  
   mounted () {
    this.renderChart({
        labels: [ 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Desenhos Realizados por mês',
            backgroundColor: '#41b883',
            data: [ 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      })
    }
}

</script>
