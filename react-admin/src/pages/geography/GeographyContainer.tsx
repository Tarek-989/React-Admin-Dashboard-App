import React from 'react';
import { Box } from '@mui/system';
import { GeographyChart, Header } from '../../components';

export const GeographyContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Header title='GEOGRAPHY CHART' subTitle='Simple Geography Chart ' />
			<Box height={'75vh'}>
				<GeographyChart />
			</Box>
		</Box>
	);
};
