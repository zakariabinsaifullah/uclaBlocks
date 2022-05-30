<?php
/**
 * Plugin Name:       UCLA Blocks
 * Description:       A Collection of Custom Gutenberg Blocks developed with Gutenberg Native Components.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.5.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ucla-blocks
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [ucla] && [UCLA] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// require file 
require_once( plugin_dir_path( __FILE__ ) . 'vendor/components.php' );

/**
 * Blocks Final Class
 */

final class UCLA_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->ucla_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'ucla_blocks_init' ] );

		// svg support hook 
		add_filter( 'upload_mimes', [ $this, 'ucla_svg_upload_enable' ], 10, 1 );

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'ucla_external_libraries' ] );

		// blocks category 
		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
				add_filter( 'block_categories', [ $this, 'ucla_register_block_category' ], 10, 2 );
			} else {
				add_filter( 'block_categories_all', [ $this, 'ucla_register_block_category' ], 10, 2 );
		}
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function ucla_define_constants() {
		define( 'UCLA_VERSION', '1.0.0' );
		define( 'UCLA_URL', plugin_dir_url( __FILE__ ) );
		define( 'UCLA_LIB_URL', UCLA_URL . 'lib/' );	
	}


	/**
	 * SVG Support 
	 */

	function ucla_svg_upload_enable( $upload_mimes ) {
		$upload_mimes['svg'] = 'image/svg+xml';
		$upload_mimes['svgz'] = 'image/svg+xml';
		return $upload_mimes;
	}
	
	/**
	 * Blocks Registration 
	 */

	public function ucla_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/' . $name, $options );
	 }

	 /**
	  * Blocks Category 
	  */
	  public function ucla_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'ucla-blocks',
					'title' => __( 'UCLA Blocks', 'ucla-blocks' ),
				),
			),
			$categories,
		);
	}

	// render inline css
	public function ucla_render_inline_css( $handle, $css ) {
		wp_register_style( $handle, false );
		wp_enqueue_style( $handle );
		wp_add_inline_style( $handle, $css );
	}
	

	/**
	 * Blocks Initialization
	*/
	public function ucla_blocks_init() {
		// register single block
		$this->ucla_register_block( 'button', array(
			'render_callback' => array( $this, 'ucla_button_block_render' ),
		) );
		$this->ucla_register_block( 'card' );
		$this->ucla_register_block( 'masonry-gallery' );
		$this->ucla_register_block( 'social-profiles' );
	}

	public function ucla_button_block_render($attributes, $content){
		if(! is_admin(  )){
			$handle = 'ucla-'.$attributes['id'];
			$custom_css = '';
			// desktop css
			$custom_css .= '.ucla__button_'.$attributes['id'].':hover { color: '.$attributes['btnHoverColor'].' !important; background-color: '.$attributes['btnHoverBgColor'].'!important; }';
			$this->ucla_render_inline_css( $handle, $custom_css );
		}
		return $content;
	}

	/**
	 * Enqueue Block Assets
	 */
	public function ucla_external_libraries() {
		if( ! is_admin(  ) ){
			wp_enqueue_style( 'dashicons' );
			// frontend css
			wp_enqueue_style( 'ucla-magnific-css', UCLA_LIB_URL . 'css/magnific-popup.css', array(), UCLA_VERSION, 'all' );
			// enqueue JS
			wp_enqueue_script( 'ucla-magnific-popup', UCLA_LIB_URL . 'js/jquery.magnific-popup.min.js', array('jquery'), UCLA_VERSION, true );
			wp_enqueue_script( 'ucla-lib', UCLA_LIB_URL . 'js/lightbox.js', array('jquery'), UCLA_VERSION, true );
		}
		// admin css
		if( is_admin() ) {
			wp_enqueue_style( 'ucla-admin-editor', UCLA_URL . 'admin/css/editor.css' );
		}
	}

}

/**
 * Kickoff
*/

UCLA_BLOCKS_CLASS::init();
