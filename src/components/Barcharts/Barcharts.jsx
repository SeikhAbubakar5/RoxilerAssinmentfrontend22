import React, { useEffect, useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { getPriceRange } from '../Services/api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import "./Barcharts.css"
ChartJS.register(CategoryScale, LinearScale, BarElement);


const BarChart = ({ selectedMonth }) => {
  const [priceRanges, setPriceRanges] = useState([]);

  useEffect(() => {
    const fetchPriceRanges = async () => {
      try {
        const { data } = await getPriceRange(selectedMonth);

        
        if (Array.isArray(data)) {
          setPriceRanges(data);
        } else {
          console.error('array received:', data);
          setPriceRanges([]);
        }
      } catch (error) {
        console.error('Error fetching price ranges:', error);
        setPriceRanges([]);
      }
    };

    fetchPriceRanges();
  }, [selectedMonth]);

  const data = useMemo(() => ({
    labels: priceRanges.map((range) => range.range),
    datasets: [
      {
        label: 'Number of Items',
        data: priceRanges.map((range) => range.count),
        backgroundColor: 'rgba(54, 243, 243, 0.95)',
      },
    ],
  }), [priceRanges]);

  return(
    <div className='barCharts'>
      <h3>Bar- Charts</h3>
          <Bar  data={data} />
    </div>
  )
};

export default BarChart;
