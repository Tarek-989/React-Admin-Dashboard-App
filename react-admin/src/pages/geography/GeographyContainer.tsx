import React from 'react';
import { Box } from '@mui/system';
import { GeographyChart, Header } from '../../components';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

export const GeographyContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m={1.25}>
			<Header title='GEOGRAPHY CHART' subTitle='Simple Geography Chart ' />
			<Box height={'75vh'}  border={`0.063rem solid ${colors.gray[100]}`} borderRadius={'0.25rem'}>
				<GeographyChart />
			</Box>
		</Box>
	);
};
