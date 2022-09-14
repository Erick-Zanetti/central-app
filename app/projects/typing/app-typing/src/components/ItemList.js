import React from 'react'

const ItemList = ({ name, data, symble, ...rest }) => {
	return (
		<div className="list-item border rounded" {...rest}>
			{name}
			<span className="d-block display-6">
				{data}
				{symble && data > 0 ? <small>{symble}</small> : ''}
			</span>
		</div>
	)
}

export default ItemList
