import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/app/components/button'
import { ArrowRightIcon } from 'lucide-react'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to House Wolf Dashboard.</strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        </div>
      </div>
    </main>
  )
}