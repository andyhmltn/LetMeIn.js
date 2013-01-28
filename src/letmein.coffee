jQuery.fn.extend
	LetMeIn: (options) ->
		settings =
			include_attribute: 'data-include'

		settings = $.extend settings, options

		$(@).load( @.attr( settings.include_attribute ) )

$ ->
	$('[data-include]').LetMeIn()