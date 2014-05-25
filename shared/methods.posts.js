Meteor.methods({
  createNewPost: function(data){
    data.createdAt = new Date();
    console.log('createNewPost', data);
    return Posts.insert(data);
  },
  updatePost: function(data){
    console.log('updatePost', data);
    return Posts.update({_id: data._id},{$set:{
      title: data.title,
      text: data.text,
      tags: data.tags,
      isActive: data.isActive
    }});
  }
});
