<?php
/**
 * Plugin Name: creole-demo — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/vanpariyar/gutenberg-demo-esnext
 * Description: creole-demo — is a Gutenberg plugin created via create-guten-block.
 * Author: Ronak_Vanpariya, vanpariyar
 * Author URI: https://github.com/vanpariyar
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
