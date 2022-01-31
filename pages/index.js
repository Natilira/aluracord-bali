import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from 'next/router';
import appConfig from "../config.json";


// criando uma tag
function Title(props) {
  const Tag = props.tag || h1;
  return (
    // aqui o h1 tem outro escopo
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

// // componente React - função que retorna um trecho JSX
// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle/>
//             <Title tag="h2">Boas vindas!</Title>
//             <h2>Discord- Alura matrix</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
  //const username = "Natilira";
  const [username, setUsername] = React.useState('Natilira'); 
  const roteamento = useRouter();
 
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage:
            "url(https://i1.wp.com/multarte.com.br/wp-content/uploads/2018/12/azul-claro23.jpg?resize=768%2C480&ssl=1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguem submeteu o form');
                roteamento.push(`/chat?username=${username}`);
                //window.location.href = '/chat';
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Bem Vindos!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>
{/* 
            <input
                type = "text"
                value = {username}
                onChange = {function (event) {
                 console.log('usuario digitou', event.target.value);
                 // Onde tá o valor?
                 const valor = event.target.value;
                 //Trocar o valor da variavel
                 //atraves do React e avise quem precisa mudar
                 setUsername(valor);
                }}
            />   */}

             <TextField
             value = {username}
             onChange = {function (event) {
              console.log('usuario digitou', event.target.value);
              // Onde tá o valor?
              const valor = event.target.value;
              //Trocar o valor da variavel
              //atraves do React e avise quem precisa mudar
              setUsername(valor);
             }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            /> 
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[300],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
