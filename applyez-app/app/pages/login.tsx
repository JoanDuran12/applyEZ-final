'use client'

import {FormEvent} from 'react'
import { useRouter} from 'next/navigation'
import {Button, ButtonGroup} from "@nextui-org/button";

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();

    const formData=new FormData(event.currentTarget)
    const email=formData.get('email')
    const password=formData.get('password')

    const response=await fetch('/api/auth/login', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    })

    if (response.ok){
      router.push('/profile')
    }
    else{
      console.error('login failed')
    }
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1>Welcome&nbsp;</h1>
        <h1>to AI Resume Enhancer&nbsp;</h1>
        <br />
        <h2>
          Login to create an account to get started
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="email" name ="email" placeholder="Email" required></input>
          <input type="password" name="password" placeholder="Password" required></input>
          <Button color = "primary" type="submit"> Login </Button>
        </form>
      </div>
    </section>
  );
}
