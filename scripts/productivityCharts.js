//Blender Rendering
Highcharts.chart('blenderRendering', {
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
        categories: ['Core Ultra 9 285K', 'Ryzen 9 9950X', 'Core Ultra 7 265K', 'Core i7-14700K', 'Ryzen 7 9800X3D', 'Core i5-14600K', 'Ryzen 7 9700X', 'Ryzen 7 7700X', 'Ryzen 7 7800X3D', 'Ryzen 5 9600X', 'Ryzen 7 5800X3D'],
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
            text: 'Time to Render (seconds)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' s'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/9.html'
    },
    series: [{
        name: 'Render Time',
        data: [54.9, 56.0, 65.7, 76.7, {
            y: 101.0,
            color: '#f22929'
        }, 105.8, 114.5, 121.5, 131.7, 139.5, 172.6],
        color: '#777'
    }]
});

//Video Editing
Highcharts.chart('videoEditing', {
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
        categories: ['Ryzen 9 9950X', 'Core i7-14700K', 'Ryzen 7 9800X3D', 'Core Ultra 9 285K', 'Core i5-14600K', 'Ryzen 7 9700X', 'Core Ultra 7 265K', 'Ryzen 7 7700X', 'Ryzen 5 9600X', 'Ryzen 7 7800X3D', 'Ryzen 7 5800X3D'],
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
            text: 'Object Tracking Completion Time (seconds)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' s'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/12.html'
    },
    series: [{
        name: 'Encode Time',
        data: [10.7, 10.8, {
            y: 11.8,
            color: '#f22929'
        }, 11.9, 12.2, 12.6, 12.7, 13.0, 13.3, 13.9, 16.5],
        color: '#777'
    }]
});

//Media Encoding
Highcharts.chart('mediaEncoding', {
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
        categories: ['Ryzen 9 9950X', 'Core Ultra 9 285K', 'Core Ultra 7 265K', 'Core i7-14700K', 'Core i5-14600K', 'Ryzen 7 9800X3D', 'Ryzen 7 7700X', 'Ryzen 7 9700X', 'Ryzen 7 7800X3D', 'Ryzen 5 9600X', 'Ryzen 7 5800X3D'],
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
            text: 'Time to Encode (seconds)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' s'
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
        href: 'https://www.techpowerup.com/review/amd-ryzen-7-9800x3d/12.html'
    },
    series: [{
        name: 'Completion Time',
        data: [24.2, 24.9, 28.0, 29.3, 39.5, {
            y: 39.7,
            color: '#f22929'
        }, 44.1, 45.2, 47.8, 53.9, 57.5],
        color: '#777'
    }]
});
