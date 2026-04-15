import { useEffect, useState } from "react";
import StepContainer from "../ui/StepContainer.jsx";

export default function StepSuccess() {
  return (
    <StepContainer title="Booking confirmed">
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center animate-[scaleIn_0.3s_ease-out]">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium text-white">You're all set</p>
          <p className="text-sm text-white/60 max-w-xs">Your booking has been confirmed. A confirmation email will be sent shortly.</p>
        </div>

        <a
          href="/"
          className="
            inline-flex items-center justify-center
            px-5 py-2.5
            rounded-lg
            bg-white text-black
            text-sm font-medium
            hover:bg-white/90
            transition
          ">
          Back to home
        </a>
      </div>
    </StepContainer>
  );
}
