'use strict';

describe('Example: Colors from a select list using basic web colors', function () {

    var $sut;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-from-select-basic-colors',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $sut = $('#test-workspace').find('select');

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should hide selected select element', function () {

        $sut.swatcher();

        expect($sut.is(':visible')).toBeFalsy();

    });

    it('Should create a unordered swatcher list', function () {

        $sut.swatcher();

        expect($sut.next().prop('tagName')).toBe('UL');

    });

    it('Should add the .swatcher class to the unordered list', function () {

        $sut.swatcher();

        expect($sut.next().hasClass('swatcher')).toBeTruthy();

    });

    it('Should add an item for every option to the swatcher list', function () {

        var expected = $sut.find('option').length;

        $sut.swatcher();

        expect($sut.next().find('li').length).toBe(expected);

    });

    it('Should set the background color of each swatch from the option value', function () {

        $sut.swatcher();

        expect($sut.next().find('li:first').css('background-color')).toBe('rgb(255, 0, 0)');

    });

});