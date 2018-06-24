/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a defined URL', function(){
            allFeeds.forEach(function(key){
                expect(key.url).toBeDefined();
                expect(key.url.length).not.toBe(0);
            });
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a defined name', function(){
            allFeeds.forEach(function(key){
                expect(key.name).toBeDefined();
                expect(key.name.length).not.toBe(0);
            });
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* Write a test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function(){
            let hiddenMenu = document.body.classList.contains('menu-hidden');
            expect(hiddenMenu).toBe(true);
        });

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('class should toggle when the menu icon is clicked', function(){
            let menuIcon =  document.querySelector('.menu-icon-link');
            //simulate menu icon being clicked, 'menu-hidden' class disappears
            menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toEqual(false);
            //simulate menu icon being clicked again, 'menu-hidden' class reappears
            menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toEqual(true);
        });
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done){
            //invokes/calls loadFeed function
            loadFeed(0, function(){
                done();
            });
        });

        //Additional test: use spyOn loadFeed, for practice.
        it('loadFeed should be called on', function(done){
            spyOn(window, 'loadFeed');
            loadFeed();
            expect(window.loadFeed).toHaveBeenCalled();
            done();
        });

        it('should have an entry in the feed container', function(){
            const container = document.querySelectorAll('.feed .entry');
            expect(container.length).toBeGreaterThan(0);
        });
    });

    /* Write a new test suite named "New Feed Selection" */
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function(){

        let initFeed,
            newFeed;

        beforeEach(function(done){
            //call first loadfeed, save input
            loadFeed(0, ()=>{
                initFeed = document.querySelector('.feed').innerHTML;
                //call second loadfeed, THEN execute done() to signal to run test
                loadFeed(1, ()=>{
                    newFeed = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('should change page content', function(){
            expect(newFeed !== initFeed).toBe(true);
        });
    });
});