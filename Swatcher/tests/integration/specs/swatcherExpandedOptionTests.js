﻿'use strict';

describe('Example: Using the expand selected Swatcher option', function() {

    var $target, $observed;

    beforeEach(function(done) {

        loadWorkspace(
            '#example-using-expand-selected-option [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select').swatcher({ expandable: true });

        $observed = $('#test-workspace').find('ul.swatcher');

        done();

    });

    afterEach(function(done) {

        done();

        clearWorkspace();

    });

    it('Should add an ".is-expanded" class when a swatch is clicked', function() {

        $observed.find('li:first').click();

        expect($observed.find('li:first').prop('class')).toContain('is-expanded');

    });

    it('Should remove the ".is-expanded" class from the current target once another swatch is clicked', function () {

        $observed.find('li:first').click();

        $observed.find('li:nth-child(2)').click();

        expect($observed.find('li:first').hasClass('is-expanded')).toBeFalsy();

    });

    sharedSwatcherTests();

});