import React, { useState, useEffect} from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Initial({ onLoadingComplete }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete;
        },1000);
        return () => clearTimeout(timer);
    }, []);
}