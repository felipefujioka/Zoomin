angular.module('module-templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/activities/login/login.html',
    "<div class=\"login-card mdl-card mdl-shadow--2dp\" ng-controller=\"zoominLogin\">\n" +
    "  <div class=\"mdl-card__title mdl-card--expand\">\n" +
    "    <h2 class=\"mdl-card__title-text\">Login</h2>\n" +
    "  </div>\n" +
    "  <div class=\"mdl-card__supporting-text\">\n" +
    "    Enter using your facebook account.\n" +
    "  </div>\n" +
    "  <div class=\"mdl-card__actions mdl-card--border\">\n" +
    "    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" ng-click=\"login()\">\n" +
    "      Enter\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/activities/menu/menu.html',
    "menu\n"
  );


  $templateCache.put('/app/activities/stats/stats.html',
    "<div ng-controller=\"zoominStats\" class=\"zoomin-expand\">\n" +
    "  <div id=\"p2\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" ng-if=\"loading\"></div>\n" +
    "  <div class=\"mdl-grid zoomin-expand\">\n" +
    "    <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/activities/your_photos/your-photos.html',
    "<div ng-controller=\"zoominYourPhotos\">\n" +
    "  <div id=\"p2\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" ng-if=\"loading\"></div>\n" +
    "  <div class=\"photo-container\">\n" +
    "    <div class=\"photo-item\" ng-repeat=\"photo in photos\">\n" +
    "      <style>\n" +
    "        </style>\n" +
    "\n" +
    "        <div class=\"demo-card-image mdl-card mdl-shadow--2dp\"\n" +
    "        style=\"height:{{getWHForPhoto(photo.images[0]).height}}px;\n" +
    "        width:{{getWHForPhoto(photo.images[0]).width}}px\">\n" +
    "        <img class=\"photo\" src=\"{{photo.images[0].source}}\"></img>\n" +
    "          <div class=\"mdl-card__title mdl-card--expand\"></div>\n" +
    "          <div class=\"mdl-card__actions\">\n" +
    "            <span class=\"demo-card-image__filename\">{{photo.name}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/components/zoomin-layout/zoomin-layout.html',
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
    "      <a class=\"mdl-navigation__link\" href=\"/#/your_photos\">Your photos</a>\n" +
    "      <a class=\"mdl-navigation__link\" href=\"/#/friends_photos\">Friends photos</a>\n" +
    "      <a class=\"mdl-navigation__link\" href=\"/#/stats\">Your stats</a>\n" +
    "\n" +
    "      <div class=\"mdl-layout-spacer\"></div>\n" +
    "      <a class=\"mdl-navigation__link\" href=\"\">Logout</a>\n" +
    "    </nav>\n" +
    "  </div>\n" +
    "  <main class=\"mdl-layout__content\" >\n" +
    "    <div class=\"page-content zoomin-expand\" ui-view>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "  </main>\n" +
    "</div>\n"
  );

}]);
