import { type } from "@testing-library/user-event/dist/type";
import ReactEcharts from "echarts-for-react";

    const BarChart = ({data}) => {
        const Alcohol = data.map((e) => {
          return e.Alcohol;
        });
      
        const Acid = data.map((e) => {
          return e["Malic Acid"];
        });
        return (
          <ReactEcharts
            option={{
              title: {
                text: "Bar Chart",
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
                type: "category",
                data: Alcohol,
                name: "Alcohol",
                nameLocation: "middle",
                nameTextStyle: {
                  padding: [18, 18, 18, 18]
                }
              },
              yAxis: {
                type: "value",
                name: "Malic Acid",
                nameLocation: "middle",
                nameTextStyle: {
                  padding: [18, 18, 18, 18]
                }
              },
              series: [
                {
                  data: Acid,
                  type: "bar"
                }
              ]
            }}
          />
        );
      };
 export default BarChart;
