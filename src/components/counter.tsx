"use client";

import React from "react";

import { Button } from "./ui/button";

import { countStore } from "@/stores/count.store";

export default function Counter() {
    const { count, increment, decrement } = countStore();

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-2xl font-bold">Zustand</p>
            <div className="flex items-center justify-center gap-4">
                <Button onClick={() => decrement()}>-</Button>
                <p>{count}</p>
                <Button onClick={() => increment()}>+</Button>
            </div>
        </div>
    );
}
