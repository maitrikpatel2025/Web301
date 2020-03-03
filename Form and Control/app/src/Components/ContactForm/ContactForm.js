import React,{useState} from 'react'; 

const ContactForm = (props) => {
    const[name,setName] = useState('');
    
 const {title}=props;
 return(
     <div className="ContactForm">
         <h3>{title}</h3>
         <div className="row">
             <div className="col-6">
             <div className="from-group">
             <label htmlFor="name">Name</label>
             <input type="text" id="name" className="form-control"/>
             </div>
             <div className="from-group">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" className="form-control"/>
             </div>
             <div className="from-group">
             <label htmlFor="message">Message</label>
             <textarea rows="5" id="message" className="form-control"> </textarea>
             </div>
             <div className="from-group">
            <button type="button" className="btn btn-success">Submit</button>
             </div>
             </div>
         </div>
     </div>
 )
}
export default ContactForm;