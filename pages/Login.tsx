import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/user'
import { FormControl, TextField, Button, Card, CardHeader, CardContent, Checkbox, FormControlLabel, CardMedia } from '@mui/material';
import NavBar from '../components/Navbar'


const Login: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(login({email:email, password: password}))
    router.push('/Profile')
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

    // const role = [
    //   {
    //     role : 'Admin'
    //   },
    //   {
    //     role : 'Client'
    //   },
    //   {
    //     role : 'Auditor'
    //   }
    // ]

    const [type, setType] = useState<string>('Admin')


    function validateForm() {

        return email.length > 0 && password.length > 0 && checked;
    }

  return (
    <div>
      <NavBar />
    <div className='flex p-5'>
      <div className='pl-20 pr-20 pt-5 w-full'>
        <CardHeader title={'Easy Audit Logo'} />
        <CardHeader title={'Login'} />
        <CardContent>
            <h6 className='xl:w-9/12'>Lorem ipsum is simply dummy test of the printing and typesetting</h6>
            <FormControl className='w-full'>
                <div className='mt-3'>
                  <TextField id="filled-basic" label="Email" variant="filled" className='w-full' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='mt-3'>
                  <TextField id="filled-basic" label="Password" type={'password'} className='w-full' variant="filled" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='flex flex-row w-full'>
                  <div>
                    <FormControlLabel control={<Checkbox onClick={() => setChecked(!checked)} />} label="Accept terms and conditions" className='cursor-default text-xs' />
                  </div>
                  <div className='ml-auto self-center -mr-4'>
                    <FormControlLabel control={<></>} label={'Forgot Password'} className='text-xs underline cursor-pointer' />
                  </div>
                </div>
                <div className='mt-5'>
                  <Button className='text-light bg-gray-400 w-full hover:bg-gray-400' type='submit' disabled={!validateForm()} onClick={() => handleLogin()}>Login</Button>
                </div>
            </FormControl>
        </CardContent>
      </div>
      <div className='flex pl-20 pr-20 pt-5 w-8/12 xl:w-full'>
        <img src='./leeds.jpg' alt='random image' className='h-full' />
      </div>
    </div>
    </div>
  )
}

export default Login
