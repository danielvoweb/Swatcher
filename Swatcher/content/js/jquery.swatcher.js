(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        this.hide();

        var $list = $('<ul class="swatcher" />');

        this.find('option').each(function () {

            var $item = $('<li />');

            $item.css('background-color', $(this).val());

            $list.append($item);

        });

        this.after($list);

        return this;

    };

})(jQuery);