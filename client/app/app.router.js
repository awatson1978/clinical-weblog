
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});


Router.map(function(){
  this.route('homeRoute', {
    path: '/',
    template: "postsListPage",
    waitOn: function(){
      return Meteor.subscribe('posts');
    }
  });
});
