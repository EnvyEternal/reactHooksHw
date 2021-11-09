import React, {useState} from 'react'


function Text(props) {
    const {TextPage} = props
    const [text, setText] = useState(TextPage);
   
    return (<>
                <div className='text'>
                    <div className='H1'>{text.h1}</div>
                    <div className='H2'>{text.h2}</div>
                    <div className='H3'>{text.h3}</div>
                </div>
            </>
    )
}

export default Text
