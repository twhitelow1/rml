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
                <!-- GlOBAL BLOCK -->
                <div class="global-block" style="display: none;">
                    <div class="container">
                        <div class="global-block-wrap grid grid-cols-12 gap-8">
                            <div class="global-img col-span-5 sm:col-span-12 res:col-span-12">
                                <div class="item-content">
                                    <div class="img-header">
                                        <a class="pattern" href="#">
                                            <img src="/img/event-img.png" alt="event-img">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="global-counter col-span-7 sm:col-span-12 res:col-span-12">
                                <div class="global-title">
                                    <a href="#" class="button-basic-1">Electro</a>
                                    <h2 data-aos="fade-up">Global Fridays Glow Up 4.20</h2>
                                    <h5 data-aos="fade-up">/ 26 SEPTEMBER 2021</h5>
                                    <p class="dugem-text" data-aos="fade-up">Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum vestibulum sem neque.</p>
                                </div>
                                <div class="global-buy" data-aos="fade-up">
                                    <a href="/single-event.html" class="button-basic-1">View Detail</a>
                                    <a href="#" class="button-basic-2">Get Ticket</a>
                                </div>
                                <div class="global-countdown">
                                    <div class="event-counter clearfix">
                                        <div class="countdown">
                                            <div class="days-count float">
                                                <h3 id="days"></h3>
                                                <span>Days</span>
                                            </div>
                                            <div class="hours-count float">
                                                <h3 id="hours"></h3>
                                                <span>Hours</span>
                                            </div>
                                            <div class="minutes-count float">
                                                <h3 id="minutes"></h3>
                                                <span>Minutes</span>
                                            </div>
                                            <div class="seconds-count float">
                                                <h3 id="seconds">
                                                </h3>
                                                <span>Seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- GlOBAL BLOCK END -->
                <!-- Contact us -->
                <div class="small-screen-intro">
                    <div class="container">
                        <div class="book-wrap news-title grid grid-cols-12 gap-24">
                            <div class="the-title col-span-6 sm:col-span-12 res:col-span-12">
                                <h5 class="head-title-2"> Rocky Mountain Live</h5>
                                <h2 class="head-title-1"> Bringing Live Events To The Rockies</h2>
                                <!-- <p class="dugem-text"> Talent looking for a talent buyer? Venue looking for a promoter to book talent? Looking to get involved? Want to say hello? </p> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact US END -->
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