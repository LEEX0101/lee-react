
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
   
      <div className="rightSide">
  
        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="" type="email" />
          <label htmlFor="message">Describe combat sports experience:</label>
          <textarea
            rows={6} 
            placeholder=""
            name="message"
            required
          ></textarea>
          <label htmlFor="message">Add social media links here:</label>
          <textarea
            rows={6} 
            placeholder=""
            name="message"
            required
          ></textarea>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;