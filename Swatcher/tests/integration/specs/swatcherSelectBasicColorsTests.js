'use strict';

describe('Example: Colors from a select list using basic web colors', function () {

    beforeAll(function (done) {

        loadWorkspace(
            '#example-from-select-basic-colors',
            '/index.html',
            '/content/js/jquery.swatcher.js',
            done);

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should do something', function () {

        expect(true).toBeFalsy();

    });

});