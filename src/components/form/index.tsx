import "./style.scss";
import ImgForm from "../../assets/images/img-form.png"
export default function Form() {
    return (
        <>
            <div className="content-form md:pt-20 pb-20">
                <div className="container">


                    <div className="md:flex p-4 md:p-0">
                        <div className="md:mr-10 mb-7 md:mb-0">
                            <img src={ImgForm} alt="" />
                        </div>
                        <div>
                            <h1 className="sub-form mb-10">Esclareça as suas dúvidas</h1>

                            <form>
                                <div className="md:flex justify-between ">
                                    <div className="md:mr-7 mb-5 md:mb-0">
                                        <div className="mb-5">
                                            <h1 className="title-form">Nome</h1>
                                            <input className="h-8 w-full" type="text" name="name" id="" />
                                        </div>
                                        <div>
                                            <h1 className="title-form">Email</h1>
                                            <input className="h-8 w-full" type="email" name="email" id="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="title-form">A sua dúvida</h1>
                                        <textarea className="mb-5 w-full" name="" id="" cols={45} rows={10}></textarea>
                                        <button className="button-form" type="submit">enviar</button>
                                    </div>
                                </div>

                            </form>
                            <div className="mt-7">
                                <p className="text-end-form ">Utilize este canal para revogar a sua participação nesta promoção. Basta enviar uma mensagem com o
                                    motivo do seu contato e informar os seus dados.</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}