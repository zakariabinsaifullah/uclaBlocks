/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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

	return (
		<div {...useBlockProps.save()} style={{ textAlign: align }}>
			<a
				href={link}
				className={`ucla__button_${id}`}
				target={tab ? '_blank' : '_self'}
				rel={tab ? 'noopener noreferrer' : 'noopener'}
				style={{
					padding: `${topBottom}px ${leftRight}px`,
					borderRadius: `${borderRadius}px`,
					fontSize: `${fontSize}px`,
					color: btnNormalColor,
					backgroundColor: btnNormalBgColor,
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
	);
}
