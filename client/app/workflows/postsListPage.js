Session.setDefault('receivedData', false);
Session.setDefault('accountSearchFilter', '');
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);

// Meteor.autorun(function(){
//   Meteor.subscribe('customerAccounts');
// });

//------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('postsListPage', {
    path: '/posts',
    template: 'postsListPage',
    waitOn: function(){
      return Meteor.subscribe('posts');
    }
  });
});

//------------------------------------------------
// HELPERS

Template.postsListPage.helpers({
  postsList: function(){
    var postsCount = Posts.find({title: { $regex: Session.get('accountSearchFilter'), $options: 'i' }}).count();
    Session.set('receivedData', new Date());
    Session.set('paginationCount', Math.floor((postsCount - 1) / Session.get('tableLimit')) + 1);
    return Posts.find(
      {title: { $regex: Session.get('accountSearchFilter'), $options: 'i' }
    },{limit: Session.get('tableLimit'), skip: Session.get('skipCount'), sort: {_id: -1}});
  },
  rendered: function(){
    // $(this.find('#example')).tablesorter();
    //
    // Deps.autorun(function(){
    //   console.log(Session.get('receivedData'))
    //   setTimeout(function(){
    //     $("#example").trigger("update");
    //   }, 200);
    // });
  }
});





Template.postsListPage.events({
  'keyup #searchInput':function(){
    Session.set('accountSearchFilter', $('#searchInput').val());
    Session.set('skipCount', 0);
    Session.set('selectedPagination', 0);
  },
  // Reset paging when we change tableLimit
  'click .tableLimit':function(event){
    // The value of the item clicked upon
    var thisLimit = $(event.currentTarget).text(); // Is there a better way of geeting this value?
    // We only need to reset when the limit has actiually changed
    if ( Session.get('tableLimit') != thisLimit ) { // Note. Don't use !== here as the types are different. string vs. number
      Session.set('skipCount', 0);
      Session.set('selectedPagination', 0);
    }
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
  },
  'click .customerRow':function(){
    Session.set('selectedUser', this._id);
    Router.go('/customer/' + this._id);
    //alert(this._id);
  }
});


Template.postsListPage.helpers({
  getPaginationCount: function(){
    return Session.get('paginationCount');
  },
  paginationButtonList: function(){
    var paginationArray = [];
    for (var i = 0; i < Session.get('paginationCount'); i++) {
      paginationArray[i] = {
        index: i
      };
    };
    if ( paginationArray.length > 1 ){
      return paginationArray;
    } else {
      return [];
    }
  },
  isTwentyActive: function(){
    if(Session.get('tableLimit') === 20){
      return "active";
    }
  },
  isFiftyActive: function(){
    if(Session.get('tableLimit') === 50){
      return "active";
    }
  },
  isHundredActive: function(){
    if(Session.get('tableLimit') === 100){
      return "active";
    }
  }
});



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
