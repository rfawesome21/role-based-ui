import React, { useContext } from 'react';
import { Permission } from '../Types/Permissions';
import PermissionContext from './PermissionContext';

type Props = {
    to : Permission
};


const RestrictPermissions : React.FunctionComponent<Props> = ({to, children}) => {
    const {isAllowedTo} = useContext(PermissionContext);

    if(isAllowedTo(to)){
        return <>{children}</>
    }

    return null
}

export default RestrictPermissions;
