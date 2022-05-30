/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	TextareaControl,
	SelectControl,
	Button,
} from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Script
 */

document.addEventListener('click', (e) => {
	const iconList = document.querySelector('.spb-icons-list');
	if (e.target.classList.contains('spb-selected-icon')) {
		// toggle class
		iconList.classList.toggle('show__icons');
	}
});

/**
 * Block Registration
 */
registerBlockType('spb/profile', {
	title: __('Single Profile', 'social-profile-block'),
	description: __('Single social profile', 'social-profile-block'),
	icon: 'admin-users',
	category: 'common',
	parent: ['spb/social-profiles'],
	attributes: {
		iconType: {
			type: 'string',
			default: 'icon',
		},
		imageUrl: {
			type: 'string',
		},
		imageAlt: {
			type: 'string',
		},
		imageId: {
			type: 'number',
		},
		alt: {
			type: 'string',
		},
		link: {
			type: 'string',
			default: '#',
		},
		tab: {
			type: 'boolean',
			default: false,
		},
		icon: {
			type: 'string',
			default: 'facebook-alt',
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const { iconType, imageUrl, imageAlt, imageId, alt, link, tab, icon } =
			attributes;

		const blockProps = useBlockProps({
			className: `wp-block-spb-profile ${
				imageUrl ? 'icon-added' : 'no-icon-added'
			}`,
		});
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Icon Setting', 'social-profile-block')}
						initialOpen={true}
					>
						<SelectControl
							label={__(
								'Icon Source Type',
								'social-profile-block'
							)}
							value={iconType}
							options={[
								{
									label: __(
										'Pick Icon',
										'social-profile-block'
									),
									value: 'icon',
								},
								{
									label: __(
										'Upload Icon',
										'social-profile-block'
									),
									value: 'upload',
								},
							]}
							onChange={(iconType) => {
								setAttributes({ iconType });
							}}
						/>
						{iconType === 'icon' && (
							<div className="spb-icon-selector">
								<p className="spb__title">
									{__('Select Icon', 'social-profile-block')}
								</p>
								<div className="spb-selected-icon">
									<span
										className={`dashicons dashicons-${icon}`}
									></span>
								</div>
								<ul className="spb-icons-list">
									<li
										className={`dashicons dashicons-facebook-alt ${
											icon === 'facebook-alt'
												? 'selected'
												: ''
										}`}
										onClick={() =>
											setAttributes({
												icon: 'facebook-alt',
											})
										}
										title={__(
											'Facebook',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-twitter ${
											icon === 'twitter' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'twitter' })
										}
										title={__(
											'Twitter',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-instagram ${
											icon === 'instagram'
												? 'selected'
												: ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'instagram' })
										}
										title={__(
											'Instagram',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-linkedin ${
											icon === 'linkedin'
												? 'selected'
												: ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'linkedin' })
										}
										title={__(
											'Linkedin',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-pinterest ${
											icon === 'pinterest'
												? 'selected'
												: ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'pinterest' })
										}
										title={__(
											'Pinterest',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-reddit ${
											icon === 'reddit' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'reddit' })
										}
										title={__(
											'Reddit',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-whatsapp ${
											icon === 'whatsapp'
												? 'selected'
												: ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'whatsapp' })
										}
										title={__(
											'WhatsApp',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-youtube ${
											icon === 'youtube' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'youtube' })
										}
										title={__(
											'Youtube',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-rss ${
											icon === 'rss' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'rss' })
										}
										title={__(
											'RSS',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-xing ${
											icon === 'xing' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'xing' })
										}
										title={__(
											'Xing',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-google ${
											icon === 'google' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'google' })
										}
										title={__(
											'Google',
											'social-profile-block'
										)}
									></li>
									<li
										className={`dashicons dashicons-podio ${
											icon === 'podio' ? 'selected' : ''
										}`}
										onClick={() =>
											setAttributes({ icon: 'podio' })
										}
										title={__(
											'Podio',
											'social-profile-block'
										)}
									></li>
								</ul>
							</div>
						)}
						{iconType === 'upload' && (
							<div className="spb-icon-upload">
								{imageUrl ? (
									<div
										className="image-preview"
										style={{ marginBottom: 15 + 'px' }}
									>
										<img src={imageUrl} alt="social icon" />
										<span
											className="dashicons dashicons-remove"
											onClick={() =>
												setAttributes({
													imageUrl: null,
												})
											}
										></span>
									</div>
								) : (
									<MediaUpload
										onSelect={(newImage) =>
											setAttributes({
												imageUrl: newImage.url,
											})
										}
										type="image"
										value={imageUrl}
										render={({ open }) => (
											<Button
												className="button button-large sbg__button"
												icon="upload"
												onClick={open}
											>
												{__(
													'Upload Icon',
													'social-profile-block'
												)}
											</Button>
										)}
									/>
								)}
							</div>
						)}
						<TextControl
							label={__('Social Link', 'social-profile-block')}
							value={link}
							onChange={(link) => setAttributes({ link })}
						/>
						<ToggleControl
							label={__(
								'Open in new tab',
								'social-profile-block'
							)}
							checked={tab}
							onChange={() => setAttributes({ tab: !tab })}
						/>
						{imageAlt === '' && (
							<TextareaControl
								label={__(
									'Icon Alt Text',
									'social-profile-block'
								)}
								help={__(
									'It is helpful for search engine',
									'social-profile-block'
								)}
								value={alt}
								onChange={(alt) => setAttributes({ alt })}
							/>
						)}
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					<div className="spb__icon">
						<a
							href={link}
							target={tab ? '_blank' : '_self'}
							rel={tab ? 'noopener noreferrer' : 'noopener'}
						>
							{iconType === 'upload' ? (
								<Fragment>
									{imageUrl ? (
										<img
											src={imageUrl}
											alt={
												imageAlt
													? imageAlt
													: alt || 'social-icon'
											}
											className={`wp-image-${imageId}`}
										/>
									) : (
										__(
											'No icon is uploaded yet.',
											'social-profile-block'
										)
									)}
								</Fragment>
							) : (
								<span
									className={`dashicons dashicons-${icon}`}
								></span>
							)}
						</a>
					</div>
				</div>
			</Fragment>
		);
	},
	save: ({ attributes }) => {
		const { iconType, icon, imageUrl, imageAlt, imageId, alt, link, tab } =
			attributes;

		return (
			<div {...useBlockProps.save()}>
				<div className="spb__icon">
					<a
						href={link}
						target={tab ? '_blank' : '_self'}
						rel={tab ? 'noopener noreferrer' : 'noopener'}
					>
						{iconType === 'upload' ? (
							<img
								src={imageUrl}
								alt={imageAlt ? imageAlt : alt || 'social-icon'}
								className={`wp-image-${imageId}`}
							/>
						) : (
							<span
								className={`dashicons dashicons-${icon}`}
							></span>
						)}
					</a>
				</div>
			</div>
		);
	},
});
