import ReactEcharts from "echarts-for-react";

function ScatterPlot({
    data
}){
   const colorhue=data.map((e)=>{
    return  [e["Color intensity"], e.Hue];
   })
   return (
    <ReactEcharts
      option={{
        title: {
          text: "Scatter Plot",
          left: "center",
          top: "0",
          textStyle: {
            fontSize: 20
          },
          show: true
        },
        grid: {
          width: "80%",
          height: "50%",
          containLabel: true
        },
        xAxis: {
          name: "Color Intensity",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [18, 18, 18, 18]
          }
        },
        yAxis: {
          name: "Hue",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [18, 18, 18, 18]
          }
        },
        series: [
          {
            symbolSize: 5,
            data: colorhue,
            type: "scatter"
          }
        ]
      }}
    />
  );
};

export default ScatterPlot;
