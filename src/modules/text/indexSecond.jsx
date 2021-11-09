import React, {useState} from 'react'


function TextSecond(props) {
    const {TextPage} = props
    const [text, setText] = useState(TextPage);
   
    return (<>
                <div className='text'>
                    <div className='H1'>{text.h4}</div>
                    <div className='H2'>{text.h5}</div>
                    <div className='H3'>{text.h6}</div>
                </div>
            </>
    )
}




export default TextSecond