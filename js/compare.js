
//car
let carArr = [];

class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (el.checked && carArr.length >= 2) {
        alert("Marque só 2 carros");
        el.checked = false;
        return;
    }

    if (el.checked) {
        carArr.push(carClass);
    } else {
        const index = GetCarArrPosition(carArr, carClass);
        carArr.splice(index, 1);
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    const compare0 = carArr[0];
    const compare1 = carArr[1];

    document.getElementById('compare_image_0').innerHTML = `<img src="${compare0.image}" alt=""/>`;
    document.getElementById('compare_image_1').innerHTML = `<img src="${compare1.image}" alt=""/>`;

    document.getElementById('compare_modelo_0').innerHTML = compare0.nome;
    document.getElementById('compare_modelo_1').innerHTML = compare1.nome;

    document.getElementById('compare_alturacacamba_0').innerHTML = compare0.alturaCacamba;
    document.getElementById('compare_alturacacamba_1').innerHTML = compare1.alturaCacamba;

    document.getElementById('compare_alturaveiculo_0').innerHTML = compare0.alturaVeiculo;
    document.getElementById('compare_alturaveiculo_1').innerHTML = compare1.alturaVeiculo;

    document.getElementById('compare_alturasolo_0').innerHTML = compare0.alturaSolo;
    document.getElementById('compare_alturasolo_1').innerHTML = compare1.alturaSolo;

    document.getElementById('compare_capacidadecarga_0').innerHTML = compare0.capacidadeCarga;
    document.getElementById('compare_capacidadecarga_1').innerHTML = compare1.capacidadeCarga;

    document.getElementById('compare_motor_0').innerHTML = compare0.motor;
    document.getElementById('compare_motor_1').innerHTML = compare1.motor;

    document.getElementById('compare_potencia_0').innerHTML = compare0.potencia;
    document.getElementById('compare_potencia_1').innerHTML = compare1.potencia;

    document.getElementById('compare_volumecacamba_0').innerHTML = compare0.volumeCacamba;
    document.getElementById('compare_volumecacamba_1').innerHTML = compare1.volumeCacamba;

    document.getElementById('compare_roda_0').innerHTML = compare0.roda;
    document.getElementById('compare_roda_1').innerHTML = compare1.roda;

    document.getElementById('compare_preco_0').innerHTML = compare0.preco;
    document.getElementById('compare_preco_1').innerHTML = compare1.preco;
}
