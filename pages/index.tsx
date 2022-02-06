import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { login } from '../reducers/user'

const Home: NextPage = () => {
  const router = useRouter()
  const user = useSelector((state : RootState) => state.user.value)
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(login({name:email, role: type}))
    router.push('/Profile')
  }

  const [email, setEmail] = useState<string>('')
    const role = [
      {
        role : 'Admin'
      },
      {
        role : 'Client'
      },
      {
        role : 'Viewer'
      }
    ]

    const [type, setType] = useState<string>('Admin')


    function validateForm() {

        return email.length > 0;
    }

  return (
    <div className="flex-1 flex flex-col justify-center items-center h-screen">
            <div>
                <Form.Group controlId="email">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=''
                    autoComplete={'off'}
                />
                {user.name}
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Role</Form.Label>
                <div className='mt-2'>
                  <select className='border-2 border-black' onChange={e => setType(e.currentTarget.value)}>
                    {role.map((r, index) => 
                      <option key={index} value={r.role}>
                        {r.role}
                      </option>
                    )}
                  </select>
                </div>
                </Form.Group>
                <div className='flex items-center justify-center mt-2'>
                  <Button size="lg" type="submit" disabled={!validateForm()} onClick={() => handleLogin()}>
                  Login
                  </Button>
                </div>
            </div>
        </div>
  )
}

export default Home
