import { Bell, User, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import himudaLogo from "@/assets/himuda-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-background to-accent/5 border-b shadow-lg backdrop-blur-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-2.5">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-bold tracking-wide">User Dashboard Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-accent transition-colors text-xs font-medium">हिंदी</button>
            <span className="text-xs opacity-50">|</span>
            <button className="hover:text-accent transition-colors text-xs font-medium">English</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="p-1.5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                <img 
                  src={himudaLogo} 
                  alt="HIMUDA Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">HIMUDA</h1>
                <p className="text-xs text-foreground font-semibold">User Dashboard Portal</p>
                <p className="text-[10px] text-muted-foreground">Government of Himachal Pradesh</p>
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-72 bg-accent/5 border-accent/20 focus:border-primary"
                />
              </div>
              
              <Button variant="ghost" size="icon" className="relative hover:bg-accent/10 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full animate-pulse" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-accent/10 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
