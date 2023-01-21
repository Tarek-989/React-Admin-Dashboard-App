import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
export const Header: React.FC<TProps> = ({ title, subTilte }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box mb={2}>
			<Typography
				variant='h2'
				color={colors.gray[100]}
				fontWeight='bold'
				sx={{ mb: '0.313rem' }}
			>
				{title}
			</Typography>
			<Typography
				variant='h5'
				color={colors.greenAccent[400]}
			>
				{subTilte}
			</Typography>
		</Box>
	);
};

type TProps = {
	title: string;
	subTilte: string;
}
