<template>
  <footer>
    <div class="orange-bar"></div>
    <div class="container wrapper">
      <div class="icon-area">
        <img src="../assets/fecomercio-logo-branco.png" alt="" />
        <div class="white-line"></div>
        <div class="social-area">
          <a href="#" class="social">
            <div class="linkedin"></div>
            <font-awesome-icon
              icon="fa-brands fa-linkedin-in"
              class="fa-2x icon"
            />
          </a>
          <a href="#" class="social">
            <div class="ig"></div>
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="fa-2x icon"
            />
          </a>
          <a href="#" class="social">
            <div class="tt"></div>
            <font-awesome-icon icon="fa-brands fa-twitter" class="fa-2x icon" />
          </a>
          <a href="#" class="social">
            <div class="fb"></div>
            <font-awesome-icon
              icon="fa-brands fa-facebook-f"
              class="fa-2x icon"
            />
          </a>
          <a href="#" class="social">
            <div class="yt"></div>
            <font-awesome-icon icon="fa-brands fa-youtube" class="fa-2x icon" />
          </a>
        </div>
      </div>
      <div class="lists-area">
        <div class="list">
          <h3>Fale conosco</h3>
          <div class="column">
            <div class="item">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="fa-2x icon"
              />
              <p>
                Rua Fecomércio, 101 - Bairro Anchieta Porto Alegre - RS | CEP:
                90200-500
              </p>
            </div>
            <a class="item" href="mailto:fecomercio@fecomercio-rs.org.br">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="fa-2x icon"
              />
              <p>fecomercio@fecomercio-rs.org.br</p>
            </a>
          </div>
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-phone" class="fa-2x icon" />
            <p>(51) 3375-7000</p>
          </div>
        </div>
        <div class="list">
          <h3>Plataformas</h3>
          <ul>
            <li>
              <a href="https://www.fecomercio-rs.org.br/home" target="_blank"
                >Fecomércio</a
              >
              <div class="line"></div>
            </li>
            <li>
              <a href="https://senacrs.com.br/" target="_blank">Senac</a>
              <div class="line"></div>
            </li>
            <li>
              <a href="https://www.sesc-rs.com.br/" target="_blank">Sesc</a>
              <div class="line"></div>
            </li>
            <li>
              <a href="https://www.portaldocomercio.org.br/" target="_blank"
                >CNC</a
              >
              <div class="line"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background-color: var(--brand-blue);
  height: 35rem;
  width: 100%;
  position: relative;
}

.orange-bar {
  width: 100%;
  height: 3px;
  background-color: var(--brand-orange);
  position: absolute;
  box-shadow: 0px 1px 10px var(--brand-orange);
  z-index: 3;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  gap: 5rem;
}
.icon-area {
  position: relative;
  width: 30rem;
}

.icon-area img {
  width: 100%;
  align-self: baseline;
}

.white-line {
  height: 2px;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 70%;
}

.social-area {
  display: flex;
  justify-content: space-between;
}

.icon {
  color: white;
  line-height: 0;
  z-index: 1;
}

.lists-area {
  display: flex;
  margin-left: 5rem;
  justify-content: space-between;
}

.list {
  max-width: 45%;
  width: 100%;
}

.list h3 {
  font-size: 2.8rem;
  color: white;
}

.list,
.column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.list ul {
  list-style: none;
  font-size: 1.6rem;
  line-height: 2;
}

.list a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

.list li {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  width: fit-content;
}

.list li:hover {
  transform: translateX(5px);
}

.list li:hover a {
  color: var(--brand-orange);
}

.item {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.item p {
  color: white;
  font-size: 1.6rem;
}

.line {
  width: 100%;
  height: 2px;
  background-color: var(--brand-orange);
  transform: translateX(-100%);
  transition: 0.3s;
  position: absolute;
  bottom: 5px;
}

.list li:hover .line {
  transform: translateX(0);
}

.social {
  border: 1px solid white;
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
}

.social:hover {
  box-shadow: -2px 2px 0px white;
}

.ig,
.fb,
.tt,
.yt,
.linkedin {
  transition: 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
}

.ig {
  opacity: 0;
  background: rgb(196, 54, 157);
  background: linear-gradient(
    50deg,
    rgba(196, 54, 157, 1) 0%,
    rgba(255, 170, 50, 1) 100%
  );
  transition: 0.2s;
}

.linkedin {
  opacity: 0;
  background: rgb(54, 138, 196);
  background: linear-gradient(
    50deg,
    rgba(54, 138, 196, 1) 0%,
    rgba(0, 151, 255, 1) 100%
  );
}
.tt {
  opacity: 0;
  background: rgb(123, 190, 237);
  background: linear-gradient(
    117deg,
    rgba(123, 190, 237, 1) 0%,
    rgba(0, 151, 255, 1) 100%
  );
}
.fb {
  opacity: 0;
  background: rgb(0, 95, 255);
  background: linear-gradient(
    55deg,
    rgba(0, 95, 255, 1) 0%,
    rgba(87, 173, 233, 1) 100%
  );
}
.yt {
  opacity: 0;
  background: rgb(254, 130, 130);
  background: linear-gradient(
    114deg,
    rgba(254, 130, 130, 1) 0%,
    rgba(255, 0, 0, 1) 100%
  );
}

.social:hover .ig,
.social:hover .tt,
.social:hover .fb,
.social:hover .yt,
.social:hover .linkedin {
  opacity: 1;
}
</style>
