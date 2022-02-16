import React from 'react';
import { useSelector } from 'react-redux';
import PermissionProvider from '../context/PermissionProvider';
import RestrictPermissions from '../context/RestrictPermissions';
import { RootState } from '../store';

type Props = {};

const EvidenceBank = (props: Props) => {

    // const user = useSelector((state: RootState) => state.user.value)
    // const permission = user.role === 'Admin'? user.role : 'Auditor'
    // return (
    //         <PermissionProvider permissions={[user.role]}>
    //             <h1>Evidence List</h1>
    //       <div>
    //       <RestrictPermissions to={'Admin'}>
    //           <h3>Lorem Ipsum Jaggen Diur</h3>
    //         </RestrictPermissions>
    //       <RestrictPermissions to='Admin'>
    //           <h5>Upload Evidence</h5>
    //       </RestrictPermissions>
    //       </div>
    //       <RestrictPermissions to={permission}>
    //           <h3>Lorem Ipsum Jaggen Diur</h3>
    //             <RestrictPermissions to='Admin'>
    //                 <h5>Upload Evidence</h5>
    //             </RestrictPermissions>
    //     </RestrictPermissions>
    //     <RestrictPermissions to={permission}>
    //           <h3>Lorem Ipsum Jaggen Diur</h3>
    //           <RestrictPermissions to='Admin'>
    //                 <h5>Upload Evidence</h5>
    //         </RestrictPermissions>
    //       </RestrictPermissions>
    //   </PermissionProvider>
    // );
    return (
      <div>
        
      </div>
    )
};

export default EvidenceBank;
