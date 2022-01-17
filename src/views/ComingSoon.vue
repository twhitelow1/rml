<template>
  <div class="comingsoon">
    <section class="content">
                <!-- MAIN VIDEO BACKGROUND -->
                <div class="main-video">
                    <div class="image-background">
                    </div>
                    <div class="image-title">
                        <p>Bringing live events to the High Rockies of Colorado</p>
                        <p> Stay tuned for more information on upcoming events in Colorado Ski Towns.</p>
                        <!-- <a href="#" class="button-basic-1" data-aos="fade-up">All Events</a> -->
                    </div>
                    <div class="video-background">
                        <video autoplay muted loop id="myVideo">
                            <source src="/img/concert-loop.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <!-- MAIN VIDEO BACKGROUND END -->
                <!-- Contact us -->
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
                                <input type="text" name="ame" size="40" placeholder="Name" v-model="name">
                                <input type="text" name="email" size="40" placeholder="Email" v-model="email">
                                <textarea name="message" cols="40" rows="10" placeholder="Text" v-model="message"></textarea>
                                <input type="submit" value="Send" class="button-basic-1">

                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact US END -->
            </section>
            <!-- SECTION END -->
  </div>
</template>

<style>
</style>

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