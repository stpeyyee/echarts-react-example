import { EchartsComponent } from "echarts-react-wrapper";
import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
export default function LineChart({ style }) {
  const [echarts, setEcharts] = useState();
  const option = {
    brush: {
      toolbox: ["lineX"],
      type: "lineX",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  let updateMousemove = useMemo(
    () =>
      debounce((params) => {
        console.log("updateMousemove", params);
      }, 100),
    []
  );

  let updateBrushSelected = useMemo(
    () =>
      debounce((params) => {
        console.log("updateBrushSelected", params);
      }, 100),
    []
  );

  let updateGlobalCursorTaken = useMemo(
    () =>
      debounce((params) => {
        console.log("updateGlobalCursorTaken", params);
      }, 100),
    []
  );

  const eventHandler = useMemo(
    () => ({
      // mouseMove: updateMousemove,
      brushSelected: updateBrushSelected,
      globalCursorTaken: updateGlobalCursorTaken,
    }),
    [updateBrushSelected, updateGlobalCursorTaken]
  );

  return (
    <EchartsComponent
      onInit={(instance) => setEcharts(instance)}
      style={style}
      option={option}
      notMerge={true}
      eventsHandler={eventHandler}
    />
  );
}
