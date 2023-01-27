import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlined, HomeOutlined, MapOutlined, MenuOutlined, PeopleOutlined, PersonOutlined, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';

const Item: React.FC<TProps> = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.gray[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
}

export const SideBar: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box sx={{
			'& .pro-sidebar-inner': {
				background: `${colors.primary[400]} !important`
			},
			'& .pro-icon-wrapper': {
				backgroundColor: 'transparent !important'
			},
			'& .pro-inner-item': {
				padding: '0.313rem 2.188rem 0.313rem 1.25rem !important'
			},
			'& .pro-inner-item:hover': {
				color: '#868dfb !important'
			},
			'& .pro-menu-item.active': {
				color: '#6870fa !important'
			},
		}}>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlined /> : undefined}
						style={{
							margin: '0.625rem 0 1.25rem 0',
							color: colors.gray[100],
						}}
					>

						{!isCollapsed && (
							<Box
								display={'flex'}
								justifyContent={'space-between'}
								alignItems={'center'}
								ml={1}
							>
								<Typography variant='h3' color={colors.gray[100]}>ADMINS</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlined />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{/* user */}
					{!isCollapsed && (
						<Box mb={1.5}>
							<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
								<img
									alt='profile-user'
									height={100}
									width={100}
									src={'../../assetes/user.png'}
									style={{ cursor: 'pointer', borderRadius: '50%' }}

								/>
							</Box>
							<Box textAlign={'center'}>
								<Typography
									variant='h2'
									color={colors.gray[100]}
									fontWeight='bold'
									mt={0.625}
								>
									Tk Ad
								</Typography>
								<Typography
									variant='h5'
									color={colors.greenAccent[500]}
								>
									Admin
								</Typography>
							</Box>
						</Box>
					)}
					{/* Menu Items */}
					<Box pl={isCollapsed ? undefined : '10%'}>
						<Item
							title='Dashboard'
							to='/'
							icon={<HomeOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colors.gray[300]}
							sx={{ margin: '1rem 0 0.313rem 1.25rem' }}
						>
							Data
						</Typography>
						<Item
							title='Manage Team'
							to='/team'
							icon={<PeopleOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Contacts Information'
							to='/contacts'
							icon={<ContactsOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Invoices Balances'
							to='/invoices'
							icon={<ReceiptOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colors.gray[300]}
							sx={{ margin: '1rem 0 0.313rem 1.25rem' }}
						>
							Pages
						</Typography>
						<Item
							title='Profile Form'
							to='/form'
							icon={<PersonOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Calendar'
							to='/calendar'
							icon={<CalendarTodayOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='FAQ Page'
							to='/faq'
							icon={<HelpOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colors.gray[300]}
							sx={{ margin: '1rem 0 0.313rem 1.25rem' }}
						>
							Charts
						</Typography>
						<Item
							title='Bar Chart'
							to='/bar'
							icon={<BarChartOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Pie Chart'
							to='/pie'
							icon={<PieChartOutline />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Line Chart'
							to='/line'
							icon={<TimelineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Geography Chart'
							to='/geography'
							icon={<MapOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box >
	);
};

type TProps = {
	title: string;
	to: string;
	icon: React.ReactNode;
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
};