import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Section, Article } from '@/components/semantics/index';

interface SuccessProps {
  email: string;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Success: React.FC<SuccessProps> = ({ email, setSuccess }) => (
  <>
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <Section className="bg-white pt-20 px-4 pb-8 flex flex-col justify-between h-screen md:h-auto md:w-[500px] md:rounded-2xl md:p-12">
        <Article>
          <IoIosCheckmarkCircle height={60} width={60} className="mb-8" />

          <h2 className="mb-8 text-4xl font-bold text-slate-900 lg:text-5xl">Thanks for subscribing!</h2>
          <p className="mb-8">
            A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside
            to confirm your subscription.
          </p>
        </Article>

        <button
          onClick={() => setSuccess(false)}
          style={{
            backgroundColor: 'hsl(234, 29%, 20%)',
          }}
          className="w-full py-3 font-bold text-white rounded-lg p-x4 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
        >
          Dismiss message
        </button>
      </Section>
    </div>
  </>
);
