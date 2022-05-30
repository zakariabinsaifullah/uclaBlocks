<?php 
/**
 * Enqueue scripts and styles.
 */

 // constant Path 
define( 'GUTBLOCKS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );

 // add all scripts and styles
 function gutblocks_enqueue_components_assets(){
    // Font Awesome Library 
    wp_enqueue_style( 'gutblocks-fontawesome-icons', GUTBLOCKS_URL . 'css/all.min.css', array(), '6.0.0', 'all' );

    // google fonts
    // wp_enqueue_style( 'gutblocks-google-fonts', 'https//fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    // wp_enqueue_style( 'gutblocks-google-fonts-pacifico', '//fonts.googleapis.com/css2?family=Pacifico&display=swap');

    // styles
    wp_enqueue_style( 'gutblocks-iconpicker-component', GUTBLOCKS_URL . 'css/gutpicker.css', array(), '1.0.0', 'all' );
 } 
 add_action( 'enqueue_block_assets', 'gutblocks_enqueue_components_assets' );