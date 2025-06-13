
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { 
  Home, Users, FileText, Calendar, Cards, 
  Link, Settings, MapPin, CreditCard, Building,
  Shield, Key, Search, TrendingUp, Printer,
  Lock, User, Target, Server, Zap
} from 'lucide-react';

const menuItems = [
  { title: 'Home', icon: Home, url: '#' },
  { title: 'Issuer', icon: Building, url: '#' },
  { title: 'Card Program', icon: Cards, url: '#' },
  { title: 'Card Batches', icon: FileText, url: '#' },
  { title: 'Schedule Jobs', icon: Calendar, url: '#' },
  { title: 'Cards', icon: CreditCard, url: '#' },
  { title: 'Account Product', icon: Target, url: '#' },
  { title: 'Accounts', icon: Users, url: '#' },
  { title: 'Limit Profile', icon: Shield, url: '#' },
  { title: 'Link Card to Account', icon: Link, url: '#' },
  { title: 'Link Account to Customers', icon: Users, url: '#' },
  { title: 'Geographic Location', icon: MapPin, url: '#' },
  { title: 'Transactions', icon: TrendingUp, url: '#' },
  { title: 'Merchant Category', icon: Building, url: '#' },
  { title: 'Statement', icon: FileText, url: '#' },
  { title: 'Users', icon: User, url: '#' },
  { title: 'Business Risk Profile', icon: Shield, url: '#' },
  { title: 'HSM Configuration', icon: Server, url: '#' },
  { title: 'Keys', icon: Key, url: '#' },
  { title: 'Trace Viewer Cards', icon: Search, url: '#' },
  { title: 'Trace Viewer Transactions', icon: Search, url: '#' },
  { title: 'Transaction Flow', icon: Zap, url: '#' },
  { title: 'Fee Management', icon: TrendingUp, url: '#' },
  { title: 'Reports', icon: FileText, url: '#' },
  { title: 'Emboss File', icon: Printer, url: '#' },
  { title: 'Decrypt File', icon: Lock, url: '#' },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50">
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs uppercase tracking-wider font-semibold mb-4">
            Card Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="transition-all duration-200 hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground rounded-lg group"
                  >
                    <a 
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 text-sm"
                    >
                      <item.icon className="h-4 w-4 transition-colors duration-200 group-hover:text-primary" />
                      <span className="transition-colors duration-200">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
