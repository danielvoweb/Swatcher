'use strict';

describe('Example: Colors from a select list using advanced colors', function () {

    var $target;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-from-select-advanced-colors [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $target = $('#test-workspace').find('select');

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should hide selected select element', function () {

        $target.swatcher();

        expect($target.is(':visible')).toBeFalsy();

    });

    it('Should create a unordered swatcher list', function () {

        $target.swatcher();

        expect($target.next().prop('tagName')).toBe('UL');

    });

    it('Should add the ".swatcher" class to the unordered list', function () {

        $target.swatcher();

        expect($target.next().hasClass('swatcher')).toBeTruthy();

    });

    it('Should add an item for every option to the swatcher list', function () {

        var expected = $target.find('option').length;

        $target.swatcher();

        expect($target.next().find('li').length).toBe(expected);

    });

    it('Should set the background color of each swatch from the "swatcher-color" data attribute', function () {

        $target.swatcher();

        expect($target.next().find('li:first').css('background-color')).toBe('rgb(207, 242, 126)');

    });

    it('Should add an ".is-selected" class when a swatch is clicked', function () {

        $target.swatcher();

        $target.next().find('li:first').click();

        expect($target.next().find('li:first').hasClass('is-selected')).toBeTruthy();

    });

    it('Should remove the ".is-selected" class from the current target once another swatch is clicked', function () {

        $target.swatcher();

        $target.next().find('li:first').click();

        $target.next().find('li:nth-child(2)').click();

        expect($target.next().find('li:first').hasClass('is-selected')).toBeFalsy();

    });

    it('Should add a title for each swatch from the option value', function () {

        var expected = $target.find('option:first').val();

        $target.swatcher();

        expect($target.next().find('li:first').prop('title')).toBe(expected);

    });

    it('Should select the corresponding option when a swatch is selected', function () {

        $target.swatcher();

        $target.next().find('li:first').click();

        expect($target.val()).toBe($target.next().find('li:first').prop('title'));

    });

});