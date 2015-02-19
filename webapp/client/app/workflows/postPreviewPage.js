
Router.route('/post/:id', {
  template: 'postPreviewPage',
  waitOn: function(){
    return Meteor.subscribe('posts');
  },
  data: function () {
    return Posts.findOne({_id: this.params.id});
  }
});





Template.postPreviewPage.events({
  'click #postEditButton':function(){
    Router.go('/editpost/' + this._id);
  },
  'click #postDeleteButton':function(){
    if(confirm('Are you sure you want to delete ' + this.title + "?")){
      Posts.remove({_id: this._id});
      Router.go('/');
    }
  }
});
Template.postPreviewPage.helpers({

});
