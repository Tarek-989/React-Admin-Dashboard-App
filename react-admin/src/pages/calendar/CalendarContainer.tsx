import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";
import { Header } from "../../components";
import { tokens } from "../../theme";
import { DateInput, DateSelectArg, EventApi, EventClickArg, formatDate } from '@fullcalendar/core';

export const CalendarContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
	const handleDateClick = (selected: DateSelectArg) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();
		if (title) {
			calendarApi.addEvent({
				id: `${selected.startStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			})
		}
	}
	const handleEventClick = (selected: EventClickArg) => {
		if (window.confirm(
			`Are you sure you want to delete the event '${selected.event.title}'`
		)) {
			selected.event.remove();
		}
	}
	return (
		<Box m={1.25}>
			<Header title='CALENDAR' subTilte='Full Calendar Interative Page' />
			<Box display={'flex'} justifyContent={'space-between'}>
				{/* calendar sidebar */}
				<Box
					flex={'1 1 20%'}
					bgcolor={colors.primary[400]}
					p={1}
					borderRadius={'0.25rem'}
				>
					<Typography variant='h5'>Events</Typography>
					<List>
						{currentEvents.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									backgroundColor: colors.greenAccent[500],
									margin: '0.625rem 0',
									borderRadius: '0.125rem',
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start as DateInput, {
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
				{/* calendar */}
				<Box flex={'1 1 100%'} ml={1}>
					<FullCalendar
						height={'75vh'}
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin
						]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
						}}
						initialView={'dayGridMonth'}
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{
								id: '1234',
								title: 'All-day event',
								date: '2023-01-15'
							},
							{
								id: '1244',
								title: 'Timed event',
								date: "2023-01-28"
							}
						]}
					/>
				</Box>
			</Box>
		</Box >
	);
};
