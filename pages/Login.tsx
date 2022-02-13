import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { login } from '../reducers/user'
import { FormControl, TextField, Button, Input, Card, CardHeader, CardContent, Checkbox, FormControlLabel, CardMedia } from '@mui/material';
import NavBar from '../components/Navbar'


const Login: NextPage = () => {
  const router = useRouter()
  const user = useSelector((state : RootState) => state.user.value)
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(login({name:email, role: type}))
    router.push('/Profile')
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
    const role = [
      {
        role : 'Admin'
      },
      {
        role : 'Client'
      },
      {
        role : 'Auditor'
      }
    ]

    const [type, setType] = useState<string>('Admin')


    function validateForm() {

        return email.length > 0;
    }

  return (
    <Card className='flex h-screen p-5'>
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
                    <FormControlLabel control={<Checkbox />} label="Accept terms and conditions" className='cursor-default text-xs' />
                  </div>
                  <div className='ml-auto self-center -mr-4'>
                    <FormControlLabel control={<></>} label={'Forgot Password'} className='text-xs underline cursor-pointer' />
                  </div>
                </div>
                <div className='mt-5'>
                  <Button className='text-light bg-gray-400 w-full hover:bg-gray-400'>Login</Button>
                </div>
            </FormControl>
        </CardContent>
      </div>
      <div className='flex pl-20 pr-20 pt-5 w-8/12 xl:w-full'>
        <img src='./leeds.jpg' alt='random image' className='h-full' />
      </div>
    </Card>
  )
}

export default Login
