// Subscriptions.jsx
import React from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";

function Subscriptions() {
  const basicPlan = [
    "Access to limited content",
    "1 User profile",
    "Standard streaming quality",
    "Ad-supported",
    "Community support",
  ];

  const proPlan = [
    "Access to full content library",
    "3 User profiles",
    "HD streaming quality",
    "No ads",
    "Priority customer support",
    "Monthly exclusive content",
  ];

  const legendPlan = [
    "Access to full content library",
    "5 User profiles",
    "Ultra HD streaming quality",
    "No ads",
    "Priority customer support",
    "Monthly exclusive content",
    "Early access to new features",
    "Free merchandise",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16">
      <h1 className="text-6xl text-white font-bold mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 animate-pulse">
          VFLIX
        </span>{" "}
        PLANS
      </h1>
      
      <div className="w-full max-w-6xl px-4 py-2 flex flex-col md:flex-row gap-y-6 md:gap-x-8 justify-center ">
        <SubscriptionPlan
          planTitle={"Basic"}
          planDetails={basicPlan}
          planPrice={"Free"}
        />
        <SubscriptionPlan
          planTitle={"Pro"}
          planDetails={proPlan}
          planPrice={"Rs.399/quarter"}
        />
        <SubscriptionPlan
          planTitle={"Legend"}
          planDetails={legendPlan}
          planPrice={"Rs.499/quarter"}
        />
      </div>
    </div>
  );
}

export default Subscriptions;
