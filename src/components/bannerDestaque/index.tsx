import "./style.scss";
import Banner1 from "../../assets/images/Banner-destaque1.png"
import ImgTriangulo from "../../assets/images/img-triangulo.png"
import Slice from "../../assets/images/slice.png"
import ImgMpe from "../../assets/images/mpe-da-sorte.png"
export default function BannerDestaque3() {
    return (
        <>
            <div className="relative flex items-center  height-banner1 ">
                <img className="w-full h-full object-cover absolute  top-0" src={Banner1} alt="" />

                {/* <div className="relative triangulo-banner ">
                    <div className="flex">
                        <div>
                            <img src={ImgTriangulo} alt="" /></div>
                        <div>
                            <img src={ImgMpe} alt="" />
                        </div>
                    </div>
                </div> */}





            </div>
        </>
    );
}