import { StatusBar } from 'expo-status-bar';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking
} from 'react-native';

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { homeStyles } from './components/homeStyles';
import { estudoStyles } from './components/estudoStyles';
import { desenvolvedoresStyles } from './components/desenvolvedoresStyles';


function HomeScreen() {

  return (

    <ScrollView contentContainerStyle={homeStyles.scrollContainer}>

      <View style={homeStyles.caixaTitulo}>
        <Text style={homeStyles.textoTitulo}>
          Expo X React Native
        </Text>
      </View>

      <View style={homeStyles.caixaImagem}>
        <Image
          source={require('./components/images/expo.png')}
          style={homeStyles.imagem}
          resizeMode="cover"
        />
      </View>

      <Text style={homeStyles.descricaoImagem}>
        O Expo é um conjunto de ferramentas de código aberto que facilita e
        acelera o desenvolvimento, construído em torno do React Native.
      </Text>

      <View style={homeStyles.caixaImagem}>
        <Image
          source={require('./components/images/react.png')}
          style={homeStyles.imagem}
          resizeMode="cover"
        />
      </View>

      <Text style={homeStyles.descricaoImagem}>
        O React Native é um framework de código aberto criado pela Meta
        (Facebook) que permite desenvolver aplicativos móveis para Android
        e iOS usando JavaScript e TypeScript.
      </Text>

      <View style={homeStyles.conatinerDiferenca1Assunto}>
        <Text style={homeStyles.diferenca1Assunto}>
          O React Native é a base para criar aplicativos móveis nativos
          com JavaScript, enquanto o Expo é o ecossistema que simplifica
          e acelera esse processo.
        </Text>
      </View>

      <View style={homeStyles.caixaTitulo1}>
        <Text style={homeStyles.textoTitulo}>
          Diferenças entre algumas extensões
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          • .js (JavaScript): Arquivo padrão de JavaScript puro. Não aceita
          tipagem estática do TypeScript e nem sintaxe JSX nativa.
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          • .jsx (JavaScript + JSX): Arquivo JavaScript que contém código
          JSX, usado frequentemente em componentes React.
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          • .ts (TypeScript): Arquivo de TypeScript puro. Possui tipagem
          estática, mas não deve conter marcação JSX.
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          • .tsx (TypeScript + JSX): Arquivo TypeScript que suporta tipagem
          estática combinada com a sintaxe JSX para criação de componentes.
        </Text>
      </View>

      <View style={homeStyles.caixaTitulo2}>
        <Text style={homeStyles.textoTitulo}>
          Exemplos de utilização
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          .js - JavaScript
        </Text>

        <Text style={homeStyles.descricaoTexto}>
          const nome = "Anderson";{'\n'}
          console.log(nome);
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          .jsx - JavaScript + JSX
        </Text>

        <Text style={homeStyles.descricaoTexto}>
          {'<Text>'}{'\n'}
          {'  Olá mundo!'}{'\n'}
          {'</Text>'}
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          .ts - TypeScript
        </Text>

        <Text style={homeStyles.descricaoTexto}>
          let idade: number = 17;
        </Text>
      </View>

      <View style={homeStyles.cardTexto}>
        <Text style={homeStyles.descricaoTexto}>
          .tsx - TypeScript + JSX
        </Text>

        <Text style={homeStyles.descricaoTexto}>
          type Props = {'{'}{'\n'}
          {'  nome: string;'}{'\n'}
          {'}'};
        </Text>
      </View>

      <View style={homeStyles.caixaTitulo2}>
        <Text style={homeStyles.textoTitulo}>
          Type Script X Java Script
        </Text>
      </View>

      <Text style={homeStyles.descricaoTexto}>
        * O TypeScript é uma extensão do JavaScript que adiciona tipagem
        estática para detectar erros no código antes mesmo de ele rodar.
        Enquanto o JavaScript descobre os tipos em tempo de execução,
        o TypeScript ajuda a identificar erros durante o desenvolvimento.
      </Text>

      <View style={homeStyles.caixaTitulo2}>
        <Text style={homeStyles.textoTitulo}>
          O que são Hooks?
        </Text>
      </View>

      <Text style={homeStyles.descricaoTexto}>
        * As Hooks são funções especiais do React que permitem usar o estado
        e outras funcionalidades em componentes funcionais.
      </Text>

      <View style={homeStyles.caixaTitulo2}>
        <Text style={homeStyles.textoTitulo}>
          O que são Props?
        </Text>
      </View>

      <Text style={homeStyles.descricaoTexto}>
        * Props são argumentos somente leitura usados para enviar dados de
        um componente pai para um componente filho no React.
      </Text>

      <Text style={homeStyles.descricaoTextoExemplo}>
        Exemplo de implementação:
      </Text>

      <View style={homeStyles.caixaImagem1}>
        <Image
          source={require('./components/images/exProps.png')}
          style={homeStyles.imagem1}
          resizeMode="contain"
        />
      </View>

    </ScrollView>
  );
}

function EstudoScreen() {

  return (

    <ScrollView contentContainerStyle={estudoStyles.scrollContainer}>

      <View style={estudoStyles.caixaTitulo}>
        <Text style={estudoStyles.textoTitulo}>
          Dicas de Estudo
        </Text>
      </View>

      <Text style={estudoStyles.textoPrincipalSecundario}>
        Sites que podem ser usados para estudo:
      </Text>

      <View style={estudoStyles.caixaImagemEstudo}>

        <Image
          source={require('./components/images/ex1SiteEstudo.png')}
          style={estudoStyles.imagemEstudo}
          resizeMode="contain"
        />

      </View>

      <Text style={estudoStyles.textoEstudo}>

        O site da imagem é a documentação oficial do React Native, uma
        ferramenta criada pela Meta (Facebook) para desenvolver aplicativos
        de celular. Com ela, você consegue criar apps tanto para Android
        quanto para iOS usando JavaScript.
        {'\n\n'}

        <Text
          style={{
            color: '#38BDF8',
            textDecorationLine: 'underline',
          }}
          onPress={() =>
            Linking.openURL('https://reactnative.dev/')
          }
        >
          Ver Curso
        </Text>

      </Text>

      <View style={estudoStyles.caixaImagemEstudo}>

        <Image
          source={require('./components/images/ex2SiteEstudo.png')}
          style={estudoStyles.imagemEstudo}
          resizeMode="contain"
        />

      </View>

      <Text style={estudoStyles.textoEstudo}>

        Esta imagem mostra a página de um curso da Alura, uma das maiores
        plataformas brasileiras de ensino de tecnologia online. O curso
        específico da tela é o "React Native: Desenvolva seu primeiro app".
        {'\n\n'}

        <Text
          style={{
            color: '#38BDF8',
            textDecorationLine: 'underline',
          }}
          onPress={() =>
            Linking.openURL(
              'https://www.alura.com.br/formacao-react-native-primeiro-app'
            )
          }
        >
          Ver Curso
        </Text>

      </Text>

      <View style={estudoStyles.caixaImagemEstudo}>

        <Image
          source={require('./components/images/ex3SiteEstudo.png')}
          style={estudoStyles.imagemEstudo}
          resizeMode="contain"
        />

      </View>

      <Text style={estudoStyles.textoEstudo}>

        Esta imagem mostra a página de um curso chamado
        "React Native com Expo - Curso Introdutório", hospedado na
        plataforma de ensino Rocketseat.
        {'\n\n'}

        <Text
          style={{
            color: '#38BDF8',
            textDecorationLine: 'underline',
          }}
          onPress={() =>
            Linking.openURL(
              'https://app.rocketseat.com.br/jornada/expo-com-react-native-curso-introdutorio/visao-geral'
            )
          }
        >
          Ver Curso
        </Text>

      </Text>

    </ScrollView>
  );
}

function DesenvolvedoresScreen() {

  return (

    <View style={desenvolvedoresStyles.container}>

      <ScrollView
        style={desenvolvedoresStyles.scrollView}
        contentContainerStyle={desenvolvedoresStyles.scrollContainer}
        showsVerticalScrollIndicator={true}
      >

        <View style={desenvolvedoresStyles.caixaTitulo}>

          <Text style={desenvolvedoresStyles.textoTitulo}>
            Desenvolvedores
          </Text>

        </View>

        <View style={desenvolvedoresStyles.cardDescricao}>

          <Text style={desenvolvedoresStyles.tituloDescricao}>
            Sobre o projeto
          </Text>

          <Text style={desenvolvedoresStyles.textoDescricao}>
            Este projeto foi desenvolvido para a disciplina de Programação
            de Aplicativos Mobile I.
          </Text>

          <Text style={desenvolvedoresStyles.textoDescricao}>
            O aplicativo apresenta uma pesquisa sobre conceitos importantes
            do desenvolvimento mobile utilizando React Native e Expo.
          </Text>

          <Text style={desenvolvedoresStyles.textoDescricao}>
            Entre os assuntos apresentados estão as diferenças entre Expo
            e React Native, as extensões .js, .jsx, .ts e .tsx,
            TypeScript e JavaScript, Hooks e Props.
          </Text>

          <Text style={desenvolvedoresStyles.textoDescricao}>
            Também foram adicionados exemplos de código, imagens e sites
            para estudo.
          </Text>

        </View>

        <View style={desenvolvedoresStyles.cardDev}>

          <Image
            source={require('./components/images/John.jpeg')}
            style={desenvolvedoresStyles.imagemDev}
            resizeMode="cover"
          />

          <Text style={desenvolvedoresStyles.nomeDev}>
            John Anderson
          </Text>

          <Text style={desenvolvedoresStyles.idadeDev}>
            17 anos
          </Text>

          <Text style={desenvolvedoresStyles.funcaoDev}>
            Desenvolvedor do projeto e responsável pela criação da
            página Devs.
          </Text>

        </View>

        <View style={desenvolvedoresStyles.cardDev}>

          <Image
            source={require('./components/images/Maycon.jpeg')}
            style={desenvolvedoresStyles.imagemDev}
            resizeMode="cover"
          />

          <Text style={desenvolvedoresStyles.nomeDev}>
            Maycon da Silva
          </Text>

          <Text style={desenvolvedoresStyles.idadeDev}>
            17 anos
          </Text>

          <Text style={desenvolvedoresStyles.funcaoDev}>
            Desenvolvedor do projeto e responsável pelo desenvolvimento
            do aplicativo.
          </Text>

        </View>

        <View style={desenvolvedoresStyles.caixaFinal}>

          <Text style={desenvolvedoresStyles.textoFinal}>
            Projeto desenvolvido em dupla
          </Text>

        </View>

      </ScrollView>

    </View>
  );
}

const MyStack = createStackNavigator({

  screens: {

    Home: {

      screen: HomeScreen,

      options: {

        header: ({ navigation }) => (

          <View style={homeStyles.headerCustom}>

            <View style={homeStyles.headerEsquerda}>

              <Image
                source={require('./components/images/javascript.png')}
                style={homeStyles.fotoPerfilHeader}
                resizeMode="cover"
              />

            </View>

            <Text style={homeStyles.tituloHeader}>
              Universo Expo
            </Text>

            <View style={homeStyles.headerDireita}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Estudo')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Estudo
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Desenvolvedores')
                }
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Devs
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ),

      },

    },


    Estudo: {

      screen: EstudoScreen,

      options: {

        header: ({ navigation }) => (

          <View style={homeStyles.headerCustom}>

            <View style={homeStyles.headerEsquerda}>

              <Image
                source={require('./components/images/javascript.png')}
                style={homeStyles.fotoPerfilHeader}
                resizeMode="cover"
              />

            </View>

            <Text style={homeStyles.tituloHeader}>
              Universo Expo
            </Text>

            <View style={homeStyles.headerDireita}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Estudo')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Estudo
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Desenvolvedores')
                }
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Devs
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ),

      },

    },


    Desenvolvedores: {

      screen: DesenvolvedoresScreen,

      options: {

        header: ({ navigation }) => (

          <View style={homeStyles.headerCustom}>

            <View style={homeStyles.headerEsquerda}>

              <Image
                source={require('./components/images/javascript.png')}
                style={homeStyles.fotoPerfilHeader}
                resizeMode="cover"
              />

            </View>

            <Text style={homeStyles.tituloHeader}>
              Universo Expo
            </Text>

            <View style={homeStyles.headerDireita}>

              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Estudo')}
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Estudo
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Desenvolvedores')
                }
                style={homeStyles.botaoHeaderAcao}
              >
                <Text style={homeStyles.textoBotaoAcao}>
                  Devs
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ),

      },

    },

  },

});


const Navigation = createStaticNavigation(MyStack);


export default function App() {

  return (

    <>
      <StatusBar style="light" />
      <Navigation />
    </>

  );

}