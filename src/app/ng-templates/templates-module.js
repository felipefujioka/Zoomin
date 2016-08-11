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


  $templateCache.put('/app/activities/privacy-policy/privacy-policy.html',
    "<div>\n" +
    "  <div id=\"p2\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\" ng-if=\"loading\"></div>\n" +
    "  <div class=\"\">\n" +
    "    <p>This Privacy Policy governs the manner in which Zoomin collects, uses, maintains and discloses information collected from users (each, a \"User\") of the https://zoomin-4c0b1.firebaseapp.com website (\"Site\").</p>\n" +
    "\n" +
    "    <h3>Personal identification information</h3>\n" +
    "    <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>\n" +
    "\n" +
    "    <h3>Non-personal identification information</h3>\n" +
    "    <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>\n" +
    "\n" +
    "    <h3>Web browser cookies</h3>\n" +
    "    <p>Our Site may use \"cookies\" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>\n" +
    "\n" +
    "    <h3>How we use collected information</h3>\n" +
    "    <p>Zoomin may collect and use Users personal information for the following purposes:</p>\n" +
    "    <ul>\n" +
    "      <li>\n" +
    "        <i>To run and operate our Site</i><br/>\n" +
    "        We may need your information display content on the Site correctly.\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <i>To improve customer service</i><br/>\n" +
    "        Information you provide helps us respond to your customer service requests and support needs more efficiently.\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <i>To personalize user experience</i><br/>\n" +
    "        We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <h3>How we protect your information</h3>\n" +
    "    <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>\n" +
    "\n" +
    "    <h3>Sharing your personal information</h3>\n" +
    "    <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. </p>\n" +
    "\n" +
    "    <h3>Changes to this privacy policy</h3>\n" +
    "    <p>Zoomin has the discretion to update this privacy policy at any time. When we do, we will send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>\n" +
    "\n" +
    "    <h3>Your acceptance of these terms</h3>\n" +
    "    <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes. This policy was generated using <a href=\"http://privacypolicies.com\" target=\"_blank\">privacypolicies.com</a></p>\n" +
    "\n" +
    "    <h3>Contacting us</h3>\n" +
    "    <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.</p>\n" +
    "\n" +
    "    <p>This document was last updated on July 16, 2016</p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/activities/privacy_policy/privacy-policy.html',
    "<p>This Privacy Policy governs the manner in which Zoomin collects, uses, maintains and discloses information collected from users (each, a \"User\") of the https://zoomin-4c0b1.firebaseapp.com website (\"Site\").</p>\n" +
    "\n" +
    "<h3>Personal identification information</h3>\n" +
    "<p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>\n" +
    "\n" +
    "<h3>Non-personal identification information</h3>\n" +
    "<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>\n" +
    "\n" +
    "<h3>Web browser cookies</h3>\n" +
    "<p>Our Site may use \"cookies\" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>\n" +
    "\n" +
    "<h3>How we use collected information</h3>\n" +
    "<p>Zoomin may collect and use Users personal information for the following purposes:</p>\n" +
    "<ul>\n" +
    "  <li>\n" +
    "    <i>To run and operate our Site</i><br/>\n" +
    "    We may need your information display content on the Site correctly.\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <i>To improve customer service</i><br/>\n" +
    "    Information you provide helps us respond to your customer service requests and support needs more efficiently.\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <i>To personalize user experience</i><br/>\n" +
    "    We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h3>How we protect your information</h3>\n" +
    "<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>\n" +
    "\n" +
    "<h3>Sharing your personal information</h3>\n" +
    "<p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. </p>\n" +
    "\n" +
    "<h3>Changes to this privacy policy</h3>\n" +
    "<p>Zoomin has the discretion to update this privacy policy at any time. When we do, we will send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>\n" +
    "\n" +
    "<h3>Your acceptance of these terms</h3>\n" +
    "<p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes. This policy was generated using <a href=\"http://privacypolicies.com\" target=\"_blank\">privacypolicies.com</a></p>\n" +
    "\n" +
    "<h3>Contacting us</h3>\n" +
    "<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.</p>\n" +
    "\n" +
    "<p>This document was last updated on July 16, 2016</p>\n"
  );


  $templateCache.put('/app/activities/share_ride/share-ride.html',
    "<div class=\"map-container\" ng-controller=\"zoominShareRide\">\n" +
    "  <h1>Find a ride</h1>\n" +
    "  <map-canvas id=\"map\" style=\"width: 50%; height: 50%;\"></map-canvas>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/activities/stats/stats.html',
    "<div ng-controller=\"zoominStats\" class=\"zoomin-expand\">\n" +
    "\n" +
    "  <div class=\"mdl-grid zoomin-expand\">\n" +
    "    <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--4-col\">\n" +
    "\n" +
    "      <div class=\"card-content\">\n" +
    "        <div class=\"mdl-grid\">\n" +
    "          <div id=\"picture mdl-cell mdl-cell--1-col\">\n" +
    "            <img src=\"{{user.pictureUrl}}\"></img>\n" +
    "          </div>\n" +
    "          <div id=\"personal-data-box mdl-cell mdl-cell--4-col\">\n" +
    "            <h6>Name</h6>\n" +
    "            <p>{{user.name}}</p>\n" +
    "            <h6>Birthdate</h6>\n" +
    "            <p>{{user.birthday}}</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
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
    "      <a class=\"mdl-navigation__link\" href=\"/#/share_ride\">Share a ride</a>\n" +
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
