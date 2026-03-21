"use client";

import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock user data - replace with actual data from authentication later
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground mt-2">
              Manage your account information
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-card border border-border rounded-lg shadow-sm p-8 space-y-6">
            {/* User Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{mockUser.name}</h2>
                <p className="text-sm text-muted-foreground">Account Owner</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Profile Information */}
            <div className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Full Name
                </label>
                <div className="px-4 py-3 bg-muted/50 rounded-md text-foreground border border-border">
                  {mockUser.name}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email Address
                </label>
                <div className="px-4 py-3 bg-muted/50 rounded-md text-foreground border border-border">
                  {mockUser.email}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button variant="default">Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground text-center">
            <p>
              This profile page uses mock data. It will be updated with real
              authentication data later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
