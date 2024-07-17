import CubeSlide from "../components/CubeSlide/CubeSlide"
import {CubeSlideData} from "../components/CubeSlide/CubeSlide.mock"
import {CreativeEffectSliderData} from "../components/CreativeEffectSlider/CreativeEffectSlider.mock"
import CreativeEffectSlider from "../components/CreativeEffectSlider/CreativeEffectSlider"
const service = () => {
  return (
    <>
    <CubeSlide title={""} imageSrc={""} {...CubeSlideData}/>
    <CreativeEffectSlider imageSrc={""} {...CreativeEffectSliderData}/>
    </>
  )
}

export default service