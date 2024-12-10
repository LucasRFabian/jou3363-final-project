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
        categories: ['Ryzen 7 7800X3D', 'Core Ultra 7 265K', 'Ryzen 7 9700X', 'Core i5-14600K', 'Ryzen 7 5800X3D', 'Ryzen 5 9600X', 'Ryzen 7 9800X3D', 'Ryzen 7 7700X', 'Core Ultra 9 285K', 'Core i7-14700K', 'Ryzen 9 9950X'],
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
        name: 'Power Draw',
        data: [14, 21, 22, 22, 22, 22, {
            y: 23,
            color: '#f22929'
        }, 24, 26, 35, 36, ],
        color: '#777'
    }]
});

//Multi-Threaded Power Consumption
Highcharts.chart('multiThreadConsumption', {
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
        categories: ['Ryzen 7 7800X3D', 'Ryzen 5 9600X', 'Ryzen 7 9700X', 'Ryzen 7 5800X3D', 'Ryzen 7 7700X', 'Core i5-14600K', 'Core Ultra 7 265K', 'Ryzen 7 9800X3D', 'Ryzen 9 9950X', 'Core i7-14700K', 'Core Ultra 9 285K'],
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
        name: 'Power Draw',
        data: [74, 80, 80, 89, 135, 145, 155, {
            y: 155,
            color: '#f22929'
        }, 220, 222, 235],
        color: '#777'
    }]
});
