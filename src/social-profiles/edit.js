/* eslint-disable no-shadow */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, Button } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// child blocks
import './profile.js';

export default function Edit({ attributes, setAttributes }) {
	const { size, spacing, align } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Icons Settings', 'social-profile-block')}
					initialOpen={true}
				>
					<RangeControl
						label={__('Icon Size', 'social-profile-block')}
						value={size}
						onChange={(size) => setAttributes({ size })}
						min={1}
						max={100}
					/>
					<RangeControl
						label={__('Icon Spacing', 'social-profile-block')}
						value={spacing}
						onChange={(spacing) => setAttributes({ spacing })}
						min={0}
						max={100}
					/>
					<p className="spb__title">
						{__('Horizontal Alignment', 'social-profile-block')}
					</p>
					<div>
						<Button
							onClick={() =>
								setAttributes({ align: 'flex-start' })
							}
							isPressed={align === 'flex-start'}
						>
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								aria-hidden="true"
								focusable="false"
							>
								<path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></path>
							</svg>
						</Button>
						<Button
							onClick={() => setAttributes({ align: 'center' })}
							isPressed={align === 'center'}
						>
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								aria-hidden="true"
								focusable="false"
							>
								<path d="M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"></path>
							</svg>
						</Button>
						<Button
							onClick={() => setAttributes({ align: 'flex-end' })}
							isPressed={align === 'flex-end'}
						>
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								aria-hidden="true"
								focusable="false"
							>
								<path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></path>
							</svg>
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: `spb-size-${size} spb-spacing-${spacing}`,
				})}
				style={{
					justifyContent: align,
				}}
			>
				<InnerBlocks
					allowedBlocks={['spb/profile']}
					template={[['spb/profile']]}
				/>
			</div>
		</Fragment>
	);
}
