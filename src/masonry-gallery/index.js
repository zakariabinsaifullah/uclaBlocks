import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: (
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path d="M10 15c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm7.8-5v14h-18v-14h18zm-2 2h-14v10h14v-10zm-6.462-9.385l2.244 5.385h2.167l-3.334-8-16.615 6.923 4 9.663v-5.265l-1.384-3.321 12.922-5.385z" />
			</svg>
		),
		foreground: '#006BA1',
	},
	edit: Edit,
	save: Save,
});
