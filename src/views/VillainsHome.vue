<template>
  <div class="home">
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
                <div class="global-block">
                    <div class="container">
                        <div class="global-block-wrap grid grid-cols-12 gap-8" style="margin-bottom:50px;">
                            <div class="col-span-12 res:col-span-12 global-title">
                                <h2 data-aos="fade-up">Upcoming Events</h2>
                            </div>
                            <div class="global-img col-span-5 sm:col-span-12 res:col-span-12">
                                <div class="item-content">
                                    <div class="img-header">
                                        <a class="pattern" href="#">
                                            <img src="/img/supervillains.jpeg" style="max-width: 649px;"  alt="event-img">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="global-counter col-span-7 sm:col-span-12 res:col-span-12">
                                <div class="global-title">
                                    <a href="#" class="button-basic-1">Reggae</a><a href="#" class="button-basic-1">Ska</a><a href="#" class="button-basic-1">Punk</a>
                                    <h2 data-aos="fade-up">The Supervillains Live @ Agave Nightclub</h2>
                                    <h5 data-aos="fade-up"> 30 SEPTEMBER 2022</h5>
                                    <p class="dugem-text" data-aos="fade-up">Join us for reggae, ska, and punk rock vibes brought to you by The Supervillains from Central Florida. The Florida-bred swamp reggae rockers have been bending genres, partying hard, touring the world, and facilitating dank memories for a lifetime.</p>
                                </div>
                                <div class="global-buy " data-aos="fade-up">
                                    <a href="/event" class="button-basic-1">View Detail</a>
                                    <a href="https://www.eventbrite.com/e/the-supervillains-live-agave-tickets-408276404717" class="button-basic-2">Get Ticket</a>
                                </div>
                                <!-- <div class="global-countdown">
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
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- GlOBAL BLOCK END -->
                <!-- TABLE EVENTS -->
                <!-- <events-table /> -->
                <!-- TABLE EVENTS END -->
                <!-- BLOG LOOP -->
                <!-- <div class="blog-loop">
                    <div class="container">
                        <div class="news-title grid grid-cols-12">
                            <div class="the-title col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
                                <h5 class="head-title-2"> / EVENTS </h5>
                                <h2 class="head-title-1"> Upcoming Event
                                    <span class="title-end">.</span></h2>
                                <p class="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                            </div>
                            <div class="button-view col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
                                <a href="blog.html" class="button-basic-1">ALL JOURNAL</a>
                            </div>
                        </div>
                    </div>
                    <div class="blog-slide">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-1.png" alt="latest-news-img-1">
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="" class="button-basic-1">Event News</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Maecenas ultrices justo metusoer quis facilisis
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href=""><span>August 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-2.png" alt="latest-news-img-2">
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="" class="button-basic-1">Nightlife</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Proin in orci quis elit blandit imperdiet ut eu enim
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href=""><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-3.png" alt="latest-news-img-3">
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Nightlife</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Donec condimentum pulvinorem velitursus vitae
                                                    </a></h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-4.png" alt="latest-news-img-4">
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Event News</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-5.png" alt="latest-news-img-5">
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Contest</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Vivamus pulvinar urna nec ipsum interdum blandi
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div> -->
                <!-- BLOG LOOP END -->

                <!-- TESTIMONIAL BLOCK -->
                <!-- <div class="testimonial-block">
                    <div class="background-overlay"> </div>
                    <div class="testimonial-background"></div>
                    <div class="testimonial-wrap">
                        <div class="the-title text-center">
                            <h5 class="head-title-2"> / TESTIMONIAL </h5>
                            <h2 class="head-title-1">
                                From Great Our Clients
                                <span class="title-end">.</span>
                            </h2>
                        </div>
                        <div class="testimonial-slide">
                            <div class="swipper-button clearfix">
                                <div class="swiper-button-next">
                                    <span>Prev</span>
                                    <div class="car-page-arrow-next"></div>
                                </div>
                                <div class="swiper-button-prev">
                                    <span>Next</span>
                                    <div class="car-page-arrow-prev"></div>
                                </div>

                            </div>
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testi-content">
                                            <div class="testimonial-text">
                                                <p>"I'm the sort of person who takes a camera to dinner or a nightclub because I enjoy taking pictures of people."</p>
                                            </div>
                                            <div class="testimonial-detail-inner">
                                                <div class="testimonial-image">
                                                    <img src="img/testimonial-profile-1.png" alt="testi-1">
                                                </div>
                                                <div class="test-info">
                                                    <h5 class="testi-author">Amanda Zedda</h5>
                                                    <cite class="testi-job">
                                                        Photographer 
                                                    </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testi-content">
                                            <div class="testimonial-text">
                                                <p>“A friend got me a job on the door of the Camden Palace nightclub, which quickly progressed to running the place.”</p>
                                            </div>
                                            <div class="testimonial-detail-inner">
                                                <div class="testimonial-image">
                                                    <img src="img/testimonial-profile-2.png" alt="testi-2">
                                                </div>
                                                <div class="test-info">
                                                    <h5 class="testi-author">Jennifer Aster</h5>
                                                    <cite class="testi-job">
                                                        Musician </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- TESTIMONIAL BLOCK END -->

                <!-- BOOK TABLE -->
                <contact-form />
                <!-- BOOK TABLE END -->
            </section>
            <!-- SECTION END -->
  </div>
</template>

<style>
</style>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>