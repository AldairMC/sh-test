import { useContext } from "react"
import AppContext from "../context/AppContext"

const User = () => {
    const { user, id } = useContext(AppContext)

    return (
        <div className="User">
            {
                user.length !== 0 && id? <div className="Div_User_Container">
                    <div className="Div_User_Text">
                        <strong>Nombre:</strong> {user.name}
                    </div> 
                    <div className="Div_User_Text">
                        <strong>Usuario:</strong> {user.username}
                    </div> 
                    <div className="Div_User_Text">
                        <strong>Empresa:</strong> {user.company?.name}
                    </div> 
                    <div className="Div_User_Text">
                        <strong>Sitio web:</strong> {user.website}
                    </div> 
                    <div className="Div_User_Text"> 
                        <strong>Correo:</strong> {user.email}
                    </div> 
                    <div className="Div_User_Text">
                        <strong>Teléfono:</strong> {user.phone}
                    </div> 
                </div> : <div className="Div_User_Empty"> No hay usuario seleccionado </div>
            }
        </div>
    )
}

export default User