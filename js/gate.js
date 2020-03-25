window.onload = function(){
    var lis = document.querySelectorAll('.allgates li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function(){
            for (let j = 0; j < lis.length; j++) {
                lis[j].classList.remove('active')
            }
            lis[i].classList.add('active')
        }
    }
}
