import "./style.scss";
import ImgPeople from "../../assets/images/img-people.png"
import Circle1 from "../../assets/images/circolu-1.png"
import Circle2 from "../../assets/images/circle-2.png"
import Circle3 from "../../assets/images/circle-3.png"
export default function ComoParticipar() {
    return (
        <>
            <div className="md:relative md:flex md:mt-14 p-4 md:p-0">
                <div className="md:absolute md:w-1/3 z-10">
                    <img className="" src={ImgPeople} alt="" />
                </div>
                <div className="container">
                    <div className=" md:mt-12 z-10 md:ml-80">
                        <h1 className="info-title mb-7">Como <span className="underline-azul"> participar</span></h1>
                        <div className="">
                            <div className="md:flex ">
                                <div className=" relative md:w-1/3 md:mr-5  ">
                                    <div className="md:flex items-center">
                                        <div className="w-1/3">
                                            <img src={Circle1} alt="" /></div>
                                        <div className="w-2/3 ml-3 absolute  md:static circulo-border ">

                                        </div>
                                    </div>
                                    <div className=" pl-7 md:pl-0 mb-5 mt-2">
                                        <h2 className="como-participar-title">
                                            Cadastre
                                        </h2>
                                        <p className="text-base">
                                            <b> Cadastre gratuitamente</b> uma oferta da sua empresa no site da Minutrade.
                                        </p>
                                    </div>
                                </div>
                                <div className=" relative md:w-1/3 md:mr-5  ">
                                    <div className="md:flex items-center">
                                        <div className="w-1/3">
                                            <img src={Circle2} alt="" /></div>
                                        <div className="w-2/3 ml-3 absolute  md:static circulo-border ">

                                        </div>
                                    </div>
                                    <div className=" pl-7 md:pl-0 mb-5 mt-2">
                                        <h2 className="como-participar-title">
                                            Concorra
                                        </h2>
                                        <p className="text-base">
                                            Ao cadastrar uma oferta na MPE Week,<b> sua empresa ganha um cupom</b> pra concorrer à promoção.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="w-1/3">
                                        <img src={Circle3} alt="" />
                                    </div>
                                    <div className=" pl-7 md:pl-0 mb-5 mt-2">
                                        <h2 className="como-participar-title">
                                            torça
                                        </h2>
                                        <p className="text-base">
                                            Participe aqui de
                                            <b> quatro sorteios
                                                de R$ 50 mil</b> para alavancar o seu negócio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 md:mb-20 mb-10">
                                <a className="como-participar-button" href="http://www.mpeweek2021.com.br">Cadastre a sua empresa e concorra ao prêmio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-amarelo conteiner flex justify-center md:pt-20 pt-10 md:pb-20 pb-72">
                <div className="container">
                    <div className="md:ml-80 p-4 md:p-0">
                        <div>
                            <h1 className="title-main-amarelo">
                                Confira as quatro <span className="underline-azul-confira"> empresas sortudas</span> que levaram o prêmio de <span className="underline-azul-confira"> R$ 50 mil.</span>
                            </h1>
                            <div className="md:w-1/2 mt-10">
                                <p className="md:text-lg text-base mb-5">
                                    Ops! O sorteio só vai rolar em <b> 13/11 </b>
                                    e será apurado na tarde de <b> 15/11/2021.</b>



                                </p>
                                <p className="md:text-lg text-base"> Para conferir os ganhadores, <b> aguarde
                                    até dez dias úteis</b> após a apuração. ;)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}