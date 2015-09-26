'use strict';

describe('Example: Colors from a select list using basic web colors', function () {

    var $sut;

    beforeAll(function (done) {

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

});