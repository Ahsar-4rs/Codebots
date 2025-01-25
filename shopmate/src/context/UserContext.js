import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const setUser = (data) => {
        console.log("Setting user data:", data); // Debugging line
        setUserData(data);
    };

    return (
        <UserContext.Provider value={{ userData, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;