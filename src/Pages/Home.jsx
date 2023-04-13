import BasicButtons from "../components/BasicButtons";
import FloatButton from "../components/FloatButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import News from "../components/News";
import Release from "../components/Release";
import Slider from "../components/Slider";
import Video from "../components/Video";
import VirtualPlatforms from "../components/VirtualPlatforms";

const Home = () => {
    return(
        <>
        <Slider/>
        <BasicButtons/>
        <FloatButton/>
        <Release/>
        <News/>
        <Video/>
        <VirtualPlatforms/> 
        </>
      
    )
    
}
export default Home;