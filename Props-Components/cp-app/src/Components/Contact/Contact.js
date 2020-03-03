import React from 'react';

const Contact =(props) => {
  const {email,phone} = props;
  return(
    <section className="my-3">
          <p>
            <span className="d-inline-block mr-1">Email:</span>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <span className="d-inline-block mr-1">Phone:</span>
             <a href={`phoneto:${phone}`}>{phone}</a>
          </p>
        </section>
  );

}
export default Contact;
