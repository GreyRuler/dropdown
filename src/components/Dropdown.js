import { useState } from 'react';
import DropdownList from './DropdownList';

const Dropdown = () => {
	const [isOpen, setOpen] = useState(true)
	const toggleOpen = () => {
		setOpen(isOpen => !isOpen)
	}
	const list = [
		'Profile Information',
		'Change Password',
		'Become PRO',
		'Help',
		'Log Out',
	]
	return (
		<div data-id="wrapper" className={isOpen ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
			<button data-id="toggle" className="btn" onClick={toggleOpen}>
				<span>Account Settings</span>
				<i className="material-icons">public</i>
			</button>
			<DropdownList list={list}/>
		</div>
	)
}

export default Dropdown
