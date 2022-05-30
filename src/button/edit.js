/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	TextControl,
	Button,
	TabPanel,
	ColorPalette,
	FontSizePicker,
} from '@wordpress/components';

const { Fragment } = wp.element;
const { __ } = wp.i18n;

// icon picker
import GutBlocksIconPicker from '../../vendor/components/iconPicker/iconpicker';

import icons from './icons';

// colors
import colors from '../colors-palette';

// font sizes
const fontSizes = [
	{
		name: __('Small', 'ucla-blocks'),
		slug: 'small',
		size: 12,
	},
	{
		name: __('Normal', 'ucla-blocks'),
		slug: 'normal',
		size: 14,
	},
	{
		name: __('Medium', 'ucla-blocks'),
		slug: 'medium',
		size: 16,
	},
	{
		name: __('Large', 'ucla-blocks'),
		slug: 'large',
		size: 18,
	},
	{
		name: __('Extra Large', 'ucla-blocks'),
		slug: 'extra-large',
		size: 24,
	},
];

// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		id,
		align,
		label,
		link,
		tab,
		showIcon,
		icon,
		iconPosition,
		btnNormalColor,
		btnHoverColor,
		btnNormalBgColor,
		btnHoverBgColor,
		topBottom,
		leftRight,
		borderRadius,
		fontSize,
	} = attributes;

	// client id
	setAttributes({ id: clientId.slice(0, 8) });

	return (
		<Fragment>
			<style>
				{`.ucla__button_${id}{ color: ${btnNormalColor} !important; background-color: ${btnNormalBgColor}; }`}
				{`.ucla__button_${id}:hover{ color: ${btnHoverColor}; background-color: ${btnHoverBgColor}; }`}
			</style>
			<InspectorControls>
				<PanelBody
					title={__('Button Settings', 'ucla-blocks')}
					initialOpen={true}
				>
					<div className="ucla__panel">
						<Button
							isPressed={align === 'left' ? true : false}
							onClick={() => setAttributes({ align: 'left' })}
						>
							<span className="dashicons dashicons-align-pull-left"></span>
						</Button>
						<Button
							isPressed={align === 'center' ? true : false}
							onClick={() => setAttributes({ align: 'center' })}
						>
							<span className="dashicons dashicons-align-center"></span>
						</Button>
						<Button
							isPressed={align === 'right' ? true : false}
							onClick={() => setAttributes({ align: 'right' })}
						>
							<span className="dashicons dashicons-align-pull-right"></span>
						</Button>
					</div>
					<TextControl
						label={__('Label', 'ucla-blocks')}
						value={label}
						onChange={(v) => setAttributes({ label: v })}
					/>
					<TextControl
						label={__('Link', 'ucla-blocks')}
						value={link}
						onChange={(v) => setAttributes({ link: v })}
					/>
					{link !== '' && (
						<ToggleControl
							label={__('Open in new tab', 'ucla-blocks')}
							checked={tab}
							onChange={() => setAttributes({ tab: !tab })}
						/>
					)}
					<FontSizePicker
						fontSizes={fontSizes}
						value={fontSize}
						onChange={(newFontSize) => {
							setAttributes({
								fontSize: newFontSize,
							});
						}}
						disableCustomFontSizes={true}
					/>
					<RangeControl
						label={__('Top and Bottom Padding', 'ucla-blocks')}
						value={topBottom}
						onChange={(topBottom) => setAttributes({ topBottom })}
						min={0}
						max={100}
					/>
					<RangeControl
						label={__('Left and Right Padding', 'ucla-blocks')}
						value={leftRight}
						onChange={(leftRight) => setAttributes({ leftRight })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__('Border Radius', 'ucla-blocks')}
						value={borderRadius}
						onChange={(borderRadius) =>
							setAttributes({ borderRadius })
						}
						min={0}
						max={100}
					/>
					<ToggleControl
						label={__('Show Icon', 'ucla-blocks')}
						checked={showIcon}
						onChange={() => setAttributes({ showIcon: !showIcon })}
					/>
					{showIcon && (
						<Fragment>
							<GutBlocksIconPicker
								label={__('Select Icon', 'ucla-blocks')}
								selectedIcon={icon}
								onClickFunction={(v) =>
									setAttributes({ icon: v })
								}
								customClass="gut-blocks-icon-picker"
								iconsList={icons}
							/>
							<SelectControl
								label={__('Icon Position', 'ucla-blocks')}
								value={iconPosition}
								options={[
									{
										label: __('Before', 'ucla-blocks'),
										value: 'before',
									},
									{
										label: __('After', 'ucla-blocks'),
										value: 'after',
									},
								]}
								onChange={(value) => {
									setAttributes({ iconPosition: value });
								}}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					title={__('Button Style', 'ucla-blocks')}
					initialOpen={false}
				>
					<div className="ucla__tabs_panel">
						<TabPanel
							activeClass="active-tab"
							tabs={[
								{
									name: 'normal',
									title: __('Normal', 'ucla-blocks'),
									className: 'ucla__tab',
								},
								{
									name: 'hover',
									title: __('Hover', 'ucla-blocks'),
									className: 'ucla__tab',
								},
							]}
						>
							{(panel) =>
								panel.name === 'normal' ? (
									<Fragment>
										<p className="ucla__label">
											{__('Text Color', 'ucla-blocks')}
										</p>
										<ColorPalette
											value={btnNormalColor}
											onChange={(v) =>
												setAttributes({
													btnNormalColor: v,
												})
											}
											colors={colors}
										/>
										<p className="ucla__label">
											{__(
												'Background Color',
												'ucla-blocks'
											)}
										</p>
										<ColorPalette
											value={btnNormalBgColor}
											onChange={(v) =>
												setAttributes({
													btnNormalBgColor: v,
												})
											}
											colors={colors}
										/>
									</Fragment>
								) : (
									<Fragment>
										<p className="ucla__label">
											{__('Text Color', 'ucla-blocks')}
										</p>
										<ColorPalette
											label={__(
												'Text Color',
												'ucla-blocks'
											)}
											value={btnHoverColor}
											onChange={(v) =>
												setAttributes({
													btnHoverColor: v,
												})
											}
											colors={colors}
										/>
										<p className="ucla__label">
											{__(
												'Background Color',
												'ucla-blocks'
											)}
										</p>
										<ColorPalette
											label={__(
												'Background Color',
												'ucla-blocks'
											)}
											value={btnHoverBgColor}
											onChange={(v) =>
												setAttributes({
													btnHoverBgColor: v,
												})
											}
											colors={colors}
										/>
									</Fragment>
								)
							}
						</TabPanel>
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} style={{ textAlign: align }}>
				<a
					href={link}
					className={`ucla__button_${id}`}
					target={tab ? '_blank' : '_self'}
					rel={tab ? 'noopener noreferrer' : 'noopener'}
					style={{
						padding: `${topBottom}px ${leftRight}px`,
						borderRadius: `${borderRadius}px`,
						fontSize: `${fontSize}px`,
					}}
				>
					{showIcon && iconPosition === 'before' && (
						<span
							className={`ucla__button_icon_before dashicons dashicons-${icon}`}
						></span>
					)}
					{label}
					{showIcon && iconPosition === 'after' && (
						<span
							className={`ucla__button_icon_after dashicons dashicons-${icon}`}
						></span>
					)}
				</a>
			</div>
		</Fragment>
	);
}
