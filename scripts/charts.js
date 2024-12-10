//Efficiency Charts

//Single-Threaded Power Consumption
Highcharts.chart('singleThreadConsumption', {
    chart: {
        type: 'bar',
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Ryzen 7 7800X3D', 'Ryzen 7 7700', 'Core Ultra 7 265K', 'Ryzen 7 9700X', 'Core i5-14600K', 'Ryzen 7 5800X3D', 'Ryzen 5 9600X', 'Ryzen 7 9800X3D', 'Ryzen 7 7700X', 'Ryzen 5 7600X', 'Core Ultra 9 285K', 'Ryzen 9 7900', 'Core i7-14700K', 'Ryzen 9 9950X'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0,
        labels: {
            reserveSpace: false,
            align: 'left',
            x: 7,
            style: {
                color: '#ffffff',
                fontFamily: 'JetBrainsMono',
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Power Consumption (watts)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' W'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
            },
            groupPadding: 0.1
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        text: 'TechPowerUp',
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/23.html'
    },
    series: [{
        data: [14, 18, 21, 22, 22, 22, 22, {
            y: 23,
            color: '#f22929'
        }, 24, 25, 26, 30, 35, 36],
        color: '#777'
    }]
});
