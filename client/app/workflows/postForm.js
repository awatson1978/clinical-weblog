Template.postForm.helpers({

});




Template.postForm.events({
  'keyup #titleInput':function(){
    Posts.update({_id: this._id}, {
      $set: {
        'title': $('#titleInput').val()
      }
    });
  },
  'keyup #textInput':function(){
    Posts.update({_id: this._id}, {
      $set: {
        'text': $('#textInput').html()
      }
    });
  },
  'keyup #tagsInput':function(event){
    console.log('tagInput', $('#tagsInput').val());

    if(event.keyCode === 13){
      Posts.update({_id: this._id}, {
        $addToSet: {
          'tags': $('#tagsInput').val()
        }
      });
      $('#tagsInput').val('');
    }
  },
  'click .label':function(){
    Posts.update({_id: this.post_id}, {
      $pull: {
        'tags': this.tag
      }
    });
  }
});
