import TextPage from "./modules/source";

import Text from "./modules/text";
import TextSecond from "./modules/text/indexSecond";
import Image from "./modules/image";
import Img from './modules/source/img.png'
import Img2 from './modules/source/img2.png'
import style from './modules/source/style.modules.css'

const App = () =>{
  return <>
          <div className='block'>
            <Image Img={Img}/>
            <Text TextPage={TextPage} />
          </div>
          <div className='block'>
            <TextSecond TextPage={TextPage} />
            <Image Img={Img2}/>
          </div>
        </>
}

export default App;
