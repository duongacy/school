"use client";

import React from "react";

// Simple providers wrapper for Tailwind-only project.
// Kept as a client component in case we need to add auth/context providers later.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
