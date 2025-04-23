"use client";

import dynamic from "next/dynamic";
import { AnimationLottieProps } from "@/Types/types";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
