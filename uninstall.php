<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * When populating this file, consider the following flow
 * of control:
 *
 * - This method should be static
 * - Check if the $_REQUEST content actually is the plugin name
 * - Run an admin referrer check to make sure it goes through authentication
 * - Verify the output of $_GET makes sense
 * - Repeat with other user roles. Best directly by using the links/query string parameters.
 * - Repeat things for multisite. Once for a single site in the network, once sitewide.
 *
 * This file may be updated more in future version of the Boilerplate; however, this is the
 * general skeleton and outline for how the file should work.
 *
 * @since   0.1.5
 * @package   ClassicPress_SEO
 */

// If uninstall not called from ClassicPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Clear cron.
wp_clear_scheduled_hook( 'cpseo_search_console_get_analytics' );

// Set cpseo_clear_data_on_uninstall to TRUE to delete all data on uninstall.
if ( true === apply_filters( 'cpseo_clear_data_on_uninstall', false ) ) {

	// Delete all options.
	cpseo_delete_options();

	// Delete meta for post, user and term.
	cpseo_delete_meta( 'post' );
	cpseo_delete_meta( 'user' );
	cpseo_delete_meta( 'term' );

	// Drop Tables.
	cpseo_drop_table( 'cpseo_404_logs' );
	cpseo_drop_table( 'cpseo_redirections' );
	cpseo_drop_table( 'cpseo_redirections_cache' );
	cpseo_drop_table( 'cpseo_internal_links' );
	cpseo_drop_table( 'cpseo_internal_meta' );

	// Remove Capabilities.
	/**
	 * PSR-4 Autoload.
	 */
	include dirname( __FILE__ ) . '/vendor/autoload.php';

	\ClassicPress_SEO\Role_Manager\Capability_Manager::get()->remove_capabilities();

	// Clear any cached data that has been removed.
	wp_cache_flush();
}

/**
 * Delete options.
 *
 * @return void
 */
function cpseo_delete_options() {
	global $wpdb;

	$where = $wpdb->prepare( 'WHERE option_name LIKE %s OR option_name LIKE %s', '%' . $wpdb->esc_like( 'cpseo' ) . '%', '%' . $wpdb->esc_like( 'cpseo' ) . '%' );
	$wpdb->query( "DELETE FROM {$wpdb->prefix}options {$where}" ); // phpcs:ignore
}

/**
 * Delete post meta.
 *
 * @param string $table Table name.
 * @return void
 */
function cpseo_delete_meta( $table = 'post' ) {
	global $wpdb;

	$where = $wpdb->prepare( 'WHERE meta_key LIKE %s OR meta_key LIKE %s', '%' . $wpdb->esc_like( 'cpseo' ) . '%', '%' . $wpdb->esc_like( 'cpseo' ) . '%' );
	$wpdb->query( "DELETE FROM {$wpdb->prefix}{$table}meta {$where}" ); // phpcs:ignore
}

/**
 * Drop table from database
 *
 * @param string $name Name of table.
 * @return void
 */
function cpseo_drop_table( $name ) {
	global $wpdb;

	$wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}{$name}" ); // phpcs:ignore
}
