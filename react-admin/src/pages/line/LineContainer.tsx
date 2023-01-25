import { Box } from '@mui/material';
import React from 'react';
import { Header } from '../../components';
import { LineChart } from '../../components/LineChart';

export const LineContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Header title='LINE CHART' subTitle='Simple Line Chart ' />
			<Box height={'75vh'}>
				<LineChart />
			</Box>
		</Box>
	);
};
