
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

// Card brand logo components
const VisaLogo = ({ className = "w-8 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 16" fill="none">
    <path d="M18.5 2.5h3.2l-2 11h-3.2l2-11zm8.8 7.1c0-.8.7-1.2 2.1-1.4l1.7-.2c.7-.1 1.1-.3 1.1-.7 0-.6-.7-.9-1.8-.9-1 0-1.8.2-2.4.5l-.4-2.3c.7-.3 1.8-.6 3.1-.6 2.9 0 4.7 1.5 4.7 3.8v7.3h-2.7l-.2-1h-.1c-.6.8-1.6 1.2-2.8 1.2-1.8 0-3.3-1.1-3.3-3.1 0-2.6 2.3-3.6 5-3.6zm2.9 1.7c-1.4 0-2.3.5-2.3 1.3 0 .6.4 1 1.2 1 .9 0 1.5-.6 1.5-1.4v-.9h-.4zm7.8-6.8c.6 0 1.1.4 1.1 1s-.5 1-1.1 1-1.1-.4-1.1-1 .5-1 1.1-1zm-1.6 2.5h3.2l-2 11h-3.2l2-11zm8.1 0l-.3 1.8h.1c.7-1.4 1.8-2 3.2-2 .3 0 .6 0 .8.1l-.6 3c-.3-.1-.7-.1-1-.1-1.2 0-2.1.9-2.3 2.2l-1.1 6h-3.2l2-11h2.4z" fill="#1a1f71"/>
  </svg>
);

const MastercardLogo = ({ className = "w-8 h-5" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="w-3 h-3 bg-red-500 rounded-full opacity-90"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1.5 opacity-90"></div>
  </div>
);

const AmexLogo = ({ className = "w-8 h-4" }: { className?: string }) => (
  <div className={`${className} bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold`}>
    AMEX
  </div>
);

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Large Credit Card Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl transform rotate-12 opacity-60 shadow-2xl">
          {/* Card Details */}
          <div className="p-12 h-full flex flex-col justify-between text-black">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-2xl font-bold mb-2">1234</div>
                <div className="text-lg opacity-80">Name Surname</div>
              </div>
              <div className="flex gap-4 items-center">
                <VisaLogo className="w-12 h-6" />
                <MastercardLogo className="w-10 h-6" />
                <AmexLogo className="w-12 h-6" />
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold mb-2">5678</div>
                <div className="text-sm opacity-70">VALID THRU</div>
                <div className="text-lg font-semibold">MM/YY</div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold opacity-20">3466</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-white text-sm font-medium">APPLIED</div>
            <div className="w-8 h-6 bg-yellow-500 rounded flex items-center justify-center">
              <div className="text-black text-xs font-bold">AP</div>
            </div>
            <div className="text-white text-sm font-medium">PAYMENTS</div>
          </div>
        </div>

        {/* Login/Sign Up Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-black/20 rounded-full p-1">
            <button className="px-6 py-2 text-white font-medium border-b-2 border-white">
              LOGIN
            </button>
            <button className="px-6 py-2 text-gray-400 font-medium">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block text-white text-sm font-medium mb-2 text-center">
              USERNAME
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/90 border-0 rounded-full px-6 py-3 text-black placeholder-gray-500 focus:ring-2 focus:ring-white focus:bg-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="block text-white text-sm font-medium mb-2 text-center">
              PASSWORD
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/90 border-0 rounded-full px-6 py-3 text-black placeholder-gray-500 focus:ring-2 focus:ring-white focus:bg-white"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-white text-black font-semibold rounded-full py-3 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            SIGN IN
          </Button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <button className="text-white text-sm hover:underline">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
