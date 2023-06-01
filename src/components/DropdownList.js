import DropdownItem from './DropdownItem';
import { useState } from 'react';

const DropdownList = ({list}) => {
	const [activeItem, setActiveItem] = useState('Profile Information')
	const onActive = (item) => {
		setActiveItem(item)
	}
	return (
		<ul data-id="dropdown" className="dropdown">
			{list.map((item) => <DropdownItem item={item} isActive={activeItem === item} onActive={onActive}/>)}
		</ul>
	)
}

export default DropdownList
