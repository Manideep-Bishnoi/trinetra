import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import DashboardLayout from "@/components/DashboardLayout";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

// Placeholder component for pages under development
const ComingSoon = ({ page }: { page: string }) => (
  <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-primary/30">
        <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {page}
        </span>
      </div>
      <p className="text-muted-foreground">This page is under development</p>
      <p className="text-sm text-muted-foreground">Coming soon with full functionality</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Index />} />
          
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<ComingSoon page="Visitor Analytics" />} />
            <Route path="queue" element={<ComingSoon page="Queue & Slot Management" />} />
            <Route path="donations" element={<ComingSoon page="Donations & Finance" />} />
            <Route path="events" element={<ComingSoon page="Events & Festival Management" />} />
            <Route path="staff" element={<ComingSoon page="Staff & Resource Allocation" />} />
            <Route path="emergency" element={<ComingSoon page="Emergency & Safety" />} />
            <Route path="accessibility" element={<ComingSoon page="Accessibility Services" />} />
            <Route path="settings" element={<ComingSoon page="Settings" />} />
          </Route>

          {/* Catch all - redirect to landing */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
