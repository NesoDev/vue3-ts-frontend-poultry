<template>
  <div class="container-home">
    <div class="section" id="section-1">
      <img class="background-img" src="../assets/Imagenes/detalle+ajita.jpg" alt="">
      <div class="container-logo-contact">
        <img class="logo-img" src="../assets/Iconos/logo/c85421a2-d4cf-4a2e-be97-d0fd2c2a21a6-removebg-preview.png" alt="">
        <ul class="container-contact">
          <li>WHATSAPP</li>
          <li>PEDIDO ONLINE</li>
          <li>LLÁMANOS AQUÍ</li>
        </ul>
      </div>
    </div>
    <div class="section" id="section-2">
      <img src="../assets/Imagenes/1seccion/TRES+PLATOS.png" alt="">
    </div>
    <div class="section" id="section-3">
        <h2>DESCRUBE TODO LO QUE TENEMOS PARA TI</h2>
        <h3>POLLO A LA BRASA, PAPAS FRITAS, CHAUFITA, NUESTRAS ENSALADAS, LAS YA FAMOSAS SALSAS MT Y MUCHO MÁS.</h3>
        <div class="container-buttons">
          <button>CARTA<br>DELIVERY</button>
          <button>CARTA<br>SALÓN</button>
        </div>
    </div>
    <div class="section" id="section-4">
      <img src="../assets/Imagenes/1seccion/edit+mesa+familia+cenital+manos.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Oswald:wght@200..700&family=Rubik+Microbe&display=swap');
.container-home {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-betwee;
}

.section {
  width: 100%;
}

#section-1 {
  position: relative;
  height: 700px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
}

#section-1 .background-img {
  position: absolute;
  width: 100%;
  height: 700px;
  object-fit: none;
  filter:brightness(0.5);
  z-index: 0;
}

#section-1 .container-logo-contact {
  width: 400px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  z-index: 1;
}

#section-1 .container-logo-contact .logo-img {
  width: 350px;
  height: auto;
  filter: brightness(1);
}

#section-1 .container-logo-contact .container-contact {
  width: 90%;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 10px;
}

.container-contact li {
  width: 100%;
  font-family: "Rubik Microbe", system-ui;
  font-size: 25px;
  list-style: none;
  padding: 20px 0px;
  height: auto;
  background: black;
  color: #fff;
  border-radius: 40px;
  transition: background ease-out 0.25s;
  cursor: pointer;
}

.container-contact li:hover {
  background: #00000097;
}

#section-2 {
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
}

#section-2 img {
  width: 95%;
}

#section-3 {
  width: 100%;
  font-family: "Rubik Microbe", system-ui;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

#section-3 h2 {
  color: #000;
  font-size: 35px;
  margin: 0;
}

#section-3 h3 {
  color: #000;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 500;
}

#section-3 .container-buttons {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 200px;
}

#section-3 .container-buttons button {
  width: 180px;
  background: #000;
  border: none;
  font-family: "Rubik Microbe", system-ui;
  font-size: 20px;
  color: #fff;
  padding: 10px 0px;
  border-radius: 40px;
  transition: background ease-out 0.25s;
  cursor: pointer;
}

#section-3 .container-buttons button:hover {
  background: #000000b8;
}

#section-4 {
  width: 100%;
  height: 600px;
}

#section-4 img {
  width: 100%;
  height: 600px;
  object-fit: none;
}



</style>
