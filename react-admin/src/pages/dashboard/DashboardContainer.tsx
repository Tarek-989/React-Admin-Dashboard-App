import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components';

export const DashboardContainer: React.FC = () => {
	return (
		<Box m={1.25}>
			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
				<Header title={'DASHBOURD'} subTitle={'Welcome to your dashbourd'} />
			</Box>
		</Box>
	);
};
