( function( api ) {

	// Extends our custom "example-1" section.
	api.sectionConstructor['pro-section'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );

jQuery(document).ready(function($) {
	$('body').on('click', '.flush-it', function(event) {
		$.ajax ({
			url     : elegant_pink_cdata.ajax_url,  
			type    : 'post',
			data    : 'action=flush_local_google_fonts',    
			nonce   : elegant_pink_cdata.nonce,
			success : function(results){
				//results can be appended in needed
				$( '.flush-it' ).val(elegant_pink_cdata.flushit);
			},
		});
	});
});