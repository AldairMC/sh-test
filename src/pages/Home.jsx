import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { cleanUser, changeId } = useContext(AppContext)

    const reset = () => {
        cleanUser([])
        changeId(null)
    }

    return (
        <div className="Home">
            <div className="Div_Home_Description">
                <div className="Div_Home_Title">
                    <span className="Span_Home_Title">Sistema de consultas</span>
                </div>
                <div className="Div_Home_Subtitle">
                    <span className="Span_Home_Subtitle">
                        Esta es mi prueba técnica de SoulHaus como desarrollador front en React
                    </span>
                </div>
                <div className="Div_Home_Search">
                    <Link to="/search" className="Link_Home_Search">
                        <button className="Button_Home_Search" onClick={() => reset()}>
                            CONSULTAR
                        </button>
                    </Link>
                </div>
            </div>
            <div className="Div_Home_Hero"></div>
        </div>
    )
}

export default Home;