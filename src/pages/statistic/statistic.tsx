

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Barcelona', 'real madrid', 'PSG', 'Dortmund', 'Man city', 'Liverpool'],
  datasets: [
    {
      label: 'champions league',
      data: [5, 15, 1, 1, 1, 6],
      backgroundColor: [
        'rgba(209, 15, 57, 0.66)',
        'rgba(246, 246, 246, 0.9)',
        'rgba(31, 25, 116, 0.69)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(27, 24, 87, 1)',
        'rgba(11, 20, 26, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const  Statistic = () =>   {
  return <Pie data={data} />;
}


export default Statistic
