import React from "react";
import StudioLights from "./three/StudioLights";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";

import React, { useRef }    from 'react'

const ModelScroll = () => {
    const groupRef = useRef(null);
  return (
    <group ref ={groupRef}>


        
    </group>

  )
}

export default ModelScroll




const Features = () => {
  return (
    <section id="features">
        <h2></h2>
      {/* Features content goes here */}


        {/* Canvas to display 3d model */}
      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />

        {/* Render 3d model */}

        {/* class absolute because its going to show outside of other elements on the screen */}
        <div className="absolute inset-0">
            {features.map((feature) => (
                <div className={clsx('box', 'box${index +1}', feature.styles)}>{featur.text}</div>
            ))}
        </div>

      </Canvas>
    </section>
  );
};

export default Features;