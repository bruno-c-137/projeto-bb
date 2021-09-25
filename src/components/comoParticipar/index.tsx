import "./style.scss";
import ImgPeople from "../../assets/images/img-people.png"
import Circolu1 from "../../assets/images/circolu-1.png"
export default function ComoParticipar() {
    return (
        <>
            <div className="md:relative md:flex md:mt-14 p-4 md:p-0">

                <div className="md:absolute md:w-1/3 z-10">
                    <img className="" src={ImgPeople} alt="" />

                </div>
                <div className="container">
                    <div className=" mt-12 z-10 md:ml-80">
                        <h1 className="info-title mb-7">Como participar</h1>
                        <div className="">
                            <div className="md:flex ">
                                <div className="md:w-1/3 md:mr-5  ">
                                    <div className="md:flex items-center">
                                        <div className="w-1/3">
                                            <img src={Circolu1} alt="" /></div>
                                        <div className="w-2/3 ml-3 circulo-border ">

                                        </div>
                                    </div>
                                    <h2 className="como-participar-title">
                                        Cadastre
                                    </h2>
                                    <p className="text-base">
                                        <b> Cadastre gratuitamente</b> uma oferta da sua empresa no site da Minutrade.
                                    </p>
                                </div>
                                <div className="md:w-1/3 md:mr-5">
                                    <div className="md:flex items-center">
                                        <div className="w-1/3">
                                            <img src={Circolu1} alt="" /></div>
                                        <div className="w-2/3 ml-3 circulo-border ">

                                        </div>
                                    </div>
                                    <h2 className="como-participar-title">Concorra</h2>
                                    <p className="text-base">Ao inscrever a sua empresa, <b> você ganha um cupom para concorrer</b> na promoção.</p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="w-1/3">
                                        <img src={Circolu1} alt="" />
                                    </div>
                                    <h2 className="como-participar-title">torça</h2>
                                    <p className="text-base">Participe aqui de
                                        <b> quatro sorteios
                                            de R$ 50 mil</b> para alavancar o seu negócio.</p>
                                </div>
                            </div>
                            <div className="mt-10 mb-20">
                                <a className="como-participar-button" href="#">Cadastre a sua empresa e concorra ao prêmio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-amarelo conteiner flex justify-center pt-20 md:pb-20 pb-72">
                <div className="container">
                    <div className="md:ml-80 p-4 md:p-0">
                        <div>
                            <h1 className="title-main-amarelo">
                                Confira as quatro empresas sortudas que levaram o prêmio de R$ 50 mil.
                            </h1>
                            <div className="md:w-1/2 mt-10">
                                <p className="text-lg mb-5">
                                    Ops! O sorteio só vai rolar em <b> 13/11 </b>
                                    e será apurado na tarde de <b> 15/11/2021.</b>



                                </p>
                                <p className="text-lg"> Para conferir os ganhadores, <b> aguarde
                                    até dez dias úteis</b> após a apuração. ;)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}