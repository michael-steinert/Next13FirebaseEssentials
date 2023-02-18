'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/src/context/AuthContext';

const Page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Redirecting the User to the Homepage
    if (user == null) router.push('/');
  }, [user]);

  return <h1>Only logged in Users can view this Page</h1>;
};

export default Page;
