import React from 'react';
import { useSelector } from 'react-redux';
import PermissionProvider from '../context/PermissionProvider';
import RestrictPermissions from '../context/RestrictPermissions';
import { RootState } from '../store';

type Props = {};

const Tests = (props: Props) => {
  //   const user = useSelector((state: RootState) => state.user.value)
  //   const permission = user.role === 'Admin'? user.role : 'Auditor'

  // return (
  //     <div>
  //     <PermissionProvider permissions={[user.role]}>
  //         <div>
  //         <RestrictPermissions to={'Admin'}>
  //             <h3>Lorem Ipsum Jaggen Diur</h3>
  //           </RestrictPermissions>
  //         <RestrictPermissions to='Admin'>
  //             <h5>Create Test</h5>
  //             <h5>Delete Test</h5>
  //         </RestrictPermissions>
  //         </div>
  //         <RestrictPermissions to={permission}>
  //             <h3>Lorem Ipsum Jaggen Diur</h3>
  //               <RestrictPermissions to='Admin'>
  //                   <h5>Create Test</h5>
  //                   <h5>Delete Test</h5>
  //               </RestrictPermissions>
  //       </RestrictPermissions>
  //       <RestrictPermissions to={permission}>
  //             <h3>Lorem Ipsum Jaggen Diur</h3>
  //             <RestrictPermissions to='Admin'>
  //                   <h5>Create Test</h5>
  //                   <h5>Delete Test</h5>
  //           </RestrictPermissions>
  //         </RestrictPermissions>
  //     </PermissionProvider>
  //     </div>
  // );
  return (
    <div>
      
    </div>
  )
};

export default Tests;
