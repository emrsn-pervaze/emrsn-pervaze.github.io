var colors = {
    green: 'rgb(27, 196, 123)',
    yellow: 'rgb(239, 228, 79)',
    red: 'rgb(242, 83, 65)'
};

var genericConfig = {
    renderTo: 'chart0',
    width: 200,
    height: 200,
    units: "",
    minValue: 0,
    maxValue: 4.5,
    majorTicks: [
        "0.0",
        "0.5",
        "1.0",
        "1.5",
        "2.0",
        "2.5",
        "3.0",
        "3.5",
        "4.0",
        "4.5"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 0.0,
            "to": 1.0,
            "color": colors.green
        },
        {
            "from": 1.0,
            "to": 2.0,
            "color": colors.yellow
        },
        {
            "from": 2.0,
            "to": 4.5,
            "color": colors.red
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: true,
    needleType: "arrow",
    needleShadow: true,
    needleWidth: 5,
    needleStart: 0,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear",
    valueBox: false,
    valueBoxStroke: 0,
    valueBoxWidth: 2,
    valueText: '2.3',
    valueTextShadow: false,
    valueBoxBorderRadius: 0,
    valueInt: 1,
    valueDec: 1
}

var gauges = [{
    renderTo: "chart0",
    minValue: 0,
    maxValue: 4.5,
    majorTicks: [
        "0.0",
        "0.5",
        "1.0",
        "1.5",
        "2.0",
        "2.5",
        "3.0",
        "3.5",
        "4.0",
        "4.5"
    ],
    highlights: [
        {
            "from": 0.0,
            "to": 1.0,
            "color": colors.green
        },
        {
            "from": 1.0,
            "to": 2.0,
            "color": colors.yellow
        },
        {
            "from": 2.0,
            "to": 4.5,
            "color": colors.red
        }
    ],
    obj: null
},
{
    renderTo: "chart1",
    minValue: 0,
    maxValue: 28,
    majorTicks: ['0', '4', '8', '12', '16', '20', '24', '28'],
    highlights: [
        {
            "from": 0,
            "to": 8,
            "color": colors.green
        },
        {
            "from": 8,
            "to": 20,
            "color": colors.yellow
        },
        {
            "from": 20,
            "to": 28,
            "color": colors.red
        }
    ],
    obj: null
},
{
    renderTo: "chart2",
    minValue: 0,
    maxValue: 14,
    majorTicks: ['0%', '2%', '4%', '6%', '8%', '10%', '12%', '14%'],
    highlights: [
        {
            "from": 0,
            "to": 1,
            "color": colors.green
        },
        {
            "from": 1,
            "to": 2,
            "color": colors.yellow
        },
        {
            "from": 2,
            "to": 14,
            "color": colors.red
        }
    ],
    valueSuffix: '%',
    obj: null
}];

function getChartConfig(customizations) {
    var obj = JSON.parse(JSON.stringify(genericConfig));
    obj.renderTo = customizations.renderTo;
    obj.highlights = customizations.highlights;
    return obj;
}

gauges.forEach(o => {
    var x = Object.assign({}, genericConfig);
    x = { ...x, ...o }
    o.obj = new RadialGauge(x).draw();
});


$(function () {
    console.log("yes");
    $('.set').on('click', function (el) {
        var id = $(this).attr('name');
        var items = gauges.filter(o => o.renderTo == id);
        if (items && items.length) {
            var gauge = items[0];
            var val = $('#value-' + id).val();
            if (val) {
                gauge.obj.options.units = val;
                //gauge.obj.draw();
                gauge.obj.value = val;
                $('#value-display-' + id).text(val + (gauge.valueSuffix || ''));
                console.log(gauge.obj);
            }
        }
    });
})

//  var gauge1 = 
//  gauge1.value = 2.5;
//  var gauge2 = new RadialGauge(getChartConfig(charts[1])).draw();
//  gauge2.value = 3.5;
