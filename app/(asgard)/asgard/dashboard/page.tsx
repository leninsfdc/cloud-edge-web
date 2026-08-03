import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page