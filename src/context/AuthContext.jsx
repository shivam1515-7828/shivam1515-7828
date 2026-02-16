'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check local storage for user login status on mount
        const storedUser = localStorage.getItem('codebakers_user');
        if (storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // Simulate API call
        const userWithBookings = { ...userData, bookings: userData.bookings || [] };
        setUser(userWithBookings);
        localStorage.setItem('codebakers_user', JSON.stringify(userWithBookings));
        router.push('/resume-builder');
    };

    const signup = (userData) => {
        // Simulate API call
        const userWithBookings = { ...userData, bookings: [] };
        setUser(userWithBookings);
        localStorage.setItem('codebakers_user', JSON.stringify(userWithBookings));
        router.push('/resume-builder');
    };

    const bookInternship = (slug) => {
        if (!user) return false;

        const updatedBookings = [...(user.bookings || []), slug];
        // Remove duplicates
        const uniqueBookings = [...new Set(updatedBookings)];

        const updatedUser = { ...user, bookings: uniqueBookings };
        setUser(updatedUser);
        localStorage.setItem('codebakers_user', JSON.stringify(updatedUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('codebakers_user');
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading, bookInternship }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
