function generarNumeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * max) + min;
}

document.write(generarNumeroAleatorio(20, 30));