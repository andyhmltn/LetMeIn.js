// Generated by CoffeeScript 1.4.0
(function() {

  jQuery.fn.extend({
    LetMeIn: function(options) {
      var settings;
      settings = {
        include_attribute: 'data-include'
      };
      settings = $.extend(settings, options);
      return $(this).load(this.attr(settings.include_attribute));
    }
  });

  $(function() {
    return $('[data-include]').LetMeIn();
  });

}).call(this);