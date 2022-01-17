<template>
  <div id="app">
  
        <!--MAIN WRAPPER START-->
        <div class="main-wrapper clearfix">
            <!-- HEADER START
                ============================================= -->
            <header id="header" class="header-style-1">
                <div class="container">
                    <div class="row clearfix">
                        <div class="header-clear clearfix">
                            <div class="header-content-center clearfix">
                                <!-- LOGO START
                                ============================================= -->
                                <div class="logo">
                                    <a href="/index.html"><img src="/img/rml-logo.png" style="padding-top:0px; width: 200px;" alt="Rocky Mountain Live Logo" /></a>
                                </div>
                                <!-- LOGO END -->
                            </div>
                        <div class="header-content-center clearfix" style="display: none;">
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
                                        <li class="menu-item"><a href="about.html" class="menu-link">About</a></li>
                                        <li class="menu-item"><a href="event.html" class="menu-link">Event</a></li>
                                        <li class="menu-item"><a href="blog.html" class="menu-link">News</a></li>
                                        <li class="menu-item"><a href="contact.html" class="menu-link">Contact</a></li>
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
            <!-- HEADER END -->
            <!-- SECTION -->

    <router-view/>
    <!-- FOOTER START
                ============================================= -->
            <footer id="footer" class="footer clearfix">
                <div class="footer-wrap clearfix">
                    <div class="footer-bottom clearfix">
                        <div class="container">
                            <div class="row">
                                <div class="foot-col column column-1 text-center clearfix">
                                    
                                </div>

                                <div class="foot-col column column-1 text-center clearfix">
                                    <div class="social-footer">
                                        <ul>
                                            <li class="soc-icon"><a href="#"><i class="icon ti-instagram"></i>Instagram</a></li>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-themify-17"></i>Facebook</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="foot-col column column-1 text-center clearfix">
                                    <div id="copyright" class="copyright-text">
                                        © Rocky Mountain Live LLC Copyright 2022.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- FOOTER END -->
        </div>
        <!-- MAIN WRAPPER END -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
