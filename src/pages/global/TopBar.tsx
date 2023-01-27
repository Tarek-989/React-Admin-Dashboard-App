import {
	Search,
	Notifications,
	LightModeOutlined,
	SettingsOutlined,
	PersonOutline,
	DarkModeOutlined,
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';

export const TopBar: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext)
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			p={2}
		>
			{/* Search bar */}
			<Box
				display={'flex'}
				borderRadius={'0.188rem'}
				bgcolor={colors.primary[400]}
			>
				<InputBase
					sx={{
						ml: 2, flex: 1
					}}
					placeholder={'Search'}
				/>
				<IconButton type='button' sx={{ p: 1 }}>
					<Search />
				</IconButton>
			</Box>

			{/* Icons */}
			<Box display={'flex'}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
				</IconButton>
				<IconButton>
					<Notifications />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
				<IconButton>
					<PersonOutline />
				</IconButton>
			</Box>
		</Box>
	);
};
