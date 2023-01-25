import React from 'react';
import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Header } from '../../components';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
}
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\(\d{2,3}\)[ -]?)|(\d{2,4})[ -]?)*?\d{3,4}[ -]?\d{3,4}$/;
const userSchema = yup.object().shape({
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('Invalid Eamil').required('required'),
	contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
	address1: yup.string().required('required'),
	address2: yup.string().required('required'),
});

export const FormContainer: React.FC = () => {
	const isNonMobile = useMediaQuery('(min-width:37.5rem)');
	const handleFormSubmit = (values: TValues) => {
		console.log(values);
	};
	return (
		<Box m={1.25}>
			<Header title='CREATE USER' subTitle='Create a New User Profile' />
			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							display={'grid'}
							gap={1.875}
							gridTemplateColumns='repeat(4, minmax(0, 1fr))'
							sx={{
								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'First Name'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.firstName}
								name={'firstName'}
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'Last Name'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lastName}
								name={'lastName'}
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{ gridColumn: 'span 2' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'Email'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name={'email'}
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'Contact Number'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.contact}
								name={'contact'}
								error={!!touched.contact && !!errors.contact}
								helperText={touched.contact && errors.contact}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'Address 1'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address1}
								name={'address1'}
								error={!!touched.address1 && !!errors.address1}
								helperText={touched.address1 && errors.address1}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type={'text'}
								label={'Address 2'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address2}
								name={'address2'}
								error={!!touched.address2 && !!errors.address2}
								helperText={touched.address2 && errors.address2}
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>
						<Box display={'flex'} justifyContent={'end'} mt={1.25}>
							<Button type='submit' color='secondary' variant='contained'>
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

type TValues = {
	firstName: string;
	lastName: string;
	email: string;
	contact: string;
	address1: string;
	address2: string;
}
