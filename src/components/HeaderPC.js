import React from 'react';
import Grid from '@material-ui/core/Grid';
import './HeaderPC.css'

class HeaderPC extends React.Component {

	render() {

		return (
			<>
				{/* <div className="header-PC grid-md-12">
					<div className="nav grid-md-6">

					</div>
				</div> */}
				<Grid className="header-PC" container spacing={24} justify="center">
					<Grid className="nav" item md={11}>
						
					</Grid>
				</Grid>
			</>
		);
	}
}

export default HeaderPC