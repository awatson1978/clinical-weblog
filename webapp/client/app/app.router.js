
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'mainLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});


Router.route('/', {
  template: "postsListPage",
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});
