window.onload = function(){
    var bannerlis = document.querySelectorAll('.banneritems li')
    var controllis = document.querySelectorAll('.bannercotrol li')
    var banner = document.querySelectorAll('.banner')
    var index = 0
    var timer
    timer = window.setInterval(() => {
        index++
        if (index > 3) {
            index = 0
        }
        for (let i = 0; i < bannerlis.length; i++) {
            bannerlis[i].classList.remove('active')
            controllis[i].classList.remove('active')
        }
        bannerlis[index].classList.add('active')
        controllis[index].classList.add('active')
    }, 4000);
    for (let i = 0; i < controllis.length; i++) {
        controllis[i].xb = i
        controllis[i].onclick = function(){
            for (let j = 0; j < bannerlis.length; j++) {
                bannerlis[j].classList.remove('active')
                controllis[j].classList.remove('active')
            }
            index = this.xb
            bannerlis[index].classList.add('active')
            controllis[index].classList.add('active')
        }
    }
}