"use client";
import React from "react";
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        duration={2}
        separator=","
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
}
