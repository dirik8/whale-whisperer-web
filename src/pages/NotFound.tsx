
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
          <p className="text-2xl md:text-3xl text-white mb-8">Page Not Found</p>
          <p className="text-white/70 mb-12">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
