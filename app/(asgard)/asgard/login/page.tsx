import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import LoginContainer from '@/containers/asgard/LoginContainer'
import React from 'react'

const page = () => {
  return (
    <LoginContainer />
  )
}

export default page