import React, { useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { Header } from '../../components';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

export const TeamContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns: GridColDef[] = useMemo((): GridColumns => [
		{
			field: 'id',
			headerName: 'ID',
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'phone',
			headerName: 'Phone',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width={'70%'}
						m="0 auto"
						p={0.313}
						display={'flex'}
						justifyContent={'flex-start'}
						bgcolor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[800]}
						borderRadius={'0.25rem'}
					>
						{access === 'admin' && <AdminPanelSettingsOutlined sx={{ ml: 1.5 }} />}
						{access === 'manager' && <SecurityOutlined sx={{ ml: 1.5 }} />}
						{access === 'user' && <LockOpenOutlined sx={{ ml: 1.5 }} />}
						<Typography color={colors.gray[100]} sx={{ ml: 1 }}>{access}</Typography>
					</Box>
				)
			},
		},
	], [colors]);
	return (
		<Box m={1.25}>
			<Header title='TEAM' subTitle='Managing the Team Member' />
			<Box
				mt={2.5}
				height={'75vh'}
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none'
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none'
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},

				}}
			>
				<DataGrid
					rows={mockDataTeam}
					columns={columns}
				/>
			</Box>
		</Box>
	);
};
