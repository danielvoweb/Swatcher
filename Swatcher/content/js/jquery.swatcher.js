(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        var $this = this,
            $list = $('<ul class="swatcher" />');

        $this.find('option').each(function () {

            var value = $(this).val(),
                $item = $('<li />');

            if ($(this).data('swatcher-color')) {
                value = $(this).data('swatcher-color');
            }

            $item
                .css('background-color', value)
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