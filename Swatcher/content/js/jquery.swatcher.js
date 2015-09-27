(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        settings = $.extend({
            colors: []
        }, settings);

        var $this = this,
            $list = $('<ul class="swatcher" />');

        if (settings.colors.length > 0) {

            $.each(settings.colors, function (index, value) {

                var $item = $('<option />');


                $item
                    .data('swatcher-color', value.color)
                .val(value.name);

                $this.append($item);

            });

        }

        $this.find('option').each(function () {

            var value = $(this).val(),
                color = value,
                $item = $('<li />');

            if ($(this).data('swatcher-color')) {
                color = $(this).data('swatcher-color');
            }

            $item
                .css('background-color', color)
                .prop('title', value);

            $list.append($item);

        });

        $list.on('click', 'li', function (e) {

            var $currentTarget = $(e.currentTarget);

            $list.find('li').not($currentTarget).removeClass('is-selected');

            $currentTarget.addClass('is-selected');

            $this.val($currentTarget.prop('title'));

        });

        return $this.hide().after($list);

    };

})(jQuery);