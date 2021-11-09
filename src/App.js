import TextPage from "./modules/source";
import Text from "./modules/text";
import Image from "./modules/image";
import Img from './modules/source/img.png'
import style from './modules/source/style.modules.css'

const App = () =>{
  return <>
        <Image Img={Img}/>
        <Text TextPage={TextPage} />
        </>
}

export default App;
