'use strict';

describe('Example: Using the toggle selected Swatcher option', function () {

    var $target, $observed;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-using-expand-selected-option [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select').swatcher({ expandable: true });

        $observed = $('#test-workspace').find('ul.swatcher');

        done();

    });


});