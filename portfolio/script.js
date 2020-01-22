

document.querySelector('.menuB').onclick = function(){
    console.log('la la laa laa');
    document.querySelector('.burger-menu-menu').style.display = 'block';
    document.querySelector('.closeB').style.display = 'block';
    document.querySelector('.menuB').style.display = 'none';

    
}

document.querySelectorAll('.ul-burger li').forEach(function(el){
    el.onclick = function(){
        document.querySelector('.burger-menu-menu').style.display = 'none';
        document.querySelector('.closeB').style.display = 'none';
        document.querySelector('.menuB').style.display = 'block';
    }
    
})


document.querySelector('.closeB').onclick = function(){
    document.querySelector('.burger-menu-menu').style.display = 'none';
    document.querySelector('.closeB').style.display = 'none';
    document.querySelector('.menuB').style.display = 'block';
}

// document.querySelector('.project').onmouseover = function(){
//     document.querySelector('.name-project a').style.color = 'brown'
// }
