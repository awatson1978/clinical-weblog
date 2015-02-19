//-------------------------------------------------------------
// 0. Sessions Variables


Router.route("/newpost", {
  template: 'postFormPage',
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});

Router.route("/editpost/:id", {
  template: 'postFormPage',
  waitOn: function(){
    return Meteor.subscribe('posts');
  },
  data: function(){
    return Posts.findOne(this.params.id);
  }
});


//-------------------------------------------------------------
// B.  Helpers




Template.postFormPage.events({
  'click #savePostButton':function(){
    Posts.update({_id: this._id},{$set:{
      title: $('#titleInput').val(),
      text: $('#textInput').val()
    }});

    Router.go('/post/' + this._id);
  }
});


//-------------------------------------------------------------
// D. Display Readonly Value


//-------------------------------------------------------------
// E. Buttons

Template.postFormPage.isNewPost = function() {
  if(this._id) {
    return false;
  }else{
    return true;
  }
};

Template.postFormPage.events({
  'click #createNewPostButton': function() {
    console.log('creating new user...');

    try {
      // TODO:  add validation functions
      if ($('#titleInput').val().length) {

        Meteor.call('createNewPost', {
          title: $('#titleInput').val(),
          text: $('#textInput').val()
        }, function(error, post) {
          console.log('error: ' + error);
          console.log('post: ' + post);
          Router.go('/post/' + post);
        });
      } else {
        Session.set("errorMessage",
          "Post needs a title and text, or why bother?");
      }
    } catch (err) {
      console.log(err);
    }

    Session.set('current_task', 'view');
  },
  'click #deletePostButton': function() {
    Posts.remove(Session.get('selected_post'));
    Session.set('current_task', 'view');
  },
  'click #cancelDeleteButton': function() {
    Session.set('current_task', 'view');
  }
});
