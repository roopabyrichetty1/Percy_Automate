const { Builder, By, Key, until, Capabilities, WebElement } = require("selenium-webdriver");
const assert = require('assert');
const { post } = require("selenium-webdriver/http");
const { percy } = require('browserstack-node-sdk');

describe("Testcase - ", () => {

  test("Bentley.com Header & Green Banner", async () => {



    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase1', 'Bentley.com Header & Green banner'); // Add other capabilities as needed


    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://www.bentley.com");    

    // Maximize the browser window
    await driverTestcase.manage().window().maximize();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 5000));  

    // Perform hover action on the element
    const hoverElement = await driverTestcase.findElement(By.css('#post-10411'));
    await driverTestcase.actions({ bridge: true }).move({ origin: hoverElement }).perform();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 5000)); 

    let element = await driverTestcase.findElement(By.css('#post-10411 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-0c326ea.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default'));
    await driverTestcase.wait(until.elementIsVisible(element), 5000); // Wait for 5 seconds
    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 5000)); 


    const closebutton = await driverTestcase.findElement(By.css('.eicon-close'));
    closebutton.click();
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    await percy.screenshot(driverTestcase, "Header and Pencil Banner");

    let success = true;


    if (!element) {
      assert.fail('Passed');
    }

    await driverTestcase.quit();


  });

  test("Bentley.com/software Pricing", async () => {

    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase2', 'Bentley.com/software Pricing'); // Add other capabilities as needed


    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://www.bentley.com/software/staad/");

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    // Maximize the browser window
    await driverTestcase.manage().window().maximize();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000));    

    const elementtoclick = await driverTestcase.findElement(By.css('#post-6619 > div > div.entry-content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-18a23afa.elementor-section-full_width.elementor-section-height-min-height.software-banner.elementor-section-height-default.elementor-section-items-middle'));
    await elementtoclick.click();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    //const popup = await driverTestcase.findElement(By.css('.dialog-message'));
    const popup = await driverTestcase.findElement(By.css('.dialog-message.dialog-lightbox-message'));
    await popup.click();
    const closeButtonSelector = By.css('.dialog-close-button.dialog-lightbox-close-button [data-uw-cer-popup-close]');
    const closeButton = await driverTestcase.findElement(closeButtonSelector);
    await closeButton.click();
    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 5000)); 

    // Scroll down using actions class

    await driverTestcase.executeScript('window.scrollBy(0, 1000);'); // Adjust the value (e.g., 500) as needed
    await driverTestcase.switchTo().defaultContent();
    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 


    await percy.screenshot(driverTestcase, "Software Pricing");

    let success = true;


    if (!elementtoclick) {
      assert.fail('Passed');
    }

    await driverTestcase.quit();


  });

  test("Bentley.com/Contact us", async () => {



    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase2', 'Bentley.com/software Pricing'); // Add other capabilities as needed


    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://www.bentley.com/contact-us/");

    // Maximize the browser window
    await driverTestcase.manage().window().maximize();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    const socialicons = await driverTestcase.findElement(By.css('.elementor-social-icons-wrapper.elementor-grid'));
    if (socialicons) {
      await percy.screenshot(driverTestcase, "Contact Us");
    }

    let success = true;


    if (!socialicons) {
      assert.fail('Passed');
    }

    await driverTestcase.quit();


  });

  test("Bentley.com/Synchro Video", async () => {



    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase2', 'Bentley.com/software Pricing'); // Add other capabilities as needed


    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://www.bentley.com/software/synchro/");

    // Maximize the browser window
    await driverTestcase.manage().window().maximize();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    const hoverElement = await driverTestcase.findElement(By.css('#post-5819'));
    await driverTestcase.actions({ bridge: true }).move({ origin: hoverElement }).perform();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    const popup = await driverTestcase.findElement(By.css('.dialog-message.dialog-lightbox-message'));
    await popup.click();
    const closeButtonSelector = By.css('.dialog-close-button.dialog-lightbox-close-button [data-uw-cer-popup-close]');
    const closeButton = await driverTestcase.findElement(closeButtonSelector);
    await closeButton.click();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    await driverTestcase.executeScript('window.scrollBy(0, 1800);'); // Adjust the value (e.g., 500) as needed
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    //  const iframeElement = await driverTestcase.findElement(By.id('105463528')); // Replace '105463528' with the actual ID of your iframe
    //     await driverTestcase.switchTo().frame(iframeElement);

    // Find and interact with the video player controls to play the video (specific to YouTube iframe)
    const playButton = await driverTestcase.findElement(By.css('.play'));
    await playButton.click();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    await percy.screenshot(driverTestcase, "Synchro Video");


    await new Promise((resolve) => setTimeout(resolve, 20000)); 


    let success = true;


    if (!playButton) {
      assert.fail('Passed');
    }

    await driverTestcase.quit();


  });

  test("Bentley.com/Microstation brightcove video", async () => {



    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase2', 'Bentley.com/software Pricing'); // Add other capabilities as needed


    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://www.bentley.com/software/microstation/");

    // Maximize the browser window
    await driverTestcase.manage().window().maximize();

    //Timer 
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    const hoverElement = await driverTestcase.findElement(By.css('#post-14394'));
    await driverTestcase.actions({ bridge: true }).move({ origin: hoverElement }).perform();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    const popup = await driverTestcase.findElement(By.css('.dialog-message.dialog-lightbox-message'));
    await popup.click();
    const closeButtonSelector = By.css('.dialog-close-button.dialog-lightbox-close-button [data-uw-cer-popup-close]');
    const closeButton = await driverTestcase.findElement(closeButtonSelector);
    await closeButton.click();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 
    await driverTestcase.executeScript('window.scrollBy(0, 1300);'); // Adjust the value (e.g., 500) as needed
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    //  const iframeElement = await driverTestcase.findElement(By.id('105463528')); // Replace '105463528' with the actual ID of your iframe
    //     await driverTestcase.switchTo().frame(iframeElement);

    // Find and interact with the video player controls to play the video (specific to YouTube iframe)
    const playButton = await driverTestcase.findElement(By.css('.premium-video-box-play-icon'));
    await playButton.click();
    await new Promise((resolve) => setTimeout(resolve, 20000)); 

    await percy.screenshot(driverTestcase, "Brightcove Video");


    await new Promise((resolve) => setTimeout(resolve, 20000)); 


    let success = true;


    if (!playButton) {
      assert.fail('Passed');
    }

    await driverTestcase.quit();


  });

});
