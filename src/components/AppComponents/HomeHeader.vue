<template>
  <header id="header" class="header-style-1">
      <div class="container">
          <div class="row clearfix">
              <div class="header-clear clearfix">
                  <div class="header-content-center clearfix">
                      <!-- LOGO START
                      ============================================= -->
                      <div class="logo">
                          <a href="/"><img src="/img/rml-logo.png" style="padding-top:0px; width: 200px;" alt="Rocky Mountain Live Logo" /></a>
                      </div>
                      <!-- LOGO END -->
                  </div>
              <div class="header-content-center clearfix" style="">
                      <!-- NAVIGATION START============================================= -->
                      <nav class="main-nav">
                          <!-- Mobile menu toggle button (hamburger/x icon) -->
                          <input id="main-menu-state" type="checkbox" />
                          <label class="main-menu-btn sub-menu-trigger" for="main-menu-state">
                              <span class="main-menu-btn-icon"></span> Toggle main menu visibility
                          </label>
                          <!-- Sample menu definition -->
                          <ul id="main-menu" class="sm sm-clean">
                              <li class="menu-item"><a href="index.html" class="menu-link active">Home</a></li>
                              <!-- <li class="menu-item"><a href="about.html" class="menu-link">About</a></li> -->
                              <!-- <li class="menu-item"><a href="" class="menu-link">Events</a></li> -->
                              <li class="menu-item"><a href="https://shop.rockymountain.live" class="menu-link">Store</a></li>
                              <!-- <li class="menu-item"><a href="contact.html" class="menu-link">Contact</a></li> -->
                          </ul>
                      </nav>
                      <!-- NAVIGATION END -->
                  </div>
                  <div class="header-content-right" style="display:none;">
                      <div class="header-info head-item clearfix">
                          <div class="info-wrap">
                              <div class="search-wrap">
                                  <button id="btn-search" class="btn btn--search"><i class="icon-simple-line-icons-143"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="search" style="display:none;">
                      <button id="btn-search-close" class="btn--search-close"><i class="icon-themify-1"></i></button>
                      <form class="search__form">
                          <input class="search__input" name="search" type="search" placeholder="Search..." />
                          <span class="search__info">Hit enter to search or ESC to close</span>
                      </form>
                  </div><!-- /search -->
              </div>
          </div>
      </div>
  </header>
</template>
<script>
export default {};
</script>