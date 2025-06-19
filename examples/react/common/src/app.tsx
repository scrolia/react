import type * as React from "react";

import { Scrollbar } from "@scrolia/react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import Page1 from "#/pages";
import Page2 from "#/pages/page2";

import "#/styles/index.css";
import "@scrolia/react/dist/index.css";

const App = (): React.JSX.Element => {
    // content
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <Scrollbar page>
                                <Outlet />
                            </Scrollbar>
                        }
                    >
                        <Route
                            index
                            element={<Page1 />}
                        />
                        <Route
                            path="/page2"
                            element={<Page2 />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
