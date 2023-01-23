import { Box } from '@mui/material';
import React from 'react';
import { Header } from '../../components';
import { PieChart } from '../../components/PieChart';

export const PieContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Header title='PIE CHART' subTilte='Simple Pie Chart ' />
			<Box height={'75vh'}>
				<PieChart />
			</Box>
		</Box>
	);
};
