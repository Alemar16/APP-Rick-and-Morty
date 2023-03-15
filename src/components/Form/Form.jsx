import styles from "./Form.module.css"
import { useState, useEffect } from "react"
import{validate} from "./validation"


export default function Form(props) {
  
 
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  })
    const [errors, setErrors] = useState({
      userName: "",
      password: "",
    });
  const handleChange = (event) => {
    const { name, value } = event.target
    //username: abc123@gmail.com / password: ******
    setUserData({
      ...userData,//compara una copia con el DOM virtual
      [name]: value,
    })
    setErrors(validate({
      ...userData,
      [name]:value
    }))
  }
  useEffect(() => {
    console.log(userData)
  }, [userData])
  return (
    <form className={styles.container}>
      <img
        src="https://th.bing.com/th/id/OIP.h0oT4yTzyJfu12nJ-GOsYwHaIQ?pid=ImgDet&rs=1"
        alt="Imagen de Rick and Morty"
        width="200"
        height="300"
      />
      <br />
      <label htmlFor="">Nombre:</label>
      <input
        type="text"
        value={userData.userName}
        name="userName"
        onChange={handleChange}
        className={errors.userName && styles.warning}
      />
      {errors.userName ? (
        <p style={{ color: "red" }}>{errors.userName}</p>
      ) : null}
      <label htmlFor="">Contraseña:</label>
      <input
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        className={errors.password && styles.warning}
      />
      {errors.password ? (
        <p style={{ color: "red" }}>{errors.password}</p>
      ) : null}
      <br />
      <button>Login</button>
    </form>
  );
}