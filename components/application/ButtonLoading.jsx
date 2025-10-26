import React from 'react'
import { Button } from '../ui/button'
import { Spinner } from "@/components/ui/spinner"
import {cn} from '@/lib/utils'
const ButtonLoading = ({type,text,loading,classname,onClick,...props}) => {
  return (
    <Button className={cn("",classname)}  onClick={onClick}  type={type} disabled={loading} {...props}>
      {loading && <Spinner />}
      {text}
    </Button>
  )
}

export default ButtonLoading