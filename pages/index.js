import React from 'react';

import Layout from './../src/templates/layout';
import Section from './../src/templates/section';
import Slide from './../src/templates/slide';
import Time from './../src/components/time';

export default function Home() {
    return (<Layout>
        <Section theme={1}>
            <Time />
        </Section>
        <Section theme={2}>
            <Slide />
        </Section>
        <Section theme={1}>
            <div style={{
                textAlign: "center",
                padding: "30px",
                marginTop: "10px"
            }}>
                <h2>Promessas Vazias: A história de uma amizade desfeita por uma dívida não paga</h2>
                <p style={{marginTop: "20px"}}>
                    Vinicius e Giovanni eram amigos desde a infância. Cresceram juntos em um bairro pobre da cidade e enfrentaram muitas dificuldades ao longo dos anos. Vinicius sempre teve um grande sonho: fazer uma tatuagem.<br />
                    <br />
                    Ele passava horas olhando desenhos na internet e imaginando como seria ter uma tatuagem em seu corpo. Mas como ele não tinha dinheiro suficiente para pagar por isso, ele decidiu pedir ajuda a seu amigo Giovanni.<br />
                    <br />
                    Giovanni era um rapaz trabalhador e sempre estava disposto a ajudar seus amigos. Quando Vinicius pediu dinheiro emprestado para fazer a tatuagem, Giovanni não hesitou em emprestar o dinheiro que ele havia economizado.<br />
                    <br />
                    Vinicius estava tão animado para fazer a tatuagem que passou dias pesquisando estúdios de tatuagem e escolhendo o desenho perfeito. Finalmente, ele decidiu onde fazer e marcou a data.<br />
                    <br />
                    Mas, infelizmente, as coisas não saíram como planejado. Na semana em que Vinicius estava programado para fazer a tatuagem, sua avó ficou muito doente e ele teve que gastar todo o dinheiro que ele havia emprestado com Giovanni para pagar as despesas médicas.<br />
                    <br />
                    Ele prometeu a si mesmo que pagaria o dinheiro de volta assim que pudesse, mas a vida continuou a apresentar desafios e ele nunca conseguiu juntar o dinheiro suficiente para pagar a Giovanni.<br />
                    <br />
                    Giovanni, que confiava e amava Vinicius, tentou dar um voto de confiança ao amigo e esperou pacientemente pelo dinheiro de volta. Mas à medida que o tempo passava, ele começou a ficar impaciente e preocupado.<br />
                    <br />
                    Ele tentou falar com Vinicius várias vezes, mas ele sempre dava desculpas e nunca pagava o dinheiro de volta. Giovanni começou a se sentir traído e magoado. Ele trabalhava duro para economizar dinheiro, e emprestar para Vinicius era uma decisão difícil para ele. Mas agora, parecia que ele nunca veria seu dinheiro novamente.<br />
                    <br />
                    Vinicius, por sua vez, não percebia o impacto que suas ações estavam causando em seu amigo. Ele estava tão preocupado em sua própria vida e seus próprios problemas que não percebeu como seus comportamentos afetaram os outros.<br />
                    <br />
                    Mas, um dia, Giovanni finalmente perdeu a paciência. Ele confrontou Vinicius e exigiu que ele pagasse o dinheiro de volta. Vinicius tentou se desculpar, mas Giovanni estava cansado de desculpas. Ele cortou todos os laços com Vinicius e nunca mais falou com ele novamente.<br />
                    <br />
                    Vinicius finalmente percebeu que suas ações tiveram consequências sérias. Ele se arrependeu de ter perdido a amizade de Giovanni por causa de sua própria irresponsabilidade financeira. Ele aprendeu uma lição valiosa sobre responsabilidade e sobre como as ações individuais podem afetar as pessoas ao seu redor.<br />
                </p>
                <p style={{marginTop: "20px"}}><i>gerado pelo ChatGPT</i></p>
            </div>
        </Section>
    </Layout>)
}