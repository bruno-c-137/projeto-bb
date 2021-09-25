import "./style.scss";
import ImgMulher from "../../assets/images/img-mulher.png"
import Faq from "../faq";
export default function EntendaMelhor() {
    return (
        <>
            <div className="md:mt-10 mt-32 mb-20">
                <div className="container">

                    <div className="md:flex p-4 md:p-0 ">
                        <div className="relative md:static order-1 absolute top-0 -mt-96 md:-mt-0 mb-11 md:mb-0">
                            <img src={ImgMulher} alt="" />

                        </div>
                        <div className="flex-1 self-end md:mr-3">
                            <h1 className="entenda-melhor-title mb-10">Ainda tem dúvidas? Entenda melhor!
                            </h1>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Quem pode participar?'>
                                    <div className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Até quando posso participar da promoção?'>
                                    <div className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Quando será o sorteio e como ele será divulgado? '>
                                    <div className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Posso cadastrar mais de uma oferta da minha empresa?'>
                                    <div className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Onde posso conferir o meu número da sorte?   '>
                                    <div className="text-base">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </Faq>
                            </div>
                            <div className="mt-9 md:w-1/2">
                                <a className="entenda-melhor-button" href="#">Confira o regulamento</a>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}