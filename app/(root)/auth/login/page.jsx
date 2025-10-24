'use client'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Logo from '@/public/assets/images/logo-black.png'
import Image from 'next/image'
import {zodResolver} from '@hookform/resolvers/zod'
import { zSchema } from '@/lib/zodSchema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
const LoginPage = () => {

  const formSchema = zSchema.pick({
    email: true, password: true
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:"",password:""
    },
  })

  const handleSubmit = async (values) => {
    
  }
  return (
    <Card className="w-[450px]">
      <CardContent>
        <div className='flex justify-center'>
          <Image src={Logo.src} width={Logo.width} height={Logo.height} alt='Logo'
            className='max-w-[150px]'
          ></Image>
        </div>
        <div className='text-center'>
          <h1 className='font-2xl font-semibold'>Login into account</h1>
          <p>Login into your account by filling out the form below.</p>
        </div>
        <div className='mt-5'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className='mb-5'>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-5'>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="**********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginPage