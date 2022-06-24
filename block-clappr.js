var el = wp.element.createElement;

wp.blocks.registerBlockType('clappr-block/clappr', {
	title: 'Clappr',		// Block name visible to the user within the editor
	icon: 'video-alt3',	// Toolbar icon displayed beneath the name of the block
	category: 'common',	// The category under which the block will appear in the Add block menu
	attributes: {			// The data this block will be storing
		type: { type: 'string', default: 'default' },			// Clappr box type for loading the appropriate CSS class. Default class is 'default'.
		imageUrl: { type: 'string' },			// Title of Clappr box in h4 tag
		streaming: { type: 'string' },			// Streaming of Clappr box
		content: { type: 'array', source: 'children', selector: 'p' }		/// Clappr box content in p tag
	},
	edit: function(props) {
      // Defines how the block will render in the editor
	        
	   function updateTitle( event ) {
		   props.setAttributes({ imageUrl: event.target.value });
		}
		function updateStreaming( event ) {
		   props.setAttributes({ streaming: event.target.value });
		}

	   function updateContent( newdata ) {
	      props.setAttributes( { content: newdata } );
	   }

	   function updateType( newdata ) {
	      props.setAttributes( { type: event.target.value } );
		}


		return el( 'div', 
			{ 
				className: 'clappr-box clappr-' + props.attributes.type
			},
			
			el('span',
				{
					className: 'dashicon dashicons dashicons-video-alt3'
				},
			),

			el('h3',
				{
					className: 'clappr-box-name'
				},

				'Clappr',
			),

			el('div',
				{
					className: 'clappr-box_control'
				},

			el( 'label', 
			{ 
				className: 'clappr-box-title-video'
			},
			
			'URL',
			),
			el(
				'input', 
				{
					type: 'url', 
					placeholder: '(.m3u8, .mp4, .mpd, .mp3, .webm, rtmp://)',
					value: props.attributes.streaming,
					onChange: updateStreaming,
					style: { width: '97%' },
					id: 1
				}
			),
			el('p',
				{
					className: 'clappr-box-text-control-video'
				},

				'Video URL',
				),
			),

			el('div',
				{
					className: 'clappr-box_control'
				},
			el('label',
				{
					className: 'clappr-box-title-video'
				},

				'Poster',
			),

			el(
				'input', 
				{
					type: 'url', 
					placeholder: '(.jpg, .png, .gif)',
					value: props.attributes.imageUrl,
					onChange: updateTitle,
					style: { width: '97%' },
					id: 2
				}
			),
			el('p',
				{
					className: 'clappr-box-text-control-video'
				},

				'Poster image URL',
				),
			)
		); 	// End return
   },
 
   save: function(props) {
      // Defines how the block will render on the frontend
	   return el('div',
		   {
			   className: 'clappr-box'
		   },
		   '[clappr media="' + props.attributes.streaming + '" poster="' + props.attributes.imageUrl + '"]'
	   ); 	// End return
   }
});