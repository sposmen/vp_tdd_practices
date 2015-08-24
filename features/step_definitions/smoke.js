module.exports = function () {
  this.World = require('../support/smoke.js').World;

  this.Given(/^ingreso al juego$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser.get('http://localhost:3000', callback);
  });

  this.Then(/^veo el mensaje "([^"]*)"$/, function (message, callback) {
    var browser = this.browser;
    // Write code here that turns the phrase above into concrete actions
    this.browser.elementByCss('#welcome', function(elm){
      browser.getValue(elm, function(text){
        console.log(text)
      });
        //.should.become(message, callback);

      //elm.text(function(text){
      //  console.log(text);
      //  callback();
      //});
      //elm.text().should.equal(message);

      //callback();
    });
  });

  this.Then(/^veo segundo mensaje "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^presiono Start$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^el juego muestra la pantalla de ingreso de jugadores con el mensaje "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });


  //this.Given("I am on Google", function(callback) {
  //  this.browser.get('http://google.com', callback);
  //});
  //
  //this.When('I search for "$query"', function(query, callback) {
  //  this.browser.elementByName('q', function (err, el) {
  //    el.type(query + '\n', callback);
  //  });
  //});
  //
  //this.Then('I see a link to "$url"', function(url, callback) {
  //  this.browser.waitForElementByCss('a[href*="' + url + '"]', 5000, function (err, el) {
  //    if (err) {
  //      callback.fail();
  //    } else {
  //      this.browser.quit();
  //      callback();
  //    }
  //  }.bind(this));
  //});

};