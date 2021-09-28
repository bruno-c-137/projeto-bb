import "./style.scss";
import ImgMulher from "../../assets/images/img-mulher.png"
import Faq from "../faq";
export default function EntendaMelhor() {
    return (
        <>
            <div className="md:mt-10 mt-32 md:mb-20 mb-10">
                <div className="container">

                    <div className="md:flex p-4 md:p-0 ">
                        <div className="relative md:static order-1 absolute top-0 -mt-96 md:-mt-0 mb-11 md:mb-0">
                            <img src={ImgMulher} alt="" />

                        </div>
                        <div className="flex-1 self-end md:mr-3">
                            <h1 className="entenda-melhor-title mb-10">Ainda tem dúvidas? <span className="underline-amarelo"> Entenda melhor!</span>
                            </h1>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Quem pode participar?'>
                                    <div className="text-base">
                                        Toda empresa que seja cliente <span className="underline"> <b> Pessoa Jurídica</b></span> do BB, esteja estabelecida no Brasil
                                        e preencha as demais condições previstas no regulamento.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Até quando posso participar da promoção?'>
                                    <div className="text-base">
                                        O período de participação começa às 0h do dia 4/10 e vai até 31/10/2021, às 23h59.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Quando será o sorteio e como ele será divulgado? '>
                                    <div className="text-base">
                                        O sorteio ocorrerá <span className="underline"><b> em</b></span> 13/11/<span className="underline"><b>2021</b></span>, via Loteria Federal.
                                        A data da apuração será <span className="underline"><b> em</b></span> 15/11/2021, às 14h. As empresas
                                        ganhadoras serão divulgadas em até 10 dias <span className="underline"><b> úteis no</b></span> site da promoção e <span className="underline"> <b> assim</b> </span>permanecerão por mais
                                        30 dias até que os contemplados sejam efetivamente contatados. </div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Posso cadastrar mais de uma oferta da minha empresa?'>
                                    <div className="text-base">
                                        <span className="underline"> <b>  Pode, sim. :) O</b></span> cadastro é gratuito e <span className="underline"><b> voluntário,
                                        </b></span> e <span className="underline"> <b> é possível</b> </span>inscrever mais de uma oferta,  desde <span className="underline"><b> que se</b></span> adeque às condições da Minutrade.
                                        Mas, independentemente da <span className="underline"><b> quantidade cadastrada,</b></span> você receberá apenas um número da sorte para concorrer.</div>
                                </Faq>
                            </div>
                            <div className="content-faq mb-4">
                                <Faq className="text-base text-gray-700" title='Onde posso conferir o meu número da sorte?   '>
                                    <div className="text-base">
                                        O número da sorte será enviado para o e-mail cadastrado no site <a className="text-blue-600 underline" href="http://www.mpeweek2021.com.br"> www.mpeweek2021.com.br</a> até dois dias úteis antes do sorteio. </div>
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