import React from 'react';
import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { Header } from "../../components";
import { tokens } from "../../theme";
import { ExpandMore } from '@mui/icons-material';

export const FaqContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m={1.25}>
			<Header title='FAQ' subTilte='Frequently Asked Quastions Page' />
			<Box display={'flex'} flexDirection={'column'} rowGap={1.5}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							An Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Kinda Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Anthor Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Not Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Maybe Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />} >
						<Typography variant='h5' color={colors.greenAccent[500]}>
							Yeah... Important Quastion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
							nobis ut amet est sequi eos, pariatur deserunt minima quas quibusdam
							quod cupiditate? Repellat, doloribus corrupti! Tenetur, perferendis
							natus! Quisquam, dolore!
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Box>
	);
};
