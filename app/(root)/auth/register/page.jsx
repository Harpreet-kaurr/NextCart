'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { zSchema } from '@/lib/zodSchema'
import { Form } from '@/components/ui/form'
import AuthFormLayout from '@/components/application/AuthFormLayout'
import FormInputField from '@/components/application/FormInputField'
import PasswordField from '@/components/application/PasswordField'
import ButtonLoading from '@/components/application/ButtonLoading'
import AuthRedirectText from '@/components/application/AuthRedirectText'
import { WEBSITE_LOGIN, WEBSITE_REGISTER } from '@/routes/WebsiteRoute'
const RegisterPage = () => {
  const [loading, setLoading] = useState(false) // ✅ Added this line
  
    const form = useForm({
      resolver: zodResolver(zSchema),
      defaultValues: { fullName: '', email: '', password: '', confirmPassword: '' },
    });
  
    const handleSubmit = async (values) => {
      setLoading(true)
      try {
        // simulate API call or handle registration
        console.log(values)
      } finally {
        setLoading(false)
      }
    }
  return (
      <AuthFormLayout title="Create Account!" subTitle="Create new account by filling out the form below.">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormInputField control={form.control} name="fullName" label="Full Name" placeholder="Developer Super" />
            <FormInputField control={form.control} name="email" label="Email" placeholder="example@gmail.com" type="email" className='mt-5' />
            <PasswordField control={form.control} name="password" label="Password" placeholder="**********" className='mt-5' />
            <PasswordField control={form.control} name="confirmPassword" label="Confirm Password" placeholder="**********"  className='mt-5'/>
            <ButtonLoading loading={loading} classname="w-full mt-4" type="submit" text="Create Account" />
            </form>
        </Form>
        <div className="text-center mt-3">
            <AuthRedirectText text="Already have an account?" linkText="Login!" href={WEBSITE_LOGIN} />
        </div>
      </AuthFormLayout>
  )
}

export default RegisterPage