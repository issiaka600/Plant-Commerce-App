import React from 'react'
import './footer_style.css'
function Footer() {
  return (
    <div className='footer-container'>
        <hr/>
        <div>Pour les passionné·e·s</div>
        <div>Laissez-nous votre mail :</div>
        <form>
            <input type='email' required placeholder='entrez votre email'/>
        </form>
    </div>
  )
}

export default Footer