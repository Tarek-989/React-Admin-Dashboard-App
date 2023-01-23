import React from 'react';
import { Box } from '@mui/material';
import { BarChart, Header } from '../../components';


export const BarContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Header title='BAR CHART' subTilte='Simple Bar Chart ' />
			<Box height={'75vh'}>
				<BarChart isDashboard={false} />
			</Box>
		</Box>
	);
};
