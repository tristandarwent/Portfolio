var portfolioPieces = [
{
  'name': 'AppSeed',
  'deck': 'Prototyping App',
  'image': 'appseedBanner.jpg',
  'role': 'Android Developer',
  'url': 'appseed'
}, {
  'name': 'Marker',
  'deck': 'Board Game App for iPhone',
  'image': 'markerBanner.jpg',
  'role': 'Project Lead/Head Developer',
  'url': 'marker'
}, {
  'name': 'Pythios the Undefeated',
  'deck': 'Mobile Game Jam Submission',
  'image': 'pythiosBanner.jpg',
  'role': 'Project Lead/Head Developer',
  'url': 'pythios'
}, {
  'name': 'The Rising Threat of Water Poverty',
  'deck': 'Infographic Website',
  'image': 'infographicBanner.jpg',
  'role': 'Developer/Designer',
  'url': 'infographic'
}, {
  'name': 'Pizza Boy',
  'deck': 'Responsive Pizza Website',
  'image': 'pizzaBoyBanner.jpg',
  'role': 'Developer/Designer',
  'url': 'pizzaboy'
}, {
  'name': 'Arcturus V',
  'deck': 'Web Board Game Prototype',
  'image': 'arcturusBanner.jpg',
  'role': 'Project Lead/Head Developer',
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

      var detail;

      for (portfolioPiece in portfolioPieces) {
        if (portfolioPieces[portfolioPiece].url === url) {
          detail = portfolioPiece;
        }
      }

      this.model.set({
        piece: portfolioPieces[detail]
      });

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
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

  $(document).delegate('a', 'click', function(e) {
    if( $(this).hasClass('link') ) {
      e.preventDefault();
      App.router.navigate($(this).attr('href'), { trigger: true });
    }

  });


});