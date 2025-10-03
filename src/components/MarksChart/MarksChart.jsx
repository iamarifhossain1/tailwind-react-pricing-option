import React, { use } from 'react';

const MarksChart = ({marksDataPromise}) => {
    
    const marksDataRes = use(marksDataPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData);
    
    // Data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student = {
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math
        }
        return student;
    })

    console.log(marksChartData);
    
    
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;