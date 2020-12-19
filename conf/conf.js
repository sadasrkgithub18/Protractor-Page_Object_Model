exports.config = {
		
		//directConnect: true,
  
		// Capabilities to be passed to the webdriver instance.
	
		
		framework: 'jasmine2',
  
	//	seleniumAddress: 'http://localhost:4444/wd/hub',
  
		specs: ['../test_spec/BankManagerLoginTest_spec.js'],

		

	onPrepare: function () {


		//browser.ignoreSynchronization=true;

		// Override the timeout for webdriver.
		browser.driver.manage().window().maximize();
		//browser.driver.manage().timeouts().implicitlyWait(60000);

		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultsDir: 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});

	}
}