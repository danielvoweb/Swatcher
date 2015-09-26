(function ($) {

    'use strict';

    $.fn.swatcher = function (settings) {

        var $list,
            $this = this;

        $this.hide();

        $list = $('<ul class="swatcher" />');

        $this.find('option').each(function () {

            var value = $(this).val(),
                $item = $('<li />');

            $item
                .css('background-color', value)
                .prop('title', value);

            $list.append($item);

        });

        $this.after($list);

        $list.on('click', 'li', function (e) {

            $list.find('li').not($(e.currentTarget)).removeClass('is-selected');

            $(e.currentTarget).addClass('is-selected');

            $this.val($(e.currentTarget).prop('title'));

        });

        return $this;

    };

})(jQuery);