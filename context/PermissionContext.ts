import React from 'react';
import {Permission} from "../Types/Permissions";

type PermissionContextType = {
    isAllowedTo: (permission: Permission) => boolean;
}

// Default behaviour for the Permission Provider Context
// i.e. if for whatever reason the consumer is used outside of a provider
// The permission will not be granted if no provider says otherwise
const defaultValue: PermissionContextType = {
    isAllowedTo: () => false
}

// Create the context
const PermissionContext = React.createContext<PermissionContextType>( defaultValue );

export default PermissionContext;