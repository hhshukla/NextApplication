import ImageSlider from "../components/ImageSlider/ImageSlider"
import {ImageSliderData} from "../components/ImageSlider/ImageSlider.mock"
import CubeSlide from "../components/CubeSlide/CubeSlide"
import {CubeSlideData} from "../components/CubeSlide/CubeSlide.mock"
const service = () => {
  return (
    <>
    <ImageSlider {...ImageSliderData}/>
    <CubeSlide title={""} imageSrc={""} {...CubeSlideData}/>
    </>
  )
}

export default service