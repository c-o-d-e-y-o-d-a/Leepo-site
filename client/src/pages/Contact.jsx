import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='cont mt-40 '>
      <div className="contact-us border-2 border-orange-800">
  <form action="#">
    <label htmlFor="customerName">
      NAME <em>*</em>
    </label>
    <input type="text" id="customerName" name="customerName" required />
    
    <label htmlFor="customerEmail">
      EMAIL <em>*</em>
    </label>
    <input type="email" id="customerEmail" name="customerEmail" required />
    
    <label htmlFor="customerPhone">PHONE</label>
    <input type="tel" id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    
    <label htmlFor="orderNumber">ORDER NUMBER</label>
    <input type="text" id="orderNumber" name="orderNumber" />
    
    <label htmlFor="customerNote">
      YOUR MESSAGE <em>*</em>
    </label>
    <textarea rows="4" id="customerNote" name="customerNote" required />
    
    <h3>Please provide all the information about your issue you can.</h3>
    
    <label htmlFor="spamProtection">
      SPAM PROTECTION <em>*</em> 
      <span>    What day comes before July 11th?</span>
    </label>
    <input type="text" id="spamProtection" name="spamProtection" />
    
    <button id="customerOrder">SUBMIT</button>
  </form>
</div>

    </section>
    </div>
  )
}

export default Contact
