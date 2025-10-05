import { Users, Ticket, IndianRupee, UserCog, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    name: "Today's Visitors",
    value: "12,458",
    change: "+2,340",
    trend: "up",
    subtitle: "vs actual: 12,100",
    icon: Users,
    color: "text-primary",
  },
  {
    name: "Active Bookings",
    value: "324",
    change: "156 available",
    trend: "neutral",
    subtitle: "Out of 480 slots",
    icon: Ticket,
    color: "text-secondary",
  },
  {
    name: "Today's Donations",
    value: "₹8.5L",
    change: "+18%",
    trend: "up",
    subtitle: "vs yesterday",
    icon: IndianRupee,
    color: "text-accent",
  },
  {
    name: "Staff on Duty",
    value: "42",
    change: "8 zones",
    trend: "neutral",
    subtitle: "Across temple premises",
    icon: UserCog,
    color: "text-primary",
  },
];

const recentAlerts = [
  {
    id: 1,
    type: "warning",
    title: "Crowd nearing capacity",
    description: "Zone A (Main Darshan) at 85% capacity",
    time: "5 mins ago",
  },
  {
    id: 2,
    type: "info",
    title: "Medical assistance requested",
    description: "Gate 2 - Staff dispatched",
    time: "12 mins ago",
  },
  {
    id: 3,
    type: "success",
    title: "Event setup completed",
    description: "Maha Shivaratri preparations ready",
    time: "1 hour ago",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-playfair font-bold text-foreground">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground mt-1">
          Real-time insights and temple management at a glance
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.name}
            className="border-primary/10 hover:shadow-divine transition-shadow bg-gradient-to-br from-card to-card/50"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  {stat.trend === "up" && (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  )}
                  {stat.trend === "down" && (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === "up"
                        ? "text-green-500"
                        : stat.trend === "down"
                        ? "text-red-500"
                        : "text-muted-foreground"
                    }
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crowd Prediction Chart Placeholder */}
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg font-playfair">
              Crowd Prediction (Next 7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
              <div className="text-center text-muted-foreground">
                <BarChart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Chart visualization coming soon</p>
                <p className="text-xs mt-1">Line chart with AI predictions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation Trends Placeholder */}
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg font-playfair">
              Donation Trends (Last 30 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-primary/10">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Chart visualization coming soon</p>
                <p className="text-xs mt-1">Bar/Line chart with filters</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Alerts */}
        <Card className="lg:col-span-2 border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg font-playfair flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 bg-gradient-to-r from-card to-transparent hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${
                      alert.type === "warning"
                        ? "bg-yellow-500"
                        : alert.type === "info"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{alert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {alert.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg font-playfair">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Manage Events
            </Button>
            <Button className="w-full justify-start" variant="outline">
              Deploy Staff
            </Button>
            <Button className="w-full justify-start" variant="outline">
              View Live Crowd Map
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Placeholder icon component
const BarChart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
