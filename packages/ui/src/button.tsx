import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;

}

export const Button = ({children, ...props}:ButtonProps)=>{
return(
    <button className={twMerge(clsx(buttonVariants({size:"lg",type:"primary"})))}{...props}>{children}</button>
)
}

const buttonVariants = cva("ui-rounded-full",{
variants:{
 type:{
   "primary":"ui-border-2 ui-border-black ui-bg-slate-600 ui-text-white",
   "secondary":"ui-border-2 ui-border-black ui-bg-white ui-text-green"
 }  ,
 size:{
   "sm":"ui-p-4",
   "lg":"ui-p-8"
 } 
}
})