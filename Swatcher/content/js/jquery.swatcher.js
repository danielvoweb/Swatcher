(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        this.hide();

        var $list = $('<ul class="swatcher" />');

        this.find('option').each(function () {

            $list.append('<li />');

        });

        this.after($list);

        return this;

    };

})(jQuery);