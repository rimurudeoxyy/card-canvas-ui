
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: string;
  balance: string;
  creditLimit: string;
  status: string;
  lastTransaction: string;
  issueDate: string;
  gradient: string;
}

// Card brand logo components
const VisaLogo = () => (
  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" className="text-white">
    <path d="M18.5 2.5h3.2l-2 11h-3.2l2-11zm8.8 7.1c0-.8.7-1.2 2.1-1.4l1.7-.2c.7-.1 1.1-.3 1.1-.7 0-.6-.7-.9-1.8-.9-1 0-1.8.2-2.4.5l-.4-2.3c.7-.3 1.8-.6 3.1-.6 2.9 0 4.7 1.5 4.7 3.8v7.3h-2.7l-.2-1h-.1c-.6.8-1.6 1.2-2.8 1.2-1.8 0-3.3-1.1-3.3-3.1 0-2.6 2.3-3.6 5-3.6zm2.9 1.7c-1.4 0-2.3.5-2.3 1.3 0 .6.4 1 1.2 1 .9 0 1.5-.6 1.5-1.4v-.9h-.4zm7.8-6.8c.6 0 1.1.4 1.1 1s-.5 1-1.1 1-1.1-.4-1.1-1 .5-1 1.1-1zm-1.6 2.5h3.2l-2 11h-3.2l2-11zm8.1 0l-.3 1.8h.1c.7-1.4 1.8-2 3.2-2 .3 0 .6 0 .8.1l-.6 3c-.3-.1-.7-.1-1-.1-1.2 0-2.1.9-2.3 2.2l-1.1 6h-3.2l2-11h2.4z" fill="currentColor"/>
  </svg>
);

const MastercardLogo = () => (
  <div className="flex items-center">
    <div className="w-6 h-6 bg-red-500 rounded-full opacity-90"></div>
    <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-3 opacity-90"></div>
  </div>
);

const AmexLogo = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-white">
    <rect width="32" height="16" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <text x="16" y="11" textAnchor="middle" className="text-xs font-bold fill-current">AMEX</text>
  </svg>
);

const DiscoverLogo = () => (
  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" className="text-white">
    <rect width="48" height="16" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <text x="24" y="11" textAnchor="middle" className="text-xs font-bold fill-current">DISCOVER</text>
  </svg>
);

const getCardLogo = (cardType: string) => {
  const type = cardType.toLowerCase();
  if (type.includes('visa')) return <VisaLogo />;
  if (type.includes('mastercard')) return <MastercardLogo />;
  if (type.includes('american express') || type.includes('amex')) return <AmexLogo />;
  if (type.includes('discover')) return <DiscoverLogo />;
  return null;
};

const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardHolder,
  expiryDate,
  cardType,
  balance,
  creditLimit,
  status,
  lastTransaction,
  issueDate,
  gradient
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Credit Card */}
      <Card className={`w-80 h-48 ${gradient} border-0 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-105`}>
        <CardContent className="p-6 h-full flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-90">{cardType}</p>
              <p className="text-xs opacity-75">****{cardNumber.slice(-4)}</p>
            </div>
            <div className="flex items-center">
              {getCardLogo(cardType)}
            </div>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-1">{cardHolder}</p>
            <p className="text-sm opacity-90">Expires: {expiryDate}</p>
          </div>
        </CardContent>
      </Card>

      {/* Hover Details Panel */}
      {isHovered && (
        <Card className="absolute top-0 left-0 w-80 bg-card/95 backdrop-blur-sm border shadow-2xl z-10 animate-fade-in">
          <CardContent className="p-6 space-y-4">
            <div className="border-b border-border pb-3">
              <h3 className="font-semibold text-lg">{cardHolder}</h3>
              <p className="text-sm text-muted-foreground">Card Details</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Card Number</p>
                <p className="font-medium">****{cardNumber.slice(-4)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Card Type</p>
                <p className="font-medium">{cardType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {status}
                </span>
              </div>
              <div>
                <p className="text-muted-foreground">Expiry</p>
                <p className="font-medium">{expiryDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Balance</p>
                <p className="font-medium">${balance}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Credit Limit</p>
                <p className="font-medium">${creditLimit}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Issue Date</p>
                <p className="font-medium">{issueDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Transaction</p>
                <p className="font-medium">{lastTransaction}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreditCard;
