import React from 'react';

const About =(props) => {
const {about} = props;
const onClick = () => {}
  return(
    <section className="my-3">
     <p>{about}</p>
     <button className="ui icon facebook"  onClick={onClick}>
       <a href="www.facebook.com">learn more</a></button>
    </section>
  );

}
export default About;