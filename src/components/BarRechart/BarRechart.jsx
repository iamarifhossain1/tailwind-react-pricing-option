import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const barChartData = 
[
  {
    "id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 82,
    "math": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 85,
    "chemistry": 76,
    "math": 88
  },
  {
    "id": 3,
    "name": "Nabila",
    "physics": 92,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Hasan",
    "physics": 67,
    "chemistry": 72,
    "math": 80
  },
  {
    "id": 5,
    "name": "Mitu",
    "physics": 74,
    "chemistry": 85,
    "math": 79
  },
  {
    "id": 6,
    "name": "Tariq",
    "physics": 81,
    "chemistry": 77,
    "math": 84
  },
  {
    "id": 7,
    "name": "Rafi",
    "physics": 90,
    "chemistry": 91,
    "math": 87
  },
  {
    "id": 8,
    "name": "Shima",
    "physics": 69,
    "chemistry": 73,
    "math": 71
  },
  {
    "id": 9,
    "name": "Borna",
    "physics": 88,
    "chemistry": 86,
    "math": 92
  },
  {
    "id": 10,
    "name": "Jahid",
    "physics": 75,
    "chemistry": 70,
    "math": 78
  }
]

const BarRechart = () => {
    return (
        <div>
            <BarChart width={1000} height={350} data={barChartData}>
                <XAxis dataKey={"physics"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"math"} fill="#8884d8"></Bar>
                <Bar dataKey={"chemistry"} fill="#82ca9d"></Bar>
            </BarChart>
            
        </div>
    );
};

export default BarRechart;