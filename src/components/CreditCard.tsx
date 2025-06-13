
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
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white/60 rounded-full"></div>
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
