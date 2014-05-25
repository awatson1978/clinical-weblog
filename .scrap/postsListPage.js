Session.setDefault('receivedData', false);
Session.setDefault('postSearchFilter', '');
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);

Meteor.autorun(function(){
  Meteor.subscribe('posts');
});

Template.postsListPage.customersList = function(){
  Session.set('receivedData', new Date());
  Session.set('paginationCount', Math.floor(Posts.find().count() / Session.get('tableLimit')));
  return Posts.find({
    title: { $regex: Session.get('postSearchFilter'), $options: 'i' }
  },{limit: Session.get('tableLimit'), skip: Session.get('skipCount')});
}


Template.postsListPage.rendered = function(){
  $(this.find('#example')).tablesorter();

  Deps.autorun(function(){
    console.log(Session.get('receivedData'))
    setTimeout(function(){
      $("#example").trigger("update");
    }, 200);
  });
};


Template.postsListPage.events({
  'keyup #searchInput':function(){
    Session.set('postSearchFilter', $('#searchInput').val());
  },
  'click #twentyButton':function(){
    Session.set('tableLimit', 20);
  },
  'click #fiftyButton': function(){
    Session.set('tableLimit', 50);
  },
  'click #hundredButton': function(){
    Session.set('tableLimit', 100);
  },
  'click .pagination-btn':function(){
    //alert(JSON.stringify(this.index));
    Session.set('selectedPagination', this.index);
    Session.set('skipCount', this.index * Session.get('tableLimit'));
  }
});


Template.postsListPage.getPaginationCount = function(){
  return Session.get('paginationCount');
}

Template.postsListPage.paginationButtonList = function(){
  var paginationArray = [];
  for (var i = 0; i < Session.get('paginationCount'); i++) {
    paginationArray[i] = {
      index: i
    };
  };
  return paginationArray;
};

Template.postsListPage.isTwentyActive = function(){
  if(Session.get('tableLimit') === 20){
    return "active";
  }
};
Template.postsListPage.isFiftyActive = function(){
  if(Session.get('tableLimit') === 50){
    return "active";
  }
};
Template.postsListPage.isHundredActive = function(){
  if(Session.get('tableLimit') === 100){
    return "active";
  }



Template.paginationButton.helpers({
    pageActive: function(){
      if(this.index === Session.get('selectedPagination')){
        return "active";
      }
    },
    getPage: function(){
      return this.index + 1;
    }
});



};
