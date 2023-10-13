var doms = {
    input: document.querySelector('input'),
    btn: document.querySelector('#btn'),
    day: document.querySelector('#day'),
    month:document.querySelector('#month'),
    year:document.querySelector('#year')

}

function checkEmpty(){
    var day = doms.day.value;
    var month = doms.month.value;
    var year = doms.year.value;
    var input = document.querySelector('input');

    if(input === ''){
        style();
    }
}

function style(){
    var error = document.querySelector('.error');
    error.textContent = 'The field is required!'
    error.style.color ='red';
    doms.input.border ='1px solid red';
    clearTimeout();
    setTimeout(function(){
        error.textContent = '';
        error.style.color ='';
        doms.input.border ='';
    },4000);
};

btn.addEventListener('click', checkEmpty);