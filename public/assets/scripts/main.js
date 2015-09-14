// Stores all the portfolio piece data
var portfolioPieces = [
{
  'name': 'Boqs',
  'deck': 'NFC Lockbox',
  'description': 'Boqs is a modern lockbox that uses NFC technology. By simply tapping your NFC-enabled phone or tag you can unlock the Boqs. My co-founder Will Du and I created an inital prototype in late 2014 using Arduino and humidor box. We have since gone to win a $10,000 Venture Seed Fund to help grow this idea. We aim to create a fantastic looking lockbox that is easy to use and has useful and unique features.',
  'image': 'boqsBanner.jpg',
  'role': 'Co-Founder/Developer',
  'screen1': 'appseed1.png',
  'screen2': 'appseed2.png',
  'screen3': 'appseed3.png',
  'site_link': 'http://www.boqs.com',
  'github_link': '',
  'url': 'boqs'
},
{
  'name': 'Safe Whistle',
  'deck': 'Safety App',
  'description': 'Safe Whistle is a native iOS app created to help keep runners safe when running alone and late at night. When the app is activated and the headphones are unplugged, the app will automatically send out a text message with their location to friends that the user has set.',
  'image': 'safewhistleBanner.jpg',
  'role': 'Developer',
  'screen1': 'appseed1.png',
  'screen2': 'appseed2.png',
  'screen3': 'appseed3.png',
  'site_link': '',
  'github_link': '',
  'url': 'safewhistle'
},
{
  'name': 'AppSeed',
  'deck': 'Prototyping App',
  'description': 'AppSeed is an app that will turn your sketches into working prototypes. By taking photos of your sketches, AppSeed will recognize drawn shapes and allow you to move and manipulate them, turning them into buttons, text field, maps, and more.',
  'image': 'appseedBanner.jpg',
  'role': 'Android Developer',
  'screen1': 'appseed1.png',
  'screen2': 'appseed2.png',
  'screen3': 'appseed3.png',
  'site_link': '',
  'github_link': '',
  'url': 'appseed'
}, {
  'name': 'Marker',
  'deck': 'Board Game App for iPhone',
  'description': 'Marker is a meetup application for the iPhone designed to help people who love to play board games meet new people to play with. It allows users to browse and create meetups that specify the date, time, and place where the meetup will be held, as well as what games they plan on playing. It uses the boardgamegeek.com API to allow users to check out details of games, and well as Parse to store all the user and meetup data on the backend.',
  'image': 'markerBanner.jpg',
  'role': 'Project Lead/Head Developer',
  'screen1': 'markerScreen1.png',
  'screen2': 'markerScreen2.png',
  'screen3': 'markerScreen3.png',
  'site_link': '',
  'github_link': '',
  'url': 'marker'
}, {
  'name': 'Pythios the Undefeated',
  'deck': 'Mobile Game Jam Submission',
  'description': 'Pythios the Undefeated is a iPhone game created for the 2014 Great Canadian Appathon. It is a turn based strategy game where you play as a dragon fighting off enemy attackers. Between waves you can upgrade your abilities to help you stay alive as long as you can.',
  'image': 'pythiosBanner.jpg',
  'role': 'Project Lead/Head Developer',
  'screen1': 'pythiosScreen1.png',
  'screen2': 'pythiosScreen2.png',
  'screen3': 'pythiosScreen3.png',
  'site_link': '',
  'github_link': '',
  'url': 'pythios'
}, {
  'name': 'The Rising Threat of Water Poverty',
  'deck': 'Infographic Website',
  'description': 'The Rising Threat of Water Poverty is a infographic style website designed to raise awareness of the severity of water poverty. It uses scrolling to trigger animations and graphics that display statistics about how this problem affects the world.',
  'image': 'infographicBanner.jpg',
  'role': 'Developer/Designer',
  'screen1': 'waterScreen1.png',
  'screen2': 'waterScreen2.png',
  'screen3': 'waterScreen3.png',
  'site_link': 'http://www.tristandarwent.com/links/infographic/',
  'github_link': 'https://github.com/tristandarwent/Water-Poverty-Infographic.git',
  'url': 'infographic'
}, {
  'name': 'Arcturus V',
  'deck': 'Web Board Game Prototype',
  'description': 'Arcturus V is a prototype board game made with Cocos2d-html5. It is a 2 player competitive game where you fight for land on a newly occupied planet, rich with resources. You draw cards which determine the actions you can take on the board.',
  'image': 'arcturusBanner.jpg',
  'role': 'Project Lead/Head Developer',
  'screen1': 'arcturusScreen1.png',
  'screen2': 'arcturusScreen2.png',
  'screen3': 'arcturusScreen3.png',
  'site_link': 'http://www.tristandarwent.com/links/arcturus_v/',
  'github_link': 'https://github.com/tristandarwent/Arcturus-V.git',
  'url': 'arcturusv'
}];

// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '': 'home',
      'portfolio': 'portfolio',
      'portfolio-detail' : 'portfolio',
      'portfolio-detail/' : 'portfolio',
      'portfolio-detail/:id': 'portfolioDetail',
      'about': 'about'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    },

    // Portfolio Detail Route
    portfolioDetail: function(url) {
      console.log('Navigating to Portfolio Detail Page');
      App.views['portfolioDetail'].render(url);
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      portfolio: new PortfolioView(),
      portfolioDetail: new PortfolioDetailView(),
      about: new AboutView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Portfolio View
  // -----------------------------

  var PortfolioView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolio',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Sends portfolio piece data to Portfolio View
      this.model.set({
        piece: portfolioPieces
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Portfolio Detail View
  // -----------------------------

  var PortfolioDetailView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolioDetail',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

    },

    // Our Render Function
    render: function(url) {

      // Stores position of piece needed to send
      var detail;

      // Loops through Portfolio Pieces looking for piece that matches the url
      for (portfolioPiece in portfolioPieces) {
        if (portfolioPieces[portfolioPiece].url === url) {
          detail = portfolioPiece;
        }
      }

      // Sends portfolio piece data to Portfolio Detail View
      this.model.set({
        piece: portfolioPieces[detail]
      });

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

      // Changes the main image on the portfolio details page when thumbnails are clicked
      $('.thumbnail').click(function(){
        var bg = $(this).css('background-image');
        $('.imageHolder').css('background-image', bg);
      });

    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  // Allows external links to work
  $(document).delegate('a', 'click', function(e) {
    if( $(this).hasClass('link') ) {
      e.preventDefault();
      App.router.navigate($(this).attr('href'), { trigger: true });
    }

  });

});
