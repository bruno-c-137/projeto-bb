import "./style.scss";
import Banner1 from "../../assets/images/Banner-destaque1.png"
import ImgTriangulo from "../../assets/images/img-triangulo.png"
import Slice from "../../assets/images/slice.png"
import ImgMpe from "../../assets/images/mpe-da-sorte.png"
export default function BannerDestaque3() {
    return (
        <>
            <div className="relative flex  height-banner1 ">
                <div className="relative container triangulo-banner ">
                    <div className=" flex">
                        <div className="-top-20 sm:-top-48 md:-top-20 img-triangulo absolute w-full ">
                            <img className=" " src={ImgTriangulo} alt="" />

                        </div>
                        <div className="flex absolute items-center bola md:-top-28 -top-7">
                            <div className="md:mt-96 mt-40 absolute md:ml-80 ml-60 md:w-1/3 ">
                                <p className="__title mb-2">Chegou a oportunidade que faltava pra sua empresa.</p>

                                <p className="__sub-title"> Ganhe mais visibilidade
                                    e ainda concorra a</p>
                                <p className="__text mb-3">quatro prêmios</p>
                                <div><span className="__text-con"> de </span><span className="__text-content"> R$  50 mil</span></div>
                                <p className="__sub-title">para alavancar o seu negócio.</p>
                                <a className="entenda-melhor-button mt-5" href="#">Confira o regulamento</a>
                            </div>
                        </div>

                        <div className="absolute z-10 md:pt-16 pt-10 sm:pt-3 w-1/3 ml-52 sm:ml-72 md:ml-96 ">
                            <img className="" src={ImgMpe} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="content-img-mpe">

                    <div className=" img-mpe relative">
                        <div className="absolute text-circle">
                            <h1>oi</h1>
                        </div>

                    </div>
                </div> */}

                <div className="w-full h-full absolute banner-1 ">
                </div>



            </div>
        </>
    );
}