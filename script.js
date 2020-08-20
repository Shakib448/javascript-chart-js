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
        datasets : []
    },
    options :{},
});