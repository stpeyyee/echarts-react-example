import { EchartsComponent } from "echarts-react-wrapper"
import { useState } from "react";

export default function LineChart({style}){
    const [echarts, setEcharts] = useState()
    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
    };

    let updateMousemove = (params) => {
      console.log("updateMousemove",params)
    }

    return(
        <EchartsComponent
            onInit={(instance) => setEcharts(instance)}
            style={style} 
            option={option}
            notMerge={true}
            eventsHandler={{ 'mousemove': updateMousemove}}
        />
    )
}