<template>
  <div class="container-about">
    <div class="text">
      <h1>SOMOS UNA POLLERÍA</h1>
    <p>LA CRESTA SIGNIFICA POLLO A LA BRASA CON BUENA SAZÓN, PAPAS FRITAS, ARROZ CHAUFA Y ENSALADA PARA ACOMPAÑAR. ADEMÁS DE TODAS NUESTRAS YA FAMOSAS SALSAS MT. UTILIZAMOS AJÍES, ESPECIAS E INSUMOS PERUANOS PARA LA PREPARACIÓN DE NUESTROS PRODUCTOS TORI.</p>
    <p>LA CRESTA TIENE COMO CONCEPTO APELAR A LA DIVERSIDAD DE NUESTRO PERÚ. HAY MILES DE MANERAS DE ARMAR UN PLATO DE POLLO A LA BRASA, CADA MIEMBRO DE LA FAMILIA LO ARMA COMO MÁS LE GUSTA. EN LO QUE SI ESTAMOS TODOS DE ACUERDO, ES QUE EL POLLO A LA BRASA UNE PERSONAS, DE DISTINTOS GUSTOS, EN UNA SOLA MESA.</p>
    </div>
    <img src="../assets/Imagenes/3seccion/LACRESTA+1.jpg" alt="">
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Oswald:wght@200..700&family=Rubik+Microbe&display=swap');
.container-about {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.text{
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.text h1 {
  font-family: "Rubik Microbe", system-ui;
  font-size: 45px;
  color: #C94527;
}

.text p {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: #C94527;
}

img {
  width: 50%;
}
</style>