// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ["accounts", "janedoe", "groups", "crud", "signIn"],
  "Posts Pages" : function (client) {

    var newPostName = "NY Nannys - AM";
    var newPostChangedName = "NJ Nannys - AM";
    var newPostDescription = "Sitters available between 6am and 12am.";

    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)


      //============================================================================================
      .sectionBreak("A. Sign In Page")

      .waitForPage("#entrySignIn")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/accountsEntry/A-signInPage.png")
      .reviewSignInPage()
      .signIn("janedoe@gmail.com", "janedoe123")


      //============================================================================================
      .sectionBreak("B. Home Page")
      .waitForPage("#homePage")
      .reviewMainLayout()
      .selectFromSidebar('#groupsButton')


      //============================================================================================
      .sectionBreak("C. Posts List")
      .waitForPage("#groupsListPage")
      .reviewPostsListPage()
      .verify.elementNotPresent("#groupsList .groupListItem:nth-child(1)")
      .click("#upsertPostButton").pause(500)


      //============================================================================================
      .sectionBreak("D. Create New Post")
      .waitForPage("#upsertPostPage")
      .reviewUpsertPostPage("","")
      .createNewPost(newPostName, newPostDescription)


      //============================================================================================
      .sectionBreak("E. Posts List")
      .waitForPage("#groupsListPage")
      .reviewPostsListPage()
      .verify.elementPresent("#groupsList .groupListItem:nth-child(1)")
      .verify.containsText("#groupsList .groupListItem:nth-child(1)", newPostName)
      .click("#groupsList .groupListItem:nth-child(1)").pause(500)

      //============================================================================================
      .sectionBreak("F. Edit New Post")
      .waitForPage("#upsertPostPage")
      .reviewUpsertPostPage(newPostName, newPostDescription)

      .clearValue("#groupTitleInput")
      .setValue("#groupTitleInput", newPostChangedName)
      .verify.attributeEquals("#groupTitleInput", "value", newPostChangedName)

      .click("#savePostButton").pause(500)

      //============================================================================================
      .sectionBreak("G. Delete Post")
      .waitForPage("#groupsListPage")
      .verify.elementPresent("#groupsList .groupListItem:nth-child(1)")
      .verify.containsText("#groupsList .groupListItem:nth-child(1)", newPostChangedName)
      .click("#groupsList .groupListItem:nth-child(1)").pause(500)
      .waitForPage("#upsertPostPage")
      .verify.elementPresent("#deletePostButton")
      .click("#deletePostButton").pause(500)

      .signOut()
      .end();
  }
};
