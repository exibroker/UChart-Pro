import { createSignal, For, ParentProps, Show } from 'solid-js';
import i18n from '../../i18n';
import { Period } from '../../types';
import './index.less';

interface dropdownProps extends ParentProps {
	onSelect: (value: Period) => void;
	locale: string;
	period: Period;
	items: Period[];
}

function PeriodDropdown(props: dropdownProps) {
	const [isOpen, setIsOpen] = createSignal(false);

	const toggleDropdown = () => setIsOpen(!isOpen());

	const handleItemClick = (item: Period) => {
		props.onSelect(item);
		setIsOpen(false); // Close dropdown after selection
	};

	const items = props.items || []; // Array of dropdown items

	return (
		<div class="period">
			<button onClick={toggleDropdown} class="dropdown-trigger">
				{props.period.text}
			</button>

			<Show when={isOpen()}>
				<div class="dropdown-content absolute">
					<For each={items}>
						{(item) => (
							<div onClick={() => handleItemClick(item)} class="dropdown-item">
								<span>{item.multiplier}</span>
								<span class="time">{i18n(item.timespan, props.locale)}</span>
							</div>
						)}
					</For>
				</div>
			</Show>
		</div>
	);
}
export default PeriodDropdown;
