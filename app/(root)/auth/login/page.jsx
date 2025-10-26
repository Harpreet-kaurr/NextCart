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
import { WEBSITE_REGISTER } from '@/routes/WebsiteRoute'
import Link from 'next/link'

export default function LoginPage() {
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
    <AuthFormLayout title="Login Into Account" subTitle="Login into your account by filling out the form below.">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormInputField control={form.control} name="email" label="Email" placeholder="example@gmail.com" type="email" />
                <PasswordField control={form.control} name="password" label="Password" placeholder="**********" className="mt-5" />
                <ButtonLoading loading={loading} classname="w-full mt-5" type="submit" text="Login" />
            </form>
        </Form>
        <div className="text-center mt-3">
            <AuthRedirectText text="Don't have account?" linkText="Create Account!" href={WEBSITE_REGISTER} />
        </div>
         <div className="text-center mt-3">
            <Link href="" className='cursor-pointer underline text-primary'>Forget Password!</Link>
        </div>
    </AuthFormLayout>
  )
}
