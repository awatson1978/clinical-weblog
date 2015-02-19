
Template.postCard.events({
  'click .card':function(){
    Session.set('selected_post', this._id);
    Router.go('/post/' + this._id);
    //alert(this._id);
  }
});


UI.registerHelper('tagList', function(){
  var self = this;
  console.log('post', this);

  var tagArray = [];
  if(this.tags){
    this.tags.forEach(function(tag){
      tagArray.push({post_id: self._id, tag: tag });
    });
  }

  console.log('tagArray', tagArray);
  return tagArray;
});
