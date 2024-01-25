import ImageSlider from "../components/ImageSlider/ImageSlider"
import {ImageSliderData} from "../components/ImageSlider/ImageSlider.mock"
import CategoryList from "@/components/CategoryList/CategoryList"
import {CategoryListData} from "../components/CategoryList/CategoryList.mock"
import CubeSlide from "../components/CubeSlide/CubeSlide"
import {CubeSlideData} from "../components/CubeSlide/CubeSlide.mock"

const service = () => {
  return (
    <>
    <ImageSlider img={""} title={""} className={[]} {...ImageSliderData}/>
    <CategoryList {...CategoryListData}/>
    <CubeSlide title={""} imageSrc={""} {...CubeSlideData}/>
    </>
  )
}

export default service