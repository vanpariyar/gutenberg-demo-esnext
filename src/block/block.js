/**
 * BLOCK: creole-demo
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import apiFetch from '@wordpress/api-fetch';

 

// import './bootstrap.css';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-creole-demo', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'creole-demo - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'creole-demo — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		posts: {
			type: 'array',
			value: '',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p className='wp-block-cgb-block-creole-demo'></p>.
		// GET
		const QuoteBlock = function QuoteBlock({quote, author}) {
		    return (
		        <div className="container">
					<section>
						<h1>Hello</h1>
						<div className="row">
							<div className="col-sm-3"></div>
							<div className="col-sm-6">
								<div className="card">
								<div className="card-body mx-auto">
									<h4 className="card-title text-center">-: Click or Refresh To See new Quotes :-</h4>
									<h5 className="card-text qoute mt-4">{ quote }Loading.........</h5>
									<p className="card-text"><strong>Author:</strong> <span className="author-name">{ author }Loading...............</span></p>
									<a href="#" className="btn btn-primary get-new-quote btn-block" onClick={ getNewContent }>Get New Quote</a>
								</div>
								</div>
							</div>
							<div className="col-sm-3"></div>
							
						</div>
					</section>
				</div>
		    )
		}
		const { attributes: { posts }, setAttributes } = props;
		const getNewContent = ( )=> {
			fetch('https://vanpariyar.github.io/get-new-quote/rendomQuote.json', {
			     mode: 'cors',
			}) 
			.then(response => response.json())
  			.then(data => {
  				setAttributes({posts: {value: data} });
  				console.log(JSON.stringify(data))
  			});
		}
		console.log(`This is post`,posts);

		if(posts){
			const min = 1;
			const max = 103;
			function getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
			}

			const quote = posts.value[getRandomIntInclusive(min, max)];
			console.log(`this is qoute`,quote);
		}
		if(posts){
			return (
				<div>
				  <QuoteBlock quote={quote.quote} author={quote.author}/>
				</div>  
			);
		}else{
			return (
				<div>
				  <QuoteBlock quote="Loading... .. ." author="Loading... .. ." />
				</div>  
			);
		}	
		
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className="container">
				<section>
					<h1>Hello</h1>
					<div className="row">
						<div className="col-sm-3"></div>
						<div className="col-sm-6">
							<div className="card">
							<div className="card-body mx-auto">
								<h4 className="card-title text-center">-: Click or Refresh To See new Quotes :-</h4>
								<h5 className="card-text qoute mt-4">Loading.........</h5>
								<p className="card-text"><strong>Author:</strong> <span className="author-name">Loading...............</span></p>
								<a href="#" className="btn btn-primary get-new-quote btn-block">Get New Quote</a>
							</div>
							</div>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</section>
			</div>
		);
	},
} );
