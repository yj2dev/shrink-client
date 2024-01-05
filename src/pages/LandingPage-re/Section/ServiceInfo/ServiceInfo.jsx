import './ServiceInfo.css'
import Main_img from "../../image/iphone14_Mockup.png";


const ServiceInfo = () => {
    

  return (
    <section id="ServiceInfo" className="ServiceInfo--section">
        <div className="ServiceInfo">
            <div className="ServiceInfo--section--content--box">
                <div className="ServiceInfo--section--content">
                <div className="section--title">어쩌고저쩌고</div>
                <div className="ServiceInfo--section--title">
                    <span className="ServiceInfo--section-title--color">슈링크플래이션</span>
                </div>
                <p className="ServiceInfo--section-description">
                    속지말고 사세요 ~~~!~! ~~!~! ~! 
                    <br /> ~~~~~~~~~~~~~
                </p>
                </div>
            </div>
            <div className="ServiceInfo--section--img1">
                <img src={Main_img}  alt="ServiceInfo Section" className='img1'/>
            </div>
            <div className="ServiceInfo--section--img2">
                <img src={Main_img}  alt="ServiceInfo Section" className='img2'/>
            </div>
            <p className="text">
                    속지말고 사세요 ~~~!~! ~~!~! ~!~~
            </p>
            
        </div>
    </section>
    

  )
}


export default ServiceInfo
