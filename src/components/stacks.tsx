import React from "react";
import Image from "next/image";
import SectionContainer from "./common/section-container";
import SectionTitle from "./common/section-title";
import { stacks } from "@/data/stacks";

const Stacks = () => {
  return (
    <SectionContainer>
      <SectionTitle>Stacks</SectionTitle>
      <div className="flex gap-6">
        {stacks.map((stack) => (
          <Image
            key={stack.alt}
            width="36"
            height="36"
            alt={stack.alt}
            src={stack.src}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Stacks;
