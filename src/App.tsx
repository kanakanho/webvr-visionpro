import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useState } from "react";
import "./App.css";

const store = createXRStore();

function App() {
  const [red, setRed] = useState(true);
  const [isVR, setIsVR] = useState(false);

  return (
    <>
      {!isVR && (
        <div className="buttonContainer">
          <button
            type="button"
            onClick={() => {
              store.enterAR();
              setIsVR(true);
            }}
          >
            Enter VR
          </button>
        </div>
      )}
      <Canvas>
        <XR store={store}>
          <mesh
            pointerEventsType={{ deny: "grab" }}
            onClick={() => setRed(!red)}
            position={[0, 1, -1]}
          >
            <boxGeometry />
            <meshBasicMaterial color={red ? "red" : "blue"} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
