"use client";

import React, { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  logoUrl: string;
  href: string;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/febf2421-4a9a-42d6-871d-ff4f9518021c_1600w.png",
  backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
}) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <section className="w-full h-full min-h-screen relative z-0">
        <img
          src={backgroundImageUrl}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
        />
      </section>
    </div>
  );
};

export default ResponsiveHeroBanner;
