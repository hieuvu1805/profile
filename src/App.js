import React, { Suspense } from "react";
const Profile = React.lazy(() => import("./components/Profile"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}

export default App;
