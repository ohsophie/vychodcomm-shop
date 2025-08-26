<script setup>
  import { ref } from "vue";
  import emailjs from "@emailjs/browser";

  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const subject = ref("");
  const message = ref("");

  const serviceID = "service_jpwh3kc";
  const templateID = "template_wzyhd19";
  const publicKey = "rXVugR7sAvTlSvbCq";

  const sendEmail = async () => {
    if (!name.value || !email.value || !message.value) {
      alert("Vyplňte polia meno, e-mail a text správy!");
      return;
    }

    const templateParams = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Správa odoslaná!");
      name.value =
        email.value =
        phone.value =
        subject.value =
        message.value =
          "";
    } catch (error) {
      console.error(error);
      alert("Chyba pri odosielaní e-mailu!");
    }
  };
</script>

<template>
  <div class="contactHead">
    Ak mas nejake otazky alebo navrhy, kontaktuj nas:
  </div>

  <div class="contact">
    <form class="contactForm" @submit.prevent="sendEmail">
      <label for="fname">Tvoje meno:</label>
      <input
        v-model="name"
        type="text"
        id="fname"
        name="name"
        placeholder="Tvoje meno.."
      />

      <label for="femail">Tvoj E-mail:</label>
      <input
        v-model="email"
        type="email"
        id="femail"
        name="email"
        placeholder="Tvoj E-mail.."
      />

      <label for="ftel">Číslo telefónu:</label>
      <input
        v-model="phone"
        type="tel"
        id="ftel"
        name="tel"
        placeholder="Číslo telefónu.."
      />

      <label for="fquestion">Vyber predmet otázky:</label>
      <select v-model="subject" id="question" name="question">
        <option value="Otázka ohľadom objednávky">
          Otázka ohľadom objednávky
        </option>
        <option value="Otázka ohľadom dodavky">Otázka ohľadom dodavky</option>
        <option value="Otázka ohľadom sortimentu">
          Otázka ohľadom sortimentu
        </option>
        <option value="Mam návrh dizajnu a chcem sa zúčastniť v projekte">
          Mam návrh dizajnu a chcem sa zúčastniť v projekte
        </option>
        <option value="Iná otázka">Iná otázka</option>
      </select>

      <label for="message">Text spravy:</label>
      <textarea
        v-model="message"
        id="message"
        name="message"
        placeholder="Tu napíš spravu alebo otázku.."
      ></textarea>

      <input class="subBut" type="submit" value="Odoslať" />
    </form>
  </div>
</template>

<style scoped>
  .contactHead {
    font-size: 25px;
    text-align: center;
    margin: 20px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
    width: 700px;
  }

  .contactForm input {
    border: none;
    height: 35px;
    padding-left: 15px;
    border-radius: 7px;
    background-color: rgba(250, 250, 250, 0.3);
    border: solid 1px #f5f5f5;
  }

  .contactForm select {
    width: 100%;
    height: 35px;
    padding: 0 40px 0 15px;
    border-radius: 7px;
    border: 1px solid #f5f5f5;
    background-color: rgba(254, 254, 254, 0.3);
    font-size: 14px;
    color: #333;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='12' viewBox='0 0 20 20' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M5 7l5 5 5-5'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
    cursor: pointer;
  }

  .contactForm textarea {
    border: none;
    height: 100px;
    padding: 15px;
    border-radius: 7px;
    background-color: rgba(250, 250, 250, 0.3);
    border: solid 1px #f5f5f5;
    font-family: "Roboto", sans-serif;
  }

  .subBut {
    width: 150px;
    height: 40px;
    margin: 10px;
    align-self: center;
    padding-left: 0 !important;
    background-color: rgba(200, 200, 200, 0.3);
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-radius: 8px;

    font-size: 16px;
    color: #333;
    cursor: pointer;

    transition: transform 0.6s ease, background-color 0.3s ease;
  }

  .subBut:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }

  .subBut:active {
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    .contactForm {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px;
      width: 90%;
    }
  }
</style>
