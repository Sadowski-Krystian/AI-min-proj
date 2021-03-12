

init = () => {
    console.log("działa");
    /*let pian = document.querySelectorAll('.piano');
    for(let i = 0; i<pian.length;i++){
        pian[i].addEventListener('click', console.log("dziala"))
    }*/

    pad();
    piano();
}

piano = () => {
    let item = document.querySelectorAll('[data-pianosound]');
    for (let i = 0; i < item.length; i++) {



        item[i].addEventListener('click', function () {
            console.log(item[i].className);
            let audio = new Audio('audio/' + item[i].dataset.pianosound + '.mp3');
            console.log(audio);
            audio.play();
        });



    }
}

pad = () => {
    let event = 0;
    let items = document.querySelectorAll('[data-soundnr]');
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            let btn = document.getElementsByTagName('button');

            let audio = new Audio('audio/' + items[i].dataset.soundnr + '.mp3');
            console.log("pausa");
            audio.pause();
            audio.currentTime = 0;



            audio.play();
            console.log(event);
            if (event == 0) {
                console.log(event);
                console.log("dodano event");
                btn[0].addEventListener('click', but);
                event += 1;
            }




            function but() {
                console.log("kliknięto");
                audio.play();

                audio.addEventListener('ended', loop)
                items[i].setAttribute('style', 'background-color: red;')
            }
            function loop() {
                console.log();


                this.currentTime = 0;
                this.play();


                items[i].addEventListener('click', destroy)
                function destroy() {
                    audio.removeEventListener('ended', loop);
                    btn[0].removeEventListener('click', but);
                    event = 0;
                    console.log(event);
                    items[i].removeEventListener('click', destroy);
                    items[i].removeAttribute('style', 'background-color: red;')
                }




            }
        })
        console.log(items[i].dataset.soundnr);
    }
}


window.addEventListener('load', init);