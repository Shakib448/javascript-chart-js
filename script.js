let myChart = document.getElementById('myChart').getContext('2d');

// Global opting
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart,{
    type : 'bar',
    data: {
        labels : [
            'Dhaka',
            'Chittagong',
            'Khulna',
            'Rajshahi',
            'Comilla',
            'Shibganj',
            'Natore',
            'Rangpur',
            'Tungi',
            'Narsingdi'
        ],
        datasets : [{
            label : 'Population',
            data : [
                10356500,	
                3920222,	
                1342339,	
                700133,	
                389411,
                378701,
                369138,
                343122,
                337579,
                281080	
            ],
            backgroundColor :[
                'rgb(255, 35, 35)',
                'rgb(255, 35, 35, 0.5)',
                'rgb(250, 162, 162, 0.5)',
                'rgb(118, 95, 95, 0.5)',
                'rgb(197, 180, 180, 0.5)',
                'rgb(235, 172, 172, 0.5)',
                'rgb(98, 8, 8, 0.5)',
                'rgb(171, 73, 73, 0.5)',
                'rgb(132, 0, 0, 0.5)',
                'rgb(38, 1, 1, 0.5)'
            ],
            borderWidth : 1,
            borderColor : '#777',
            hoverBorderWidth : 3,
            hoverBorderColor : '#000'
        }]
    },
    options :{
        title : {
            display : true,
            text : "Population In Bangladesh",
            fontSize : 25
        },
        legend :{
            labels : {
                fontColor : '#00'
            }
        },
        tooltips : {
            enabled : true,
        }
    },
});

