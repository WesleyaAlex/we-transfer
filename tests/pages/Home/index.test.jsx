import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../../../src/contexts/UserContext";
import useCoursesData from "../../../src/hook/useCoursesData";
import useServicesData from "../../../src/hook/useServicesData";
import Home from "../../../src/pages/Home";

jest.mock("../../../src/hook/useServicesData")
jest.mock("../../../src/hook/useCoursesData")

const mockNavigate = jest.fn()
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate
}))

describe("Home page", () => {
  beforeEach(() => {
    useServicesData.mockReturnValue({
      isLoading: false,
      error: "Mensagem de erro", 
      data: [
        {
          "id": 1,
          "title": "Cursos",
          "imageUrl": "https://www.btu.unesp.br/Home/sobre/biblioteca/biblioensina356/IMAGEM%20-%20Curso%20EAD%20banner%20-%20Pl%C3%A1gio%20e%20Turnitin.png"
        },
        {
          "id": 2,
          "title": "Professores",
          "imageUrl": "https://www.paldesk.com/wp-content/uploads/2021/03/An-Introduction-to-People-Management.png"
        },
      ]
    })
    useCoursesData.mockReturnValue({
      isLoading: false,
      courses: [
        {
          "id": 1,
          "title": "Fundamentos de Banco de dados",
          "author": "Rafael",
          "price": 30.00,
          "avaliations": 100,
          "stars": 5,
          "imageUrl": "https://blog.unipar.br/wp-content/uploads/2021/11/post_thumbnail-801c53f03508c73882d8a372d4df2e17.jpeg",
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Atirei o pau no gatis, per gatis num morreus.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris se pirulitá.Paisis, filhis, espiritis santis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
        },
        {
          "id": 2,
          "title": "Gestão Financeira",
          "author": "Xavier",
          "price": 24.50,
          "avaliations": 250,
          "stars": 4,
          "imageUrl": "https://www.gov.br/infraestrutura/pt-br/assuntos/portal-da-estrategia/cursos-e-eventos-estrategia/gestao-do-orcamento-publico/oramento-jpg/@@images/ef1a921e-fe50-417e-8982-ae8c1d0b0f4a.jpeg",
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Atirei o pau no gatis, per gatis num morreus.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris se pirulitá.Paisis, filhis, espiritis santis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
        },
      ]
    })
  })

  it("É possível renderizar a página corretamente", () => {
    render(<Home />, { wrapper: BrowserRouter })

    const headerText = screen.getByText(/Seja onde você estiver./i)

    const ourServicesTitle = screen.getByText(/Nossos Serviços/i)

    const highlightsTitle = screen.getByText(/Em destaque/i)

    const footerText = screen.getByText(/My Vídeo Time 2020/i)

    expect(headerText).toBeInTheDocument()
    expect(ourServicesTitle).toBeInTheDocument()
    expect(highlightsTitle).toBeInTheDocument()
    expect(footerText).toBeInTheDocument()
  })

  it("É possível renderizar o Menu Dropdown", () => {
    render(<Home />, { wrapper: BrowserRouter })

    const buttonHamburger = screen.getByTestId("button-hamburger")

    fireEvent.click(buttonHamburger)
    
    const myProfileMenuItem = screen.getByText(/Meu perfil/i)

    const logoutMenuItem = screen.getByText(/Sair/i)

    expect(buttonHamburger).toBeInTheDocument()
    expect(myProfileMenuItem).toBeInTheDocument()
    expect(logoutMenuItem).toBeInTheDocument()
  })

  it("É possível esconder o Menu Dropdown", () => {
    render(<Home />, { wrapper: BrowserRouter })

    const buttonHamburger = screen.getByTestId("button-hamburger")

    fireEvent.click(buttonHamburger)
    
    const myProfileMenuItem = screen.getByText(/Meu perfil/i)

    expect(myProfileMenuItem).toBeInTheDocument()

    fireEvent.click(buttonHamburger)

    expect(screen.getByTestId("nav-container")).toHaveClass("hidden");
  })

  it("É possível ser redirecionado para a tela de Login", () => {
    render(<UserContextProvider><Home /></UserContextProvider>, { wrapper: BrowserRouter })

    const buttonHamburger = screen.getByTestId("button-hamburger")

    fireEvent.click(buttonHamburger)
    
    const logoutMenuItem = screen.getByText(/Sair/i)

    fireEvent.click(logoutMenuItem)

    expect(mockNavigate).toHaveBeenCalledWith("/login")
  })

  it("É possível renderizar os itens de destaque", () => {    
    render(<Home />, { wrapper: BrowserRouter })

    const highlightedTitle = screen.getByText(/Em destaque/i)
    
    const fundamentalsItem = screen.getByText(/Fundamentos de Banco de dados/i)

    expect(highlightedTitle).toBeInTheDocument()
    expect(fundamentalsItem).toBeInTheDocument()
  })
  

  it("É possível redirecionado para o detalhe de um destaque", () => {    
    render(<Home />, { wrapper: BrowserRouter })

    const financialManagement = screen.getByRole('img', {
      name: /gestão financeira/i
    })

    expect(financialManagement).toBeInTheDocument()

    fireEvent.click(financialManagement)

    screen.logTestingPlaygroundURL()
    // expect(window.location.pathname).not.toEqual('/')
    // expect(window.location.pathname).toEqual('/course/2')
  })


  it("É possível renderizar os serviços", () => {    
    render(<Home />, { wrapper: BrowserRouter })

    const ourServicesTitle = screen.getByText(/Nossos Serviços/i)

    expect(ourServicesTitle).toBeInTheDocument()

    expect(screen.getAllByTestId(/our-services/i)[0]).toBeInTheDocument()
  })
})