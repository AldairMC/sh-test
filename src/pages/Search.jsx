import { useContext } from "react"
import AppContext from "../context/AppContext"
import { Link } from "react-router-dom"

//Components
import User from "../components/User"

const Search = () => {
    const { id, changeId, getUser, cleanUser } = useContext(AppContext)

    const handleChange = e => {
        if(e.target.value === ""){
            cleanUser([])
        }
        changeId(e.target.value)
    }

    return (
        <div className="Search">
            <div className="Div_Search_Title" title="Clicl para ir al home">
                <Link to="/">
                    <span className="Span_Search_Title">Sistema de consultas</span>
                </Link>
            </div>
            <div className="Div_Search_Search">
                <span className="Span_Search_Input">
                    <input
                        onChange={handleChange}
                        className="Input_Search"
                        type="number" 
                        placeholder="Id del usuario"
                    />
                </span>
                <span className="Span_Search_Button">
                    <button 
                        onClick={() => getUser(id)}
                        className="Button_Search"
                    >
                        CONSULTAR
                    </button>
                </span>
            </div>

            <User />
        </div>
    )
}

export default Search;