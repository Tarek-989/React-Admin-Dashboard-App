import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { Header, LineChart, BarChart, GeographyChart, StatBox, ProgressCircle } from '../../components';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from '@mui/icons-material';

export const DashboardContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m={1.25}>
			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
				<Header title={'DASHBOARD'} subTitle={'Welcome to your dashboard'} />
				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.gray[100],
							fontSize: '0.875rem',
							fontWeight: 'bold',
							padding: '0.625rem 1.25rem',
						}}
					>
						<DownloadOutlined sx={{ mr: '0.625rem' }} />
						Download Reports
					</Button>
				</Box>
			</Box>
			{/* Grid & Charts */}
			<Box
				display={'grid'}
				gridTemplateColumns={'repeat(12, 1fr)'}
				gridAutoRows={'8.75rem'}
				gap={'1.25rem'}
			>
				{/* Row 1 */}
				<Box
					gridColumn={'span 3'}
					sx={{ backgroundColor: colors.primary[400] }}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatBox
						title='12,361'
						subTitle='Email Sent'
						progress={0.75}
						increase='+14%'
						icon={<Email sx={{ color: colors.greenAccent[600], fontSize: '1.625rem' }} />}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					sx={{ backgroundColor: colors.primary[400] }}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatBox
						title='431,225'
						subTitle='Sales Obtained'
						progress={0.25}
						increase='+21%'
						icon={<PointOfSale sx={{ color: colors.greenAccent[600], fontSize: '1.625rem' }} />}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					sx={{ backgroundColor: colors.primary[400] }}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatBox
						title='32,441'
						subTitle='New Clients'
						progress={0.30}
						increase='+5%'
						icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: '1.625rem' }} />}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					sx={{ backgroundColor: colors.primary[400] }}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatBox
						title='1,325,134'
						subTitle='Traffic Inbound'
						progress={0.80}
						increase='+43%'
						icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: '1.625rem' }} />}
					/>
				</Box>

				{/* Row 2 */}
				<Box
					gridColumn={'span 8'}
					gridRow={'span 2'}
					sx={{ backgroundColor: colors.primary[400] }}
				>
					<Box
						mt={'1.563rem'}
						p={'0 1.875rem'}
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Box>
							<Typography
								variant='h5'
								fontWeight={600}
								color={colors.gray[100]}
							>
								Revenue Generated
							</Typography>
							<Typography
								variant='h3'
								fontWeight={'bold'}
								color={colors.greenAccent[500]}
							>
								$59,342,32
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlined
									sx={{
										fontSize: '1.625rem',
										color: colors.greenAccent[500]
									}}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box
						height={'15.625rem'}
						mt={'-1.25rem'}
					>
						<LineChart isDashboard={true} />
					</Box>
				</Box>

				{/* Transactions */}
				<Box
					gridColumn={'span 4'}
					gridRow={'span 2'}
					sx={{ backgroundColor: colors.primary[400] }}
					overflow={'auto'}
				>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						borderBottom={`0.25rem solid ${colors.primary[500]}`}
						color={colors.gray[100]}
						p={'1rem'}
					>
						<Typography
							color={colors.gray[100]}
							variant='h5'
							fontWeight={600}
						>
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, i) => (
						<Box
							key={`${transaction.txId}-${i}`}
							display={'flex'}
							justifyContent={'space-between'}
							alignItems={'center'}
							borderBottom={`0.25rem solid ${colors.primary[500]}`}
							p={'1rem'}
						>
							<Box>
								<Typography
									color={colors.greenAccent[500]}
									variant='h5'
									fontWeight={600}
								>
									{transaction.txId}
								</Typography>
								<Typography
									color={colors.gray[100]}
								>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colors.gray[100]}>
								{transaction.date}
							</Box>
							<Box
								bgcolor={colors.greenAccent[500]}
								p={'0.313rem 0.625rem'}
								borderRadius={'0.25rem'}
							>
								{transaction.cost}
							</Box>
						</Box>
					))}
				</Box>

				{/* Row 3 */}
				<Box
					gridColumn={'span 4'}
					gridRow={'span 2'}
					sx={{ backgroundColor: colors.primary[400] }}
					p={'1.875rem'}
				>
					<Typography
						variant='h5'
						fontWeight={600}
					>
						Campaign
					</Typography>
					<Box
						display={'flex'}
						flexDirection={'column'}
						alignItems={'center'}
						mt={'1.563rem'}
					>
						<ProgressCircle size={7.813} />
						<Typography
							variant='h5'
							color={colors.gray[100]}
							sx={{ mt: 1 }}
						>
							$48,352 Revenue Generated
						</Typography>
						<Typography>
							Include extra misc expenditures and costs
						</Typography>
					</Box>
				</Box>

				{/*  */}

				<Box
					gridColumn={'span 4'}
					gridRow={'span 2'}
					sx={{ backgroundColor: colors.primary[400] }}
				>
					<Typography
						variant='h5'
						fontWeight={600}
						sx={{ p: '1.875rem 1.875rem 0 1.875rem' }}
					>
						Sales Quantity
					</Typography>
					<Box
						height={'15.625rem'}
						sx={{ mt: '-1.563rem' }}
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>

				<Box
					gridColumn={'span 4'}
					gridRow={'span 2'}
					sx={{ backgroundColor: colors.primary[400] }}
					p={'1.875rem'}
				>
					<Typography
						variant='h5'
						fontWeight={600}
						sx={{ mb: 1 }}
					>
						Geography Based Traffic
					</Typography>
					<Box
						height={'12.5rem'}
					>
						<GeographyChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
