import React from 'react'
import AmitDehasCV from '../../assets/AmitDehasCV.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={AmitDehasCV} download className='btn'>Download My CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA 