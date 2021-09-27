import "./style.scss";
import Logo from "../../assets/images/logo.png"
import { useState } from "react";
export default function Header() {
    const [openBot, setOpenBot] = useState(false)
    return (
        <>
            <div className="z-10 content-header p-4 md:p-0">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className=" md:flex justify-between">
                            <div className="md:contents flex justify-between">
                                <div className={` md:hidden  ${openBot && 'ativado'}`}  >
                                    <div className="flex  ">
                                        <button className="mr-5" onClick={() => setOpenBot(!openBot)}>
                                            <span className="hamburguer" ></span>
                                        </button>

                                    </div>
                                </div>
                                <div className="md:w-1/4 w-1/3">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>

                            <div className="md:flex-1 md:flex justify-between hidden">

                                <a className="header-link self-center" href="#">Como funciona</a>
                                <a className="header-link self-center" href="#">Ganhadores</a>
                                <a className="header-link self-center" href="#">Dúvidas</a>
                                <a className="header-link self-center" href="#">Fale com a gente</a>
                                <a className="pr-5 pl-5  button-header flex items-center" href="#">Cadastre a sua empresa</a>
                            </div>

                            <div className={`md:hidden  ${openBot ? " mt-5" : "hidden"}`} >

                                <div>
                                    <a className="header-link self-center" href="#">Como funciona</a></div>
                                <div>
                                    <a className="header-link self-center" href="#">Ganhadores</a></div>
                                <div>
                                    <a className="header-link self-center" href="#">Dúvidas</a></div>
                                <div>
                                    <a className="header-link self-center" href="#">Fale com a gente</a></div>
                                <div className="mt-3">
                                    <a className="pt-3 pb-3 justify-center button-header flex items-center" href="#">Cadastre a sua empresa</a>
                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}