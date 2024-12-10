//1080p Performance
Highcharts.chart('1080pPerformance', {
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
        categories: ['Ryzen 7 9800X3D', 'Ryzen 7 7800X3D', 'Core i7-14700K', 'Ryzen 9 9950X', 'Ryzen 7 9700X', 'Ryzen 5 9600X', 'Core Ultra 9 285K', 'Ryzen 7 7700X', 'Core i5-14600K', 'Core Ultra 7 265K', 'Ryzen 7 5800X3D'],
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
            text: 'Frames per Second (FPS)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' FPS'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/18.html'
    },
    series: [{
        name: 'Framerate',
        data: [{
            y: 199.7,
            color: '#f22929'
        }, 193.1, 182.5, 180.0, 178.4, 177.5, 176.3, 175.9, 172.9, 172.1, 171.7],
        color: '#777'
    }]
});

//1440p Performance
Highcharts.chart('1440pPerformance', {
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
        categories: ['Ryzen 7 9800X3D', 'Ryzen 7 7800X3D', 'Core i7-14700K', 'Core Ultra 9 285K', 'Core Ultra 7 265K', 'Core i5-14600K', 'Ryzen 5 9600X', 'Ryzen 9 9950X', 'Ryzen 7 9700X', 'Ryzen 7 7700X', 'Ryzen 7 5800X3D'],
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
            text: 'Frames per Second (FPS)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' FPS'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/19.html'
    },
    series: [{
        name: 'Framerate',
        data: [{
            y: 161.6,
            color: '#f22929'
        }, 156.8, 153.2, 150.7, 149.4, 149.9, 148.6, 148.5, 148.3, 148.1, 147.5],
        color: '#777'
    }]
});

//4K Performance
//1440p Performance
Highcharts.chart('4KPerformance', {
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
        categories: ['Ryzen 7 9800X3D', 'Ryzen 7 7800X3D', 'Core i7-14700K', 'Ryzen 9 9950X', 'Core Ultra 9 285K', 'Ryzen 7 5800X3D', 'Core i5-14600K', 'Ryzen 5 9600X', 'Ryzen 7 7700X', 'Core Ultra 7 265K', 'Ryzen 7 9700X'],
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
            text: 'Frames per Second (FPS)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' FPS'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/20.html'
    },
    series: [{
        name: 'Framerate',
        data: [{
            y: 101.4,
            color: '#f22929'
        }, 101.1, 99.8, 99.0, 98.9, 98.8, 98.7, 98.7, 98.6, 98.4, 98.3 ],
        color: '#777'
    }]
});