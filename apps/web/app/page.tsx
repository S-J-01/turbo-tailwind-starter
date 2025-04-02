import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";



export default function Page() {
  return (
    <>
   <Button onClick={()=>alert('hello')} >hello</Button>
    </>
  )
}
