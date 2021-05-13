import React from 'react';
import CustomersServiceContext from '../customers-service-context';

const WithService = () => (Wrapped) => { 
  return (props) => {  
    return (
      <CustomersServiceContext.Consumer>
        {
          (Service) => {
            return <Wrapped {...props} Service = {Service}/>
          }
        }
      </CustomersServiceContext.Consumer>
    )
  }
};

export default WithService;