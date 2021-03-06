'use strict';

const body = document.querySelector('body');
const menu = document.querySelector('.menu-icon-link');
const feed = document.querySelector('.feed');
const firstFeed = [];

$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {/////////////////////////////////////////////////////RSS Feeds
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('1) are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('2) has url', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('3) has name', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function () {//////////////////////////////////////////////////////////The Menu
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('1) menu is hidden', function () {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('2) toggles', function () {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();//After test return web app to 'un clicked' state
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {//////////////////////////////////////////////////////////Initial Entries
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('1) completes there work', function () {
            let feedEntry = $('.feed .entry-link .entry').length;
            expect(feedEntry).toBeGreaterThan(0);
            console.log(feedEntry);

        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Loaded', function () {//////////////////////////////////////////////////////////New Fee Loaded
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        describe('New Feed Selection', function () {
            let feedOne;
            let feedTwo;

            beforeEach(function (done) {

                loadFeed(0, function () {

                    feedOne = feed.querySelectorAll('innerHTML');
                    loadFeed(1, function () {
                        feed.querySelectorAll('innerHTML');
                        done();
                    });
                });
            });

            it('content changes', function () {
                expect(feedOne).not.toEqual(feedTwo);
            });
        });
    });
}());


