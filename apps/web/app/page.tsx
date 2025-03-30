import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";



export default function Page() {
  return (
    <>
    <Button intent={"primary"} size={"small"}>Click ME</Button>
    <br />
    <Button intent={"secondary"} size={"medium"}>Click ME</Button>
    </>
  )
}
