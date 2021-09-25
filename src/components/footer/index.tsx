import "./style.scss";
import Logo from "../../assets/images/logo.png"
export default function Footer() {
    return (
        <>
            <div className="content-footer pb-14 pt-14 text-center md:text-left">
                <div className="container p-4 md:p-0 ">
                    <div className="md:flex justify-between">
                        <div className="order-2 mb-5 md:mb-0">
                            <div className="flex justify-center mb-5">
                                <img src={Logo} alt="" />
                            </div>
                            <p className='text-footer'>© 2021 BB Empresas. Todos os direitos reservados.</p>

                        </div>
                        <div className="order-1 mb-5 md:mb-0">
                            <p className="text-footer">Confira a nossa</p>
                            <a className="link-footer" href="#"> política de privacidade.</a>

                        </div>

                        <div className="order-3 ">
                            <p className="text-footer"> <a className="link-footer" href="#">  Clique aqui</a>  e contribua para esta e outras</p> <p className="text-footer"> promoções.
                                Queremos ouvir a sua opinião.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}