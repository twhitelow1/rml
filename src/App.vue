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
