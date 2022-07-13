import React from 'react'
import Button from '../Components/Button'
import ButtonAnchor from '../Components/ButtonAnchor'
import Input from '../Components/Input'

const Register = () => {
	return (
		<main className='min-h-screen bg-primary flex items-center justify-center'>
			<div className="bg-secondary p-5 rounded-xl">
				<Input name={'name'} label='Nama' placeholder={'Masukkan Nama'} required/>
				<Input name={'username'} label='Username' placeholder={'Masukkan Username'} required/>
				<Input name={'password'} label='Password' type='password' placeholder={'Masukkan Password'} required/>
				<Input name={'confirm_password'} label='Konfirmasi Password ' type='password' placeholder={'Masukkan Kembali Password'} required/>
				<div className="flex justify-end w-full">
					<Button type='submit'>Sign Up</Button>
				</div>
				<hr className='my-5' />
				<ButtonAnchor to={'/login'}>Have Any Account?</ButtonAnchor>
			</div>
		</main>
	)
}

export default Register