import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardSale, NoRoutesMatch } from "../screens";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={<CardSale />} />
            <Route path="*" element={<NoRoutesMatch />} />
        </Routes>
    );
}

export { RoutesComp };