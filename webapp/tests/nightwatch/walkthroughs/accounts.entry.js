// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ["accounts", "janedoe", "signUp", "signIn"],
  "Accounts Entry": function (client) {
    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)

      //============================================================================================
      .sectionBreak("A. Sign In Page")

      .waitForPage("#entrySignIn")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/accountsEntry/A-signInPage.png")
      .reviewSignInPage()
      .signIn("alice@vitarch.com", "alice123")

      .verify.elementPresent("#errorMessages")
      .verify.elementPresent("#errorMessages .list-item:nth-child(1)")
      .verify.containsText("#errorMessages .list-item:nth-child(1)", "User not found")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/accountsEntry/A1-signInPage.png")

      .click("#needAnAccountButton").pause(200)


      //============================================================================================
      .sectionBreak("B. Sign Up Page")

      .waitForPage("#entrySignUp")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/accountsEntry/B-signUpPage.png")
      .reviewSignUpPage()
      .signUp("alice@gmail.com", "alice123")


      //============================================================================================
      .sectionBreak("C. Home Page")

      .waitForPage("#homePage")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/accountsEntry/C-homePage.png")

      .verify.elementPresent("#currentUserEmail")
      .verify.containsText("#currentUserEmail", "alice@gmail.com")

      .signOut()
      .end();
  }
};
