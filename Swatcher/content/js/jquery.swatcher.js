(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        settings = $.extend({
            colors: [],
            expandable: false
        }, settings);

        var $this = this,
            $list = $('<ul class="swatcher" />');

        if (settings.colors.length > 0) {

            $.each(settings.colors, function (index, value) {

                $this.append(
                    $('<option />')
                        .data('swatcher-color', value.color)
                        .val(value.name));

            });

        }

        $this.find('option').each(function () {

            var value = $(this).val(),
                color = value;

            if ($(this).data('swatcher-color')) {
                color = $(this).data('swatcher-color');
            }

            $list.append(
                $('<li />')
                    .css('background-color', color)
                    .prop('title', value));

        });

        $list.on('click', 'li', function (e) {

            var $currentTarget = $(e.currentTarget);

            $list.find('li').not($currentTarget).removeClass('is-selected').removeClass('is-expanded');

            $currentTarget.addClass('is-selected');

            if (settings.expandable) {

                $currentTarget.addClass('is-expanded');

            }

            $this.val($currentTarget.prop('title'));

            $list.addClass('has-selected-swatch');

        });

        return $this.hide().after($list);

    };

})(jQuery);