'use strict';

function sharedSwatcherTests() {

    var $target, $observed;

    beforeEach(function () {

        $target = $('#test-workspace').find('select');

        $observed = $('#test-workspace').find('ul.swatcher');

    });

    describe('(shared)', function () {

        it('Should hide targeted plugin element', function () {

            expect($target.is(':visible')).toBeFalsy();

        });

        it('Should create a unordered swatcher list', function () {

            expect($observed.prop('tagName')).toBe('UL');

        });

        it('Should add the ".swatcher" class to the unordered list', function () {

            expect($observed.hasClass('swatcher')).toBeTruthy();

        });

        it('Should add an item for every option to the swatcher list', function () {

            expect($observed.find('li').length).toBe($target.find('option').length);

        });

        it('Should add an ".is-selected" class when a swatch is clicked', function () {

            $observed.find('li:first').click();

            expect($observed.find('li:first').hasClass('is-selected')).toBeTruthy();

        });

        it('Should remove the ".is-selected" class when a selected swatch is clicked', function () {

            $observed.find('li:first').click();

            $observed.find('li:first').click();

            expect($observed.find('li:first').hasClass('is-selected')).toBeFalsy();

        });

        it('Should add a ".has-selected-swatch" class when a swatch is selected', function() {

            $observed.find('li:first').click();

            expect($observed.prop('class')).toContain('has-selected-swatch');

        });

        it('Should remove the ".is-selected" class from the current target once another swatch is clicked', function () {

            $observed.find('li:first').click();

            $observed.find('li:nth-child(2)').click();

            expect($observed.find('li:first').hasClass('is-selected')).toBeFalsy();

        });

        it('Should add a title for each swatch from the option value', function () {

            expect($observed.find('li:first').prop('title')).toBe($target.find('option:first').val());

        });

        it('Should select the corresponding option when a swatch is selected', function () {

            $observed.find('li:first').click();

            expect($target.val()).toBe($observed.find('li:first').prop('title'));

        });

    });

}