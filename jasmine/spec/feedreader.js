/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('should be defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a defined URL', () => {
            allFeeds.forEach( key => {
                expect(key.url).toBeDefined();
                expect(key.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a defined name', () => {
            allFeeds.forEach( key => {
                expect(key.name).toBeDefined();
                expect(key.name.length).not.toBe(0);
            });
        });
    });


    /* New test suite */
    describe('The menu', () => {
        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', () => {
            let hiddenMenu = document.body.classList.contains('menu-hidden');
            expect(hiddenMenu).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('class should toggle when the menu icon is clicked', () => {
            let menuIcon =  document.querySelector('.menu-icon-link');
            //simulate menu icon being clicked, 'menu-hidden' class disappears
            menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toEqual(false);
            //simulate menu icon being clicked again, 'menu-hidden' class reappears
            menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toEqual(true);
        });
    });

    /* New test suite */
    describe('Initial Entries', () => {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach( done => {
            //invokes/calls loadFeed function
            loadFeed(0, () => {
                done();
            });
        });

        //Additional test: use spyOn loadFeed, for practice.
        it('loadFeed should be called on', done => {
            spyOn(window, 'loadFeed');
            loadFeed();
            expect(window.loadFeed).toHaveBeenCalled();
            done();
        });

        it('should have an entry in the feed container', () => {
            const container = document.querySelectorAll('.feed .entry');
            expect(container.length).toBeGreaterThan(0);
        });
    });

    /* New test suite */
    describe('New Feed Selection', () => {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        let initFeed,
            newFeed;

        beforeEach( done => {
            //call first loadfeed, save input to initFeed
            loadFeed(0, () => {
                initFeed = document.querySelector('.feed').innerHTML;
                done();
            });

            //call second loadfeed, save input to newFeed. done() signals to run test
            loadFeed(1, () => {
                newFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        });

        it('should change page content', () => {
            expect(newFeed !== initFeed).toBe(true);
        });
    });
});