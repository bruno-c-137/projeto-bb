import "./style.scss";
import BannerDestaque1 from "../../components/bannerDestaque";
import ComoParticipar from "../../components/comoParticipar";
import EntendaMelhor from "../../components/entendaMelhor";
import Form from "../../components/form";
import ImgTrianguloMain from "../../assets/images/triangulo-main.png"
import { ReactComponent as IconCasa } from "../../assets/images/icon-casa.svg"
import { ReactComponent as IconSelo } from "../../assets/images/icon-selo.svg"
import { ReactComponent as IconPresente } from "../../assets/images/icon-presente.svg"
export default function WeekDaSorte() {
    return (
        <>
            <BannerDestaque1 />
            <div className="container">
                <div className="relative flex justify-between">
                    <div className=" flex-1 md:mt-44 p-4 md:p-0">

                        <h1 className="w-4/5 info-title">A sua empresa só tem a ganhar!</h1>
                        <div className="md:flex mt-20  ">
                            <div className="md:w-1/3 md:mr-16 mb-7 md:mb-0">
                                <IconCasa />
                                <p className="text-base mt-3">Se você é <b> micro ou pequeno
                                    empresário</b> e tem <b> conta PJ no BB,</b> já pode participar.</p>

                            </div>
                            <div className="md:w-1/3 md:mr-16 mb-7 md:mb-0">
                                <IconSelo />
                                <p className="text-base mt-2">Exponha a sua oferta na vitrine virtual da <b> Minutrade. </b>
                                    Aproveite, pois <b> cliente BB tem mais destaque.</b></p>

                            </div>
                            <div className="md:w-1/3  ">
                                <IconPresente />
                                <p className="text-base mt-3">Desfrute das <b> promoções e condições exclusivas que o BB oferece </b>aos clientes participantes.</p>

                            </div>
                        </div>



                    </div>

                    <div className="absolute w-1/2 md:-mr-40 -mr-16 right-0">
                        <img src={ImgTrianguloMain} alt="" />

                    </div>

                </div>
            </div>
            <ComoParticipar />
            <EntendaMelhor />
            <Form />
        </>

    );
}