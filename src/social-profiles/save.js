// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { size, spacing, align } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `spb-size-${size} spb-spacing-${spacing}`,
			})}
			style={{
				justifyContent: align,
			}}
		>
			<InnerBlocks.Content />
		</div>
	);
}
