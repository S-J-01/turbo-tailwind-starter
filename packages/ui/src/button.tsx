import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../util/cn"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
children:ReactNode;

}

export const Button = ({children,className,variant,size, ...props}:ButtonProps)=>{
return(
    <button className={cn(buttonVariants({variant,size,className}))}{...props}>{children}</button>
)
}

const buttonVariants = cva("ui-rounded-full",{
variants:{
 variant:{
   "primary":"ui-border-2 ui-border-black ui-bg-slate-600 ui-text-white",
   "secondary":"ui-border-2 ui-border-black ui-bg-white ui-text-green"
 }  ,
 size:{
   "sm":"ui-p-4",
   "lg":"ui-p-8"
 } 
}
})