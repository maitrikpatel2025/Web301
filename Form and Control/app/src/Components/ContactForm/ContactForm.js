import React,{useState} from 'react'; 

const ContactForm = (props) => {

    //states
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');

    //props
    const {title}=props;

    const handleSubmit =()=> {
        //console.log(name);
        //console.log(email);
        //console.log(message);
        const data ={
            name, // ES6 for name: name,
            email,
            message,
        }
        console.log(data);
    }
 return(
     <div className="ContactForm">
         <h3>{title}</h3>
            <div className="row">
                <div className="col-6">
                    <div className="from-group">
                        <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                id="name" 
                                className="form-control"
                                placeholder="Name"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                    }}/>
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-control"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    }}/>
                    </div>
                    <div className="from-group">
                        <label htmlFor="message">Message</label>
                            <textarea 
                                rows="5" 
                                id="message" 
                                className="form-control"
                                value={message}
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                    }}>
                            </textarea>
                    </div>
                    <div className="from-group">
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={handleSubmit}
                         >Submit
                        </button>
                    </div>
                </div>
             </div>
         </div>
 )
}
export default ContactForm;