import React from 'react'; 

const ContactForm = (props) => {
 const {title}=props;
 return(
     <div className="ContactForm">
         <h3>{title}</h3>
     </div>
 )
}
export default ContactForm;