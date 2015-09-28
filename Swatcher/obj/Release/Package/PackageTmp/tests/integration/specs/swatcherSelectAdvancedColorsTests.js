'use strict';

describe('Example: Colors from a select list using advanced colors', function () {

    var $target;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-from-select-advanced-colors [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select').swatcher();

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should set the background color of each swatch from the "swatcher-color" data attribute', function () {

        expect($target.next().find('li:first').css('background-color')).toBe('rgb(207, 242, 126)');

    });

    sharedSwatcherTests();

});