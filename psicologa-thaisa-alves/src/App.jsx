
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Perfil from './components/Perfil';
import Services from './components/Services';

export default function App() {

  return (
    <>
      <Header />
      <Home />
      <Perfil />
      <div className="grid grid-cols-3" >
        <Services titleService="Relacionamento & Sexualidade" textService="Se você sente insegurança e baixa autoestima, passou por términos, traições, brigas ou enfrenta conflitos persistentes na relação, sofre com a rejeição, abandono e as feridas de relacionamentos abusivos, a terapia vai ajudar você a conquistar um relacionamento saudável e ter uma relação harmoniosa com a sexualidade, seja você solteiro(a), namorado(a) ou casado(a)."/>
        <Services titleService="Depressão, ansiedade & demais transtornos" textService="O Brasil é um dos países mais ansiosos e depressivos do mundo. Dentre os sintomas estão a desmotivação, a tristeza persistente, a desesperança, os pensamentos suicidas, preocupação excessiva, palpitações, pensamento acelerado, medo de que algo ruim aconteça e mesmo dificuldade para levantar da cama. Se esses ou outros transtornos estão interferindo na sua qualidade de vida, a terapia é para você."/>
        <Services titleService="Amadurecimento & autoconhecimento" textService="Para quem se sente perdido na vida, tem dúvidas sobre sua vocação e/ou sente que falta sentido na própria vida, a terapia pode ajudar a responder questões cruciais da vida humana e auxiliar você a construir uma vida plena em todos os sentidos - pessoal, profissional, familiar e espiritual - por meio do autoconhecimento e da análise existencial. "/>
        <Services titleService="Performance profissional & pessoal" textService="Pessoas que buscam uma rotina com maior rendimento, sobretudo profissional e acadêmico, podem encontrar na terapia uma ferramenta valiosa de crescimento sustentável. Como profissional de RH, ajudei muitos colaboradores a resolver situações que os impediam de alcançar a máxima performance na vida profissional e nos estudos."/>
        <Services titleService="Transtornos & Síndromes" textService="Transtorno de Déficit de Atenção e Hiperatividade (TDAH), Transtornos Alimentares, Transtorno Bipolar, Síndrome do Pânico, Fobias (Social ou específicas), TOC (Transtorno Obsessivo-Compulsivo), TEPT (Transtorno do Estresse Pós-Traumático). Estes são alguns dos transtornos que podem ser trabalhados através da Terapia Cognitivo-Comportamental, que possui resultados efetivos"/>
        <div className="px-6 bg-darkGreen rounded-lg m-6 text-white py-4">
          <p className="pfMarlet text-2xl text-center pt-10">Seja qual for a circunstância pela qual você está passando agora, a terapia vai ajudar você a superar as dificuldades e alcançar uma vida plena.</p>
          <a href="#" className="bg-white w-fit block px-4 py-2 rounded-full text-lime-800 poppins-light mx-auto mt-8">Marcar minha consulta</a>
        </div>
      </div>
      </>
  );
}

