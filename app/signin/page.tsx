'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import signIn from '@/src/firebase/auth/signin';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { UserCredential } from 'firebase/auth';

const Page = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router: AppRouterInstance = useRouter();

  const handleForm = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { result, error }: { result: UserCredential | null; error: unknown } =
      await signIn(email, password);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push('/admin');
  };

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1 className='mt-60 mb-30'>Sign up</h1>
        <form onSubmit={handleForm} className='form'>
          <label htmlFor='email'>
            <p>Email</p>
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              required
              type='email'
              name='email'
              id='email'
              placeholder='example@mail.com'
            />
          </label>
          <label htmlFor='password'>
            <p>Password</p>
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              required
              type='password'
              name='password'
              id='password'
              placeholder='password'
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
