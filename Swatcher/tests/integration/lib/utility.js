'use strict';

function loadWorkspace(selector, domUrl, sutUrl) {

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

}

function clearWorkspace() {

    $('#test-workspace').empty();

}

