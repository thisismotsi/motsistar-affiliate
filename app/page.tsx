"use client";

import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <HomePageClient />
    </Suspense>
  );
}
