let show = document.getElementById('demo');
let btn = document.getElementById('btn');
function checkYear(){
    let check = document.getElementById('check').value;
    let year = check;
    if(year % 100 === 0 && year % 400 === 0){
        show.innerHTML = `Please! Enter The Year`
    }else if(year % 4 === 0){
        show.innerHTML = `${year} is Leap Year`;
    }else{
        show.innerHTML = `${year} is Not Leap Year`
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkYear();
    show.style.display = 'block'
})