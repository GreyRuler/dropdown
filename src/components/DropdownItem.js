const DropdownItem = ({item, isActive, onActive}) => {
	return (
		<li className={isActive ? 'active' : ''} >
			<a href="#" onClick={() => onActive(item)}>{item}</a>
		</li>
	)
}

export default DropdownItem
