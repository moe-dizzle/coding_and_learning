// rename the file App.jsx
import { useState, lazy, Suspense } from "react";
// delete the React import
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🌀</h2>
            </div>
          }
        >
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </Suspense>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
