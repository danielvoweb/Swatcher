'use strict';

describe('Example: Passed in colors to Swatcher options', function () {

    var $target,
        settings =
            {
                colors:
                    [
                        {
                            name: 'Salmon Pink',
                            color: '#F0B67F'
                        },
                        {
                            name: 'Crimson Tide',
                            color: '#FE5F55'
                        }
                    ]
            };

    beforeEach(function (done) {

        loadWorkspace(
            '#example-colors-from-data [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select');

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should set the background color of each swatch from the passed in "colors" setting', function () {

        $target.swatcher(settings);

        expect($target.next().find('li:first').css('background-color')).toBe('rgb(240, 182, 127)');

    });

    sharedSwatcherTests(settings);

});