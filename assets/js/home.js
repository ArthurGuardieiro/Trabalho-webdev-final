let qtdCLick = 0;

document.querySelector("#img-cachorro-de-rua").addEventListener('click', mudarFoto);
document.querySelector('button').addEventListener('click', mudarFoto);


function mudarFoto() {
    $("#img-cachorro-de-rua").fadeTo(500, 0).delay(500).fadeTo(500, 1);
    document.querySelector("#img-cachorro-de-rua").removeEventListener('click', mudarFoto);
    document.querySelector('button').removeEventListener('click', mudarFoto);
    setTimeout(() => {
        if (qtdCLick % 2 !== 0) {
            document.querySelector("#img-cachorro-de-rua").src = './assets/img/img2.jpg';
        }   
        else document.querySelector("#img-cachorro-de-rua").src = './assets/img/foto1.jpg';
    }, 1000);

    setTimeout( () => {
        document.querySelector("#img-cachorro-de-rua").addEventListener('click', mudarFoto);
        document.querySelector('button').addEventListener('click', mudarFoto);
    }, 2000 )

    qtdCLick++;
    document.querySelector('.badge').innerHTML = qtdCLick;
}





