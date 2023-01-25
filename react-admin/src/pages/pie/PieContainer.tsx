import { Box } from '@mui/material';
import React from 'react';
import { Header, PieChart } from '../../components';

export const PieContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Header title='PIE CHART' subTitle='Simple Pie Chart ' />
			<Box height={'75vh'}>
				<PieChart />
			</Box>
		</Box>
	);
};
