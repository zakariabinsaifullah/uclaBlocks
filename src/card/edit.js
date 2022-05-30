/* eslint-disable no-unused-vars */
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	ToggleControl,
	SelectControl,
	Button,
} from '@wordpress/components';

const { Fragment } = wp.element;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

import colors from '../colors-palette';

export default function Edit({ attributes, setAttributes }) {
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
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Card Settings', 'ucla-blocks')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Title Tag', 'ucla-blocks')}
						value={titleTag}
						options={[
							{ label: 'h1', value: 'h1' },
							{ label: 'h2', value: 'h2' },
							{ label: 'h3', value: 'h3' },
							{ label: 'h4', value: 'h4' },
							{ label: 'h5', value: 'h5' },
							{ label: 'h6', value: 'h6' },
						]}
						onChange={(value) => {
							setAttributes({ titleTag: value });
						}}
					/>
					<p className="ucla__label">
						{__('Title Alignment', 'ucla-blocks')}
					</p>
					<div className="ucla__panel">
						<Button
							isPressed={titleAlign === 'left' ? true : false}
							onClick={() =>
								setAttributes({ titleAlign: 'left' })
							}
						>
							<span className="dashicons dashicons-align-pull-left"></span>
						</Button>
						<Button
							isPressed={titleAlign === 'center' ? true : false}
							onClick={() =>
								setAttributes({ titleAlign: 'center' })
							}
						>
							<span className="dashicons dashicons-align-center"></span>
						</Button>
						<Button
							isPressed={titleAlign === 'right' ? true : false}
							onClick={() =>
								setAttributes({ titleAlign: 'right' })
							}
						>
							<span className="dashicons dashicons-align-pull-right"></span>
						</Button>
					</div>
					<p className="ucla__label">
						{__('Description Alignment', 'ucla-blocks')}
					</p>
					<div className="ucla__panel">
						<Button
							isPressed={
								descriptionAlign === 'left' ? true : false
							}
							onClick={() =>
								setAttributes({ descriptionAlign: 'left' })
							}
						>
							<span className="dashicons dashicons-align-pull-left"></span>
						</Button>
						<Button
							isPressed={
								descriptionAlign === 'center' ? true : false
							}
							onClick={() =>
								setAttributes({ descriptionAlign: 'center' })
							}
						>
							<span className="dashicons dashicons-align-center"></span>
						</Button>
						<Button
							isPressed={
								descriptionAlign === 'right' ? true : false
							}
							onClick={() =>
								setAttributes({ descriptionAlign: 'right' })
							}
						>
							<span className="dashicons dashicons-align-pull-right"></span>
						</Button>
						<Button
							isPressed={
								descriptionAlign === 'justify' ? true : false
							}
							onClick={() =>
								setAttributes({ descriptionAlign: 'justify' })
							}
						>
							<span className="dashicons dashicons-editor-justify"></span>
						</Button>
					</div>
					<ToggleControl
						label={__('Show Button', 'ucla-blocks')}
						checked={showButton}
						onChange={() =>
							setAttributes({ showButton: !showButton })
						}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color Settings', 'ucla-blocks')}
					initialOpen={false}
					colorSettings={[
						{
							value: titleColor,
							onChange: (value) => {
								setAttributes({ titleColor: value });
							},
							label: __('Title Color', 'ucla-blocks'),
							colors,
						},
						{
							value: descriptionColor,
							onChange: (value) => {
								setAttributes({ descriptionColor: value });
							},
							label: __('Description Color', 'ucla-blocks'),
							colors,
						},
					]}
				/>
			</InspectorControls>
			{id && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										url: media.url,
										alt: media.alt,
										id: media.id,
									})
								}
								allowedTypes={['image']}
								value={id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__(
												'Edit Image',
												'ucla-blocks'
											)}
											onClick={open}
											icon="edit"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div {...useBlockProps()}>
				{url ? (
					<div className="card-image">
						<img
							src={url}
							alt={alt ? alt : __('Card Image', 'ucla-blocks')}
							className={`wp-image${id}`}
						/>
					</div>
				) : (
					<MediaPlaceholder
						onSelect={(media) =>
							setAttributes({
								url: media.url,
								alt: media.alt,
								id: media.id,
							})
						}
						onFilesPreUpload={(media) =>
							setAttributes({
								url: media.url,
								alt: media.alt,
								id: media.id,
							})
						}
						onSelectURL={false}
						allowedTypes={['image']}
						labels={{
							title: __('Add Card Image', 'ucla-blocks'),
						}}
					/>
				)}
				<div className="card-content">
					<RichText
						tagName={titleTag}
						value={title}
						onChange={(content) =>
							setAttributes({ title: content })
						}
						placeholder={__('Add title', 'ucla-blocks')}
						style={{
							color: titleColor,
							textAlign: titleAlign,
						}}
					/>
					<RichText
						tagName="P"
						value={description}
						onChange={(content) =>
							setAttributes({ description: content })
						}
						placeholder={__('Add description', 'ucla-blocks')}
						style={{
							color: descriptionColor,
							textAlign: descriptionAlign,
						}}
					/>
				</div>

				{showButton && (
					<InnerBlocks
						allowedBlocks={['ucla/button']}
						template={[['ucla/button']]}
						templateLock="all"
					/>
				)}
			</div>
		</Fragment>
	);
}
