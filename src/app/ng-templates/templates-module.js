angular.module('module-templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/activities/login/login.html',
    "<!-- Always shows a header, even in smaller screens. -->\n" +
    "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n" +
    "  <header class=\"mdl-layout__header\">\n" +
    "    <div class=\"mdl-layout__header-row\">\n" +
    "      <!-- Title -->\n" +
    "      <span class=\"mdl-layout-title\">Zoomin - find what you're lookin for</span>\n" +
    "      <!-- Add spacer, to align navigation to the right -->\n" +
    "      <div class=\"mdl-layout-spacer\"></div>\n" +
    "      <!-- Navigation. We hide it in small screens. -->\n" +
    "      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n" +
    "        <a class=\"mdl-navigation__link\" href=\"\">Log in</a>\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "  <div class=\"mdl-layout__drawer\">\n" +
    "    <span class=\"mdl-layout-title\">Menu</span>\n" +
    "    <nav class=\"mdl-navigation\">\n" +
    "      <a class=\"mdl-navigation__link\" href=\"\">Your photos</a>\n" +
    "      <a class=\"mdl-navigation__link\" href=\"\">Friends photos</a>\n" +
    "\n" +
    "      <div class=\"mdl-layout-spacer\"></div>\n" +
    "      <a class=\"mdl-navigation__link\" href=\"\">Logout</a>\n" +
    "    </nav>\n" +
    "  </div>\n" +
    "  <main class=\"mdl-layout__content\">\n" +
    "    <div class=\"page-content\"><!-- Your content goes here --></div>\n" +
    "  </main>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/activities/menu/menu.html',
    "menu\n"
  );


  $templateCache.put('/app/components/zoomin-layout/zoomin-layout.html',
    "<zoomin-login></zoomin-login>\n"
  );

}]);
