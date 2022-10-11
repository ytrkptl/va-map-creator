import "./style.css";
import rough from "roughjs";
import { Pane } from "tweakpane";

document.querySelector("#app").innerHTML = `
  <svg id="canvas" width="1000" height="600" viewBox="1800 830 200 300"></svg>
  <canvas id="canvas2"></canvas>
`;

const svg = document.getElementById("canvas");

const rc = rough.svg(svg);
const pathData =
  "M2133.44 917.758 2129.66 927.397 2131.38 931.183 2132.75 927.397 2135.5 916.725ZM2014.5 893.661 2012.09 890.219 2015.53 889.875 2018.97 886.776 2020.34 880.58 2019.66 878.859 2020 877.138 2018.97 874.728 2016.91 873.007 2015.53 872.662 2013.81 871.286 2011.75 869.22 2008.31 869.22 2006.25 868.876 2004.88 867.499 2005.22 865.778 1999.38 863.712 1996.63 864.745 1992.5 864.401 1990.09 861.991 1988.38 861.303 1987.69 858.893 1989.75 856.139 1989.75 853.041 1985.63 852.352 1982.19 849.254 1979.09 849.599 1973.59 848.566 1972.22 850.975 1970.84 856.483 1969.13 864.401 1934.75 846.5 1934.06 849.599 1937.16 855.106 1934.41 863.024 1934.75 873.007 1930.63 875.761 1928.91 882.99 1925.81 885.744 1921 891.94 1917.91 894.694 1914.47 903.3 1906.22 899.513 1898.31 928.774 1893.84 934.282 1884.22 932.56 1879.75 926.02 1871.84 923.61 1871.5 939.789 1866.69 945.642 1868.06 950.805 1860.84 958.379 1862.22 964.919 1849.5 986.606 1846.06 997.966 1851.22 1002.1 1846.06 1008.64 1846.41 1013.46 1838.5 1020.34 1836.09 1016.56 1821.31 1027.23 1816.16 1023.78 1814.09 1028.6 1816.84 1030.32 1815.12 1033.42 1796.22 1041.68 1785.91 1035.49 1783.16 1041.34 1776.62 1047.54 1768.72 1047.88 1753.59 1039.96 1753.25 1034.8 1748.09 1032.39 1750.84 1028.26 1748.44 1026.19 1731.59 1048.91 1721.62 1052.36 1711.31 1062.68 1709.94 1070.26 1702.72 1074.73 1702.37 1080.58 1697.56 1085.4 1691.37 1087.12 1689.66 1093.67 1686.22 1095.04 1662.5 1109.5 1761.84 1098.14 1762.53 1094.7 1778.34 1092.98 1777.31 1095.39 1878.38 1083.34 2013.81 1058.21 2113.84 1037.21 2111.78 1033.08 2113.16 1032.73 2116.25 1035.83 2115.91 1031.01 2114.88 1024.47 2120.38 1028.6 2123.47 1035.83 2123.47 1031.36 2111.78 1012.42 2111.78 1008.29 2109.38 1005.54 2104.91 1007.95 2106.63 1012.77 2103.88 1012.77 2102.5 1009.33 2100.44 1012.42 2097.34 1008.64 2090.13 1008.29 2089.44 1010.7 2094.59 1017.93 2089.78 1015.52 2088.06 1012.08 2086.69 1014.83 2083.94 1015.18 2078.78 1021.03 2079.81 1015.52 2079.81 1010.7 2074.66 1008.29 2068.47 1006.57 2067.78 1000.72 2065.72 996.245 2063.66 1000.03 2057.81 996.589 2050.94 997.622 2051.63 994.524 2056.78 993.835 2059.88 995.557 2065.72 992.803 2068.81 994.18 2070.53 997.622 2070.53 1000.03 2077.06 1001.41 2078.09 1004.51 2081.19 1005.88 2084.28 1010.01 2089.09 1004.51 2091.16 1004.51 2090.81 997.278 2086.34 1000.72 2084.28 997.622 2089.44 996.933 2085.31 993.835 2081.19 995.901 2080.84 990.048 2075 990.737 2067.44 986.95 2061.25 979.377 2073.63 986.95 2076.72 987.983 2082.56 985.229 2076.72 982.131 2078.78 980.066 2075.34 978.345 2078.09 977.656 2077.06 974.558 2080.84 977.656 2082.22 974.902 2083.59 979.377 2087.72 982.131 2089.78 980.41 2088.06 978.345 2087.72 969.738 2083.94 969.394 2078.44 966.64 2081.53 962.854 2074.66 962.509 2073.28 960.788 2068.47 962.854 2063.66 960.1 2061.94 955.969 2054.72 951.838 2047.5 945.642 2039.94 939.101 2050.25 943.576 2053.34 947.707 2060.56 950.116 2068.47 958.723 2069.16 952.871 2071.22 957.346 2079.13 959.067 2079.13 945.297 2076.38 941.511 2080.16 942.888 2080.5 937.38 2069.84 932.56 2064.34 931.872 2059.88 931.183 2060.91 927.053 2055.75 926.02 2055.41 923.955 2049.22 923.955 2048.53 926.708 2046.13 923.266 2036.84 923.266 2033.41 921.889 2032.72 918.447 2028.59 916.381 2027.22 911.217 2025.16 909.841 2022.75 913.627 2019.66 914.315 2016.56 916.725 2011.41 916.725 2008.31 912.25 2009.69 901.579 2011.41 893.317 2013.47 895.038ZM2089.78 933.593 2092.88 933.249 2092.88 931.183 2090.13 931.527ZM2115.56 982.475 2112.13 991.77 2116.25 987.295ZM2109.38 929.806 2111.78 930.839 2111.09 937.38 2109.38 935.659 2104.91 939.101 2108.34 940.478 2102.16 955.624 2102.5 983.508 2109.03 994.18 2110.75 989.016 2112.13 979.721 2111.09 971.804 2113.5 968.706 2112.81 963.886 2116.94 961.821 2114.88 960.1 2116.59 957.69 2119.34 961.477 2118.66 965.263 2117.28 978.689 2121.06 971.115 2122.44 960.444 2122.78 950.116 2121.75 943.232 2123.81 935.314 2127.59 929.118 2127.94 921.545 2128.97 918.447 2113.16 923.955 2110.75 926.708Z";

const initialOptions = {
  //roughness: 8,
  //bowing: 30,
  //seed: 10,
  stroke: "#861F41",
  strokeWidth: 2,
  fill: "#e87822",
  fillStyle: "sunburst",
  fillWeight: 2,
  hachureAngle: 270,
  hachureGap: 6,
  //curveStepCount: 1,
  //curveFitting,
  //strokeLineDash: [5], // array of numbers similar to lineDashOffset canvas property
  //strokeLineDashOffset: 1,
  //fillLineDash: [5, 40],
  //fillLineDashOffset: 1,
  //disableMultiStroke,
  //disableMultiStrokeFill: true,
  //simplification: 0.1, // set this between 0 and 1
  /*  dashOffset below works in conj. with dashed style
      - length of dash in px. otherwise uses hachure gap value */
  //dashOffset: 40,
  //dashGap: 25,
  //zigzagOffset: 1,
  //preserveVertices,
};

let options = { ...initialOptions };

function createRoughGraph() {
  let node = rc.path(pathData, options);
  svg.appendChild(node);
  svg.firstChild.firstChild.setAttribute("id", "svg-path");
}

createRoughGraph();

function triggerDownload(imgURI, ext) {
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });

  var a = document.createElement("a");
  a.setAttribute("download", `MY_VA_MAP.${ext}`);
  a.setAttribute("href", imgURI);
  a.setAttribute("target", "_blank");

  a.dispatchEvent(evt);
}

const handleClick = () => {
  var canvas2 = document.getElementById("canvas2");
  var ctx = canvas2.getContext("2d");
  var data = new XMLSerializer().serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    triggerDownload(url, "svg");
    DOMURL.revokeObjectURL(url);
  };

  img.src = url;
};

const modifyGraph = (key, value) => {
  svg.innerHTML = "";
  options[key] = value;
  createRoughGraph();
};

// Note: use e.value instead of e.target.value for use with TweakPane

// use TweakPane for better UI
const pane = new Pane({
  title: "Settings",
  expanded: true,
});

// add dropdown menu for selecting fill style
const fillStyleSelect = pane.addBlade({
  view: "list",
  label: "Fill Style",
  options: [
    { text: "Sunburst", value: "sunburst" },
    { text: "Solid", value: "solid" },
    { text: "Hachure", value: "hachure" },
    { text: "Cross-hatch", value: "cross-hatch" },
    { text: "Dashed", value: "dashed" },
    { text: "Zigzag", value: "zigzag" },
    { text: "Dots", value: "dots" },
    { text: "Zigzag Line", value: "zigzag-line" },
  ],
  value: "solid",
});
// add event listener
fillStyleSelect.on("change", (e) => modifyGraph("fillStyle", e.value));

// add input for changing stroke, followed by event listener
const strokeColorInput = pane.addInput(options, "stroke", { label: "Stroke" });
strokeColorInput.on("change", (e) => modifyGraph("stroke", e.value));

// add input & event listener for changing fill
const fillColorInput = pane.addInput(options, "fill", { label: "Fill" });
fillColorInput.on("change", (e) => modifyGraph("fill", e.value));

// add input & event listener for strokeWidth
const strokeWidthInput = pane.addInput(options, "strokeWidth", {
  min: 0,
  max: 20,
  step: 0.1,
  label: "Stroke Width",
});
strokeWidthInput.on("change", (e) => modifyGraph("strokeWidth", e.value));

// add input & event listener for changing hachure angle
const hachureAngleInput = pane.addInput(options, "hachureAngle", {
  min: 0,
  max: 360,
  step: 1,
  label: "Hachure Angle",
});
hachureAngleInput.on("change", (e) => modifyGraph("hachureAngle", e.value));

// add input & event listener for hachure gap
const hachureGapInput = pane.addInput(options, "hachureGap", {
  min: 0,
  max: 80,
  step: 1,
  label: "Hachure Gap",
});
hachureGapInput.on("change", (e) => modifyGraph("hachureGap", e.value));

// add input & event listener for fillWeight
const fillWeightInput = pane.addInput(options, "fillWeight", {
  min: 0,
  max: 20,
  step: 0.1,
  label: "Fill Weight",
});
fillWeightInput.on("change", (e) => modifyGraph("fillWeight", e.value));

// add button & event listener for downloading SVG
const btn1 = pane.addButton({
  title: "Download SVG",
});

btn1.on("click", handleClick);

// add button & event listener for Resetting the map
const btn2 = pane.addButton({
  title: "Reset",
});

btn2.on("click", (e) => {
  svg.innerHTML = "";
  options = { ...initialOptions };
  createRoughGraph();
});
