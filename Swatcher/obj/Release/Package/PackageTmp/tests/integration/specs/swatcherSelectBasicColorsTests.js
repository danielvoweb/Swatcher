'use strict';

describe('Example: Colors from a select list using basic web colors', function () {

    var $target;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-from-select-basic-colors [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select')
            .swatcher();

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should set the background color of each swatch from the option value', function () {

        expect($target.next().find('li:first').css('background-color')).toBe('rgb(255, 0, 0)');

    });

    sharedSwatcherTests();

});