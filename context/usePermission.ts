import {useContext} from 'react';
import PermissionContext from "./PermissionContext";
import {Permission} from "../Types/Permissions";

const usePermission = (permission: Permission) => {
    const {isAllowedTo} = useContext(PermissionContext);
    return isAllowedTo(permission);
}

export default usePermission;