import "./style.scss";
import Logo from "../../assets/images/logo.png"
export default function Header() {
    return (
        <>
            <div className="z-10 content-header">
                <div className="container">
                    <div className="flex pt-5 pb-5">
                        <div className="w-1/3">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="flex-1 flex justify-between">

                            <a className="header-link self-center" href="#">Como funciona</a>
                            <a className="header-link self-center" href="#">Ganhadores</a>
                            <a className="header-link self-center" href="#">Dúvidas</a>
                            <a className="header-link self-center" href="#">Fale com a gente</a>
                            <a className="pr-5 pl-5  button-header flex items-center" href="#">Cadastre a sua empresa</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}