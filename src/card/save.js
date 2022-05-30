/* eslint-disable no-unused-vars */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		id,
		url,
		alt,
		title,
		titleTag,
		titleColor,
		description,
		descriptionColor,
		showButton,
		titleAlign,
		descriptionAlign,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<div className="card-image">
					<img
						src={url}
						alt={alt ? alt : __('Card Image', 'ucla-blocks')}
						className={`wp-image${id}`}
					/>
				</div>
			)}
			<div className="card-content">
				<RichText.Content
					tagName={titleTag}
					value={title}
					style={{
						color: titleColor,
						textAlign: titleAlign,
					}}
				/>
				<RichText.Content
					tagName="P"
					value={description}
					style={{
						color: descriptionColor,
						textAlign: descriptionAlign,
					}}
				/>
			</div>

			{showButton && <InnerBlocks.Content />}
		</div>
	);
}
