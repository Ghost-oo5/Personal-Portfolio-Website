"use client";

import Lottie from "lottie-react";
interface AnimationLottieProps {
  animationPath: object; // Specify the type of your animation data (e.g., JSON object).
  width?: string | number; // Optional prop with either a string or number type.
}
const AnimationLottie = ({ animationPath }:AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;