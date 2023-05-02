import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

// import "@/styles/infographic";

import {
    BarChart,
    PieChart,
    LineChart,
    BoxplotChart,
    ScatterChart,
} from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
    LegendComponent,
    ToolboxComponent,
    DatasetComponent,
    TransformComponent,
} from "echarts/components";

use([
    CanvasRenderer,
    PieChart,
    BarChart,
    LineChart,
    ScatterChart,
    BoxplotChart,
    GridComponent,
    TitleComponent,
    TooltipComponent,
    DataZoomComponent,
    LegendComponent,
    ToolboxComponent,
    DatasetComponent,
    TransformComponent,
]);