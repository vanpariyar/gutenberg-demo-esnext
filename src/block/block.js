/**
 * BLOCK: creole-demo
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { Button, SelectControl, TextControl } from "@wordpress/components";
// import apiFetch from '@wordpress/api-fetch';

const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
import { RichText, AlignmentToolbar, BlockControls, } from '@wordpress/block-editor';
// import './bootstrap.css';
 
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, useEffect } = wp.blocks; // Import registerBlockType() from wp.blocks

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


const QuoteBlock = function QuoteBlock({quote, author, setAttributes, title}) {
	const getNewContent = ( ) => {
		fetch('https://vanpariyar.github.io/get-new-quote/rendomQuote.json', {
			 mode: 'cors',
		}) 
		.then(response => response.json())
		  .then(data => {  
			function getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
			}
			const min = 1;
			const max = data.length + min;
			var data = data[getRandomIntInclusive(min, max)];
			const quote = data.quote;
			const author = data.author;
			setAttributes({posts:{ quote: quote, author: author }})
		  });

	}
	const changeTitle = ( title ) => {

		setAttributes({posts:{ title: title }});
	}
	
	return (
		<div className="container">
			<InspectorControls>
				<PanelBody
					title={__('Block Options')}
					initialOpen={true}>
					<PanelRow>
						{<Button 
							isPrimary
							onClick={ getNewContent }>
							{ __( 'Get New Quote' ) }    						
						</Button>}
						<TextControl
							label="Additional CSS Class"
							value={ title }
							onChange={ ( className ) => setAttributes( { className } ) }
						/>
					</PanelRow>
					<PanelRow >
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section>
				<h1> { title } </h1>
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-6">
						<div className="card">
						<div className="card-body mx-auto">
							<h5 className="card-text qoute mt-4">{ quote }</h5>
							<p className="card-text"><strong>{ __('Author:') }</strong> <span className="author-name">{ author }</span></p>
						</div>
						</div>
					</div>
					<div className="col-sm-3"></div>
				</div>
			</section>
		</div>
	)
}


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
			type: 'text',
			title: '',
			quote: '', 
			author: '',
			title:'',
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
		
		const { attributes: { posts }, setAttributes } = props;


		if( typeof(posts) !== 'undefined' ){
			const { quote, author, title } = posts;
			return (
			  <QuoteBlock quote={ quote } author={ author } setAttributes={ setAttributes } title={ title }/>
			);
		}else{
			return (
			  <QuoteBlock quote={ 'Click the Get New Quote Button On sidebar ->' } author={ '' } setAttributes={ setAttributes }/>
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
		const { attributes: { posts } } = props;
		if( typeof(posts) !== 'undefined' ){
			const { quote, author , title } = posts;
			return (
			  <QuoteBlock quote={ quote } author={ author }/>
			);
		}else{
			return (
			  <QuoteBlock quote={ 'Click the Get New Quote Button On sidebar ->' } author={ '' }/>
			);
		}
	},
} );
