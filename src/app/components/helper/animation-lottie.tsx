"use client";

import dynamic from "next/dynamic";

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationLottieProps {
  animationPath: object; // JSON object for the animation data.
  width?: string | number; // Optional width prop for customization.
}

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: AnimationLottieProps) => {
  return (
    <div style={{ width }}>
      <Lottie
        animationData={animationPath}
        loop
        autoplay
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default AnimationLottie;
