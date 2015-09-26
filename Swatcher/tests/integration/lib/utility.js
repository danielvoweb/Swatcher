'use strict';

function loadWorkspace(selector, domUrl, sutUrl, done) {

    $.ajax(
        {
            async: false,
            cache: false,
            url: domUrl

        })
        .done(function (response) {

            $('#test-workspace').html(
                $(response).find(selector));
        });

    $.ajax(
        {
            async: false,
            cache: false,
            url: sutUrl
        });

    done();

}

function clearWorkspace() {

    $('#test-workspace').empty();

}

