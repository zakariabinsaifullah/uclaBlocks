/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/check-line-alignment */
/**
 * Props:
 * - customClass: custom class for each icon element
 * - iconsList: array of objects with icon name and value
 * - onClickFunc: function to be called when icon is clicked
 */
import { useState } from '@wordpress/element';

const GutBlocksIconPicker = ({
	label,
	selectedIcon,
	customClass,
	iconsList,
	onClickFunction,
}) => {
	const [panelVisible, setpanelVisible] = useState(false);
	return (
		<div className="gutblocks__picker">
			<div className="gutblocks__picker_header">
				<p className="gutblocks__label">{label}</p>
				<div className="gutblocks__picker_field">
					<div className="gutblocks__selected_item">
						<span
							className={`dashicons dashicons-${selectedIcon}`}
						></span>
					</div>
					<button
						className="gutblocks__items"
						onClick={() => setpanelVisible(!panelVisible)}
					>
						<span
							className={`${
								panelVisible
									? 'dashicons dashicons-remove'
									: 'dashicons dashicons-insert'
							}`}
						></span>
					</button>
				</div>
			</div>
			<div
				className={`gutblocks__picker_list ${
					panelVisible ? 'gutblocks__visible' : ''
				}`}
			>
				{iconsList.map((icon) => (
					<button
						className={`${customClass} gutblocks__item ${
							icon.value === selectedIcon
								? 'gutblocks__item_active'
								: ''
						}`}
						onClick={() => {
							onClickFunction(icon.value);
							setpanelVisible(false);
						}}
						key={icon.name}
					>
						<span
							className={`dashicons dashicons-${icon.value}`}
						></span>
					</button>
				))}
			</div>
		</div>
	);
};

export default GutBlocksIconPicker;
