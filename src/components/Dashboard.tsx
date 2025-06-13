
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Button } from '@/components/ui/button';
import { Sun, Moon, LogOut } from 'lucide-react';
import CreditCard from './CreditCard';

interface DashboardProps {
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, isDarkMode, toggleDarkMode }) => {
  const sampleCards = [
    {
      cardNumber: '4532123456789012',
      cardHolder: 'John Smith',
      expiryDate: '12/26',
      cardType: 'Visa Platinum',
      balance: '2,450.00',
      creditLimit: '10,000.00',
      status: 'Active',
      lastTransaction: '2024-01-15',
      issueDate: '2022-03-10',
      gradient: 'card-gradient'
    },
    {
      cardNumber: '5432109876543210',
      cardHolder: 'Sarah Johnson',
      expiryDate: '08/25',
      cardType: 'Mastercard Gold',
      balance: '1,200.00',
      creditLimit: '5,000.00',
      status: 'Active',
      lastTransaction: '2024-01-14',
      issueDate: '2021-08-15',
      gradient: 'gold-gradient'
    },
    {
      cardNumber: '3782822463100005',
      cardHolder: 'Michael Davis',
      expiryDate: '03/27',
      cardType: 'American Express',
      balance: '890.50',
      creditLimit: '15,000.00',
      status: 'Active',
      lastTransaction: '2024-01-13',
      issueDate: '2023-01-20',
      gradient: 'banking-gradient'
    },
    {
      cardNumber: '6011111111111117',
      cardHolder: 'Emily Wilson',
      expiryDate: '11/24',
      cardType: 'Discover',
      balance: '0.00',
      creditLimit: '3,000.00',
      status: 'Blocked',
      lastTransaction: '2023-12-28',
      issueDate: '2020-11-05',
      gradient: 'card-gradient'
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background transition-colors duration-300">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground" />
              <div>
                <h1 className="text-2xl font-bold">Card Management Dashboard</h1>
                <p className="text-muted-foreground">Manage and monitor your card portfolio</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="transition-all duration-200 hover:scale-105"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="destructive"
                onClick={onLogout}
                className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 p-6 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border animate-fade-in">
                <h3 className="text-sm font-medium text-muted-foreground">Total Cards</h3>
                <p className="text-3xl font-bold text-primary">1,234</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border animate-fade-in delay-100">
                <h3 className="text-sm font-medium text-muted-foreground">Active Cards</h3>
                <p className="text-3xl font-bold text-primary">1,156</p>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border animate-fade-in delay-200">
                <h3 className="text-sm font-medium text-muted-foreground">Total Balance</h3>
                <p className="text-3xl font-bold text-primary">$2.4M</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border animate-fade-in delay-300">
                <h3 className="text-sm font-medium text-muted-foreground">Transactions</h3>
                <p className="text-3xl font-bold text-primary">45,678</p>
                <p className="text-sm text-green-600">+22% from last month</p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Cards</h2>
                <Button variant="outline" className="transition-all duration-200 hover:scale-105">
                  View All Cards
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {sampleCards.map((card, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CreditCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
