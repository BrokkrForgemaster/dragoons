import { signOut } from '@/auth'
import Image from 'next/image'
import ModeToggle from './mode-toggle'
import NavLinks from './nav-links'
import { Button } from '../button'
import { PowerIcon } from 'lucide-react'

export default function SideNav() {
  return (
      <div className="flex flex-col h-full p-3">
        <div  className="flex justify-center items-center">
        <Image src="/HWiconnew.png" alt="logo" height={25} width={125} priority={false}/>
      </div>

      <div className="flex justify-center items-center flex-row grow space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:mt-2">
        <NavLinks />
        <div className="h-auto w-full grow rounded-md md:block"></div>

        <div className="flex md:flex-col">
          <ModeToggle />
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground"
            >
              <PowerIcon className="w-6 mr-2" />
              <div className="hidden md:block">Sign Out</div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}