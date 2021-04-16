import React from "react";
import '../../../../styles/index.css'
const PersonDetails = ({ id, name, companyName, email }) => {
  return (
    <>
 <div className="col-3"> 
      <div className="card w-30">
  <div className="card-body autocat-cart-bottom-dist">
    <h6 className="card-title">{name}  
    
   <t1 className="autocat-number-icon" > 
   <center>{id}</center></t1>
</h6>
<hr /> 
<h5>Email</h5>
<p>{email}</p>

<h5>Company</h5>
<p>{companyName}</p>
   
  </div>
</div>
</div>
    </>
  );
};

export default PersonDetails;
