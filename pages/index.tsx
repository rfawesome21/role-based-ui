import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {Button} from '@mui/material'

const Home: NextPage = () => {
  const router = useRouter()
  return(
    <div className='flex justify-center items-center h-screen'>
      <Button variant='outlined' onClick={() => router.push('/Login')}>Login</Button>
    </div>
  )
}

export default Home
