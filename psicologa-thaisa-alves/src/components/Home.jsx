import FotoHome from '../assets/home.jpg'

export default function Home(){
    return(
        <div className="width-full bg-lightGreen h-screen flex flex-wrap justify-center items-center">
            <img src={FotoHome} alt="Foto Psicóloga Thaísa Alves" className="rounded-full w-1/3"/>
            <div className="w-1/2 h-fit pl-20">
                <span className="display-block tracking-[1.5em] text-lime-800 poppins-light">TERAPIA ONLINE</span>
                <h2 className="text-5xl pfMarlet py-8 text-white">Uma vida plena começa pela sua saúde mental.</h2>
                <p class="text-lime-800 pb-8 poppins-light">De depressão e ansiedade a amadurecimento e sexualidade, comece agora a resolver o que impede você de ter uma vida plena e melhore todas as áreas da sua vida por meio da terapia.</p>
                <a href="" className="bg-white w-fit block px-4 py-2 rounded-full text-lime-800 poppins-light">Marcar minha consulta</a>
            </div>
        </div>
    )
}