import React from 'react';
import { FeatureToggles, Feature } from "@paralleldrive/react-feature-toggles";

import Feature1 from './components/Feature1'


// ? Array de features que irão aparecer
const mockDB = ["feature1"];

function App() {

  return (
    <>
      <div className="App">
        <FeatureToggles features={mockDB}>
          <Feature
            name="feature1"
            inactiveComponent={() => <div>Desativado</div>}
            activeComponent={Feature1}
          />
        </FeatureToggles>
      </div>
    </>
  );
}

export default App;
