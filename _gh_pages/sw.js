/* global workbox:false */

self.importScripts('docs/4.1/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "89223abd7b1a7674daf15c8bd07105d2"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "6bff6684e0bf43a6567d89fc3eeab570"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "81004756d55ed70da040c726a45aa39f"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "860ad23cec1ef8fb5fc80601ff4f1386"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "9eaf7b6f584497e8d633f476b17b8c02"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-outline.svg",
    "revision": "93998c8ffa206f4b730ef50ad20692c5"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-punchout.svg",
    "revision": "59cc410ba9e916189b9ea54f03bb4574"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-solid.svg",
    "revision": "ba23603c8668f4fe65dc2c7996053224"
  },
  {
    "url": "docs/4.1/assets/css/docs.min.css",
    "revision": "7bacdef511ee5c028f0420e23cb89cdd"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "docs/4.1/assets/img/favicons/manifest.json",
    "revision": "c29cc62ce253308cabb1d2bceb023a3f"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "docs/4.1/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "426e00c049a15eb18c37bc88ca6746d9"
  },
  {
    "url": "docs/4.1/assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "docs/4.1/assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "docs/4.1/assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "docs/4.1/assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "docs/4.1/assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "docs/4.1/assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "docs/4.1/assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "docs/4.1/assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "docs/4.1/assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "docs/4.1/assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "601e79db575b83b62241f5dfa6285757"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "22bf8d66e30bebcd96f802d02a8f6035"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "8c10154e2c94aa9fa95363632837f35c"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "1a453ccf9465ee6aa815747de7035f94"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "bf3a9d878f1845675ca2e7f1d2aea6a4"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "ccbba5d0efa98516667de70ff30a1d38"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "ab47fdb6b37ac057dcb7312a53417114"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "1942ce61f95e9e4ea27404d33b6fb71b"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "cad46008dccfaa64c3938ddaade23d0d"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "3ba10cfd73456fb7e7e4fc52aa822241"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "518bd8b353e19014b58d95da9a11fc69"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "a3dd91f7f4b0d03a018035606be51432"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "6cae71f9dad8a305ba78554cf9b14f7a"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "d08cd6869a447f987b97aab79c566a63"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "1bb08891d0eadcefcb6024ccb4745c5d"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "5d06ef9d1d7a8854799ab68977105abe"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "dc17e8dc79a80ab6cdccfd2e9859bb5e"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "4eeaeff16d918c4f071c5654cd85d2fd"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "cae220b2540f80df388645620803c8dd"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "4a7fbc5c6ff7110c7af4afbba64d8bfa"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "d086e9c5a1231e20659fe525de980615"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "c4410633e3cca71329a2483a3fb74cb9"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "8f7d53587f0794f521d8dc0fa55d02a9"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "8466067e0d3588506ce87ad4d489e1b6"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "2fb9bbf36f9c8e50bc5d61a6aa58b44b"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "4518a712772ac09849bc0de0e8b1b9b6"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "518e6f8a4d0bd04638d4193ff8674785"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "da7b8a3b32e7c5293e0bde42ac627375"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "33897487678830df03dc8288185f68cb"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "0137e2f9bea256d1d3a0e2c006cab15c"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.css",
    "revision": "ff2874cf2b810904a86e75fb662dddf9"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.min.css",
    "revision": "71671e5000bc7347d6080c92b0bfeeb4"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.css",
    "revision": "2009a327a433d376395fa327c9eb3d99"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.min.css",
    "revision": "5469e5527b70efcd51fb0deb1e213c63"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.css",
    "revision": "048eee20404aaa9829bdb15b972040a8"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.min.css",
    "revision": "52a9012936b36f685004c80bfb923d40"
  },
  {
    "url": "docs/4.1/dist/fonts/FontAwesome/fa-brands-400.svg",
    "revision": "42f9fd6acee87559ac0d6a33488db65e"
  },
  {
    "url": "docs/4.1/dist/fonts/FontAwesome/fa-regular-400.svg",
    "revision": "0c41971339b9fc5b1cefb0abad1e2e69"
  },
  {
    "url": "docs/4.1/dist/fonts/FontAwesome/fa-solid-900.svg",
    "revision": "4478b4d7022cad174e4c04246fe622ef"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.js",
    "revision": "82aa0a99aa5b24006857e4a1f7693c61"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.min.js",
    "revision": "ef58fee438cd2da2c3b33ff6f1cfeebf"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.js",
    "revision": "0065cf181a90daef201519a6bf6f2ec0"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.min.js",
    "revision": "67176c242e1bdc20603c878dee836df3"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e884afc370b7f73395903344ed35cea2"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "3cf256607b5e39d812d9abfa8ac6e334"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "098be9399aa2bda1a8d62d2c720ab225"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "bd2d5e609ff9f87fc74f7f5107a4f569"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "52f0215a5005cc7c21c5083dd7939a7e"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "8e5fb15c4155f38020798e5c2bfb38b7"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "a3beb88caa4b44de31976e74ad5eaa83"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "048fae28475f3bdd6d7d1612e8ece5cc"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "58e66f4dae74a72052e9c5252171e0f8"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "2875509e000a7223d1ff26c2df02213c"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "09fa5920e645876f3ba65eb85f4f2b28"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "0889b053e0315e02b24128c8ad71590f"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "7754ea51ef4513e1c099aca97857fd37"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "60d48d720381e681354f76bdce6870f5"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "9bb1da29cef11b3993343808dbb488cd"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "9d593c1276a24a936d31f9edfd7860df"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "f7ead48d9f5f43f295f9635e5f18d6c2"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "77004f809351706b609d3cbbf1aec27f"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "c7a79fd01d21b29cbdf2c398d71c7f48"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "f33ab0ac2368877adbfec2d8d1ce8317"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "708a755e83b96d289c3165ef83e13d9d"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "0e4ae047b5c504a3125b99c0975a85fb"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "c06793e3c3a28147e7efcec8c2636538"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "1c2bda672d15143ded6e3b5e5be0b6ea"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "e4efe420b0a96e18293c1afeb20ce6d3"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "253d015ba1f15d1a6bc38913e14f5850"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "dbbfced32a95a6c50bdc755d460832ab"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "06b2b2adf1ccdaf81f1a165ad7006f3b"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "1e3e45e74e1d578ed001a4ba502fb3d0"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "84df4402f0742fb12c26e24adece94d5"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "4a19f751cfa1ef95a1c8d91d13688dc2"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "7d1366aa85c21450ad6f222557c44d39"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "146c8ab1902541dc1295420b820d77fd"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "5d1442a35fd18c380320f5e7cded032c"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "00b2f2940a04d2389a85e0909caf3dee"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "3dfa6556c3c87dbb30f7ad89e3c16707"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "f52dd29683607716b90d92a50beb4059"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "cfbef03fa759867b2d1be64712d086fd"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "8805ac60077a1a2bafaac35ce8af89ac"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "2a99454a339174673cab67bdf48f53a6"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "dffa6c9ee7265226d4b29b44721f4f15"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "cd41a82a07a7db3dcc3b1fbd0fe3305a"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "4f372fe79f4cbd70d975b5c548b91842"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "05d5a993915f0a304420f45257a6f624"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "18af2a4ca41c17e51c00e4362a357dbe"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "6bff6684e0bf43a6567d89fc3eeab570"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "2a99454a339174673cab67bdf48f53a6"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "efb34e97234c95174f2952944f62c8e3"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "3a5aa82f61680af25d644231a3658f70"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "9294447bac69d189754e20987e2015fe"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "f7f8ba6fb62989b0dcf2a3cd191da730"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "8f3017fbe7ebb943c9fbc3fdaf5946c0"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "d1c6c794a7b673c0d6367714547be11a"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "6bff6684e0bf43a6567d89fc3eeab570"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "db4b4eb9e9a1212bb90b467b258c45ec"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "aa2979ea1420b77f57466efcfb68af31"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "1d3f4c103aef385b06e4ab78aeb9eff5"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "008fe5242cbe406c922719c727bc858e"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "77c94a5179a9ac7ef415dfecce11bb82"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "bc7adebe9f25820cbe562dbecdb33098"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "32de6e6404a7eab7b70006d106a772b9"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "a2047d59a59d2bf69f866f93576e3d41"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "02927c4118b08f57776f321ad215dca3"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "141e5e7702b2fd059978c2c9efe623e8"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "202e1966301cc49df4e43b5b7c55d313"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "5b24a7ccfdd8aef3223daf7dc2e973dd"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "117035cc20298e45fe0d073c519fe6e9"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "1c579e835de694ddd559ab0cfcf08401"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "efe1a108dec51428cec25f7c5a6f261c"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "f8dead5fd53bcdddb7d43dcf3e93ed58"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "0ebb3cbd88382a52d53da0803f7951da"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "a5c321668a187325ce9127ad344a5966"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "2a99454a339174673cab67bdf48f53a6"
  },
  {
    "url": "docs/index.html",
    "revision": "2a99454a339174673cab67bdf48f53a6"
  },
  {
    "url": "examples/index.html",
    "revision": "55e08209972028cad8c86dd4cf03a0ae"
  },
  {
    "url": "index.html",
    "revision": "0b4b518e3c95f2e69c4a562e8b1b8f27"
  },
  {
    "url": "redirects.json",
    "revision": "ff6e3f0da9bd52ce20975be0b056d464"
  }
])
