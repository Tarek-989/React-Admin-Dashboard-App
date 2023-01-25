import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridColumns, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import { Header } from '../../components';

export const ContactsContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns: GridColDef[] = useMemo((): GridColumns => [
		{
			field: 'id',
			headerName: 'ID',
			flex: 0.5,
		},
		{
			field: 'registrarId',
			headerName: 'Registrar ID',
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
			align: 'left'
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
			field: 'address',
			headerName: 'Address',
			flex: 1,
		},
		{
			field: 'city',
			headerName: 'City',
			flex: 1,
		},
		{
			field: 'zipCode',
			headerName: 'Zip Code',
			flex: 1,
		},
	], []);
	return (
		<Box m={1.25}>
			<Header title='CONTACTS' subTitle='List of Contacts for Future Reference' />
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
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.gray[100]} !important`,
					},

				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};
