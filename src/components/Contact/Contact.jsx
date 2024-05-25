import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      {/* social icons */}
      <div className=''>
        <Link to={`https://github.com/Sam21sop`}>
          <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="github" height={40} width={40} />
        </Link>

        <Link to={`https://www.linkedin.com/in/sam21sop/`}>
          <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedIn" height={40} width={40} />
        </Link> 

        <Link to={`https://leetcode.com/u/Sam21sop/`}>
          <img src="https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1660571091/marketplaces/ckgbapf48v2r20b99pe4pio5o/listings/leetcode_fyzvpo.png" alt="linkedIn" height={40} width={40} />
        </Link>

        <Link to={`https://www.naukri.com/code360/profile/SOPAN`}>
          <img src="https://files.codingninjas.in/cnlogo-32511.png" alt="linkedIn" height={40} width={40} />
        </Link>
      </div>
    </>
  )
}

export default Contact