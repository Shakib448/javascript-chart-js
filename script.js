let myChart = document.getElementById('myChart').getContext('2d');

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
            ]
        }]
    },
    options :{},
});

