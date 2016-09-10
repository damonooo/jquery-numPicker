/**
 * Created by Damon on 2016/9/10.
 */
(function ($) {
    $.fn.extend({
        "numPicker": function(){
            var ele_minus = '<a class="minus" href="javascript:void(0)">-</a>',
                ele_input = '<input id="num_input" type="text" class="num" value="1" readonly="readonly">',
                ele_add = '<a class="add" href="javascript:void(0)">+</a>';
            $(this).html(ele_minus+ele_input+ele_add);

            var minus = $(this).children("a.minus"),
                input = $(this).children("input.num"),
                add = $(this).children("a.add");

            minus.addClass("numP-btn");
            add.addClass("numP-btn");
            input.addClass("numP-num");

            minus.click(function(){
                if(input.val() > 0){
                    input.val(Number(input.val()) - 1);
                    if(input.val() == 0){
                        minus.addClass("btn-disable");
                    }
                }
            });
            add.click(function(){
                input.val(Number(input.val()) + 1);
                if(input.val() > 0){
                    minus.removeClass("btn-disable");
                }
            });
        }
    });
})(window.jQuery);