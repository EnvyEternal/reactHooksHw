import React, {useState} from 'react'


function Image(props) {
    const {Img} = props
    const [image, setImage] = useState(Img)
    return (
        <div>
            <img src={image}/>
        </div>
    )
}

export default Image
