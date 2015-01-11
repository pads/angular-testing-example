describe('Authentication', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should go to the login page when the login link is clicked.', function () {
    element(by.id('login-link')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/login');
    expect(element(by.css('.login')).getText()).toEqual('Login');
  });

  it('should go to the secret page after successfully logging in.', function () {
    browser.get('#/login');

    element(by.model('username')).sendKeys('pads');
    element(by.model('password')).sendKeys('letmein');
    element(by.id('login-button')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/secret');
    expect(element(by.css('.secret')).getText()).toEqual('I am a secret!');
  });

  it('should redirect unauthenticated secret requests to the login page.', function () {
    browser.get('#/secret');

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/login');
    expect(element(by.css('.login')).getText()).toEqual('Login');
  });

  it('should go to back to the attempted page after successfully logging in.', function () {
    browser.get('#/secret');

    element(by.model('username')).sendKeys('pads');
    element(by.model('password')).sendKeys('letmein');
    element(by.id('login-button')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/secret');
    expect(element(by.css('.secret')).getText()).toEqual('I am a secret!');
  });

});