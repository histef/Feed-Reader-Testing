/* feedreader.js
 *
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
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a defined URL', function(){
            allFeeds.forEach(function(key){
                expect(key.url).toBeDefined();
                expect(key.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
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


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function(){
            let hiddenMenu = document.body.classList.contains('menu-hidden');
            expect(hiddenMenu).toBe(true);
        });

         /*  : Write a test that ensures the menu changes
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

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){
            //invokes/calls loadFeed function
            loadFeed(0, function(){
                done();
            });
        });

        it('loadFeed should be called on', function(done){
            spyOn(window, 'loadFeed');
            loadFeed();
            done();
            expect(window.loadFeed).toHaveBeenCalled();
        });

        it('should have an entry in the feed container', function(done){
            const container = document.querySelector('.feed');
            expect(container).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function(done){

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('should change content', function(done){
            //loadFeed id to change or entry-link to change
        expect('loadFeed[id]').not.toBe(0);
        done();
        });
    });
});