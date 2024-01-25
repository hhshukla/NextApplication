import ContactUs from "../components/contactUs/ContactUs"
import {ContactUsData} from "../components/contactUs/ContactUs.mock"
import ImageSlider from "../components/ImageSlider/ImageSlider"
import {ImageSliderData} from "../components/ImageSlider/ImageSlider.mock"
const contact = () => {
  return (
    <>
    <ImageSlider img={""} title={""} className={[]} {...ImageSliderData} />
    <ContactUs {...ContactUsData}/>
    </>
  )
}

export default contact