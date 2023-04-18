import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Fragment } from "react";
import { GlobalProvider } from "./Context/GlobalState";
import { publicRoutes } from "./Routes/index.jsx";
import { DefaultLayout } from "./Components/Layouts";


function App() {
  return (
    <div>

      <GlobalProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }

                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
