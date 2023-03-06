
let num = 0;

document.getElementById('btn-click').addEventListener('click', function(){
    const clearIntervalId = setInterval(()=>{
        if(num < 5){
            console.log(++num);
            const count = document.getElementById('increase');
            count.innerText = num;
        }
        else{
            clearInterval(clearIntervalId);
        }
    }, 1000);
});