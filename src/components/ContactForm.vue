<template>
  <div class="book-table">
      <div class="container">
          <div class="book-wrap news-title grid grid-cols-12 gap-24">
              <div class="the-title col-span-6 sm:col-span-12 res:col-span-12">
                  <h5 class="head-title-2"> Contact Us</h5>
                  <h2 class="head-title-1"> Please Use The Form To Contact Us
                      <span class="title-end">.</span></h2>
                  <p class="dugem-text"> Talent looking for a talent buyer? Venue looking for a promoter to book talent? Looking to get involved? Want to say hello? </p>
              </div>
              <div class="contact-form-style col-span-6 sm:col-span-12 res:col-span-12">
                  <form @submit.prevent="sendEmail">
                    <input type="text" name="ame" size="40" placeholder="Name" v-model="name">
                    <input type="text" name="email" size="40" placeholder="Email" v-model="email">
                    <textarea name="message" cols="40" rows="10" placeholder="Text" v-model="message"></textarea>
                    <input type="submit" value="Send" class="button-basic-1">
                  </form>

              </div>
          </div>
      </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      message: "",
      name: "",
      email: "",
    };
  },
  created() {},
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm("service_d0p13ph", "coming-soon-contact", e.target, "user_yiblzDPqAxnAAVYk662EA", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>