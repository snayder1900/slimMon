import { useState } from "react";
import css from "./addProduct.module.css";
import Calendario from "./calendario";
import Modal from './mobilemenu'
import { sendFormData, getProductsByQuery } from "../services/apiService"

const AddProduct = () => {
  const [alimentos, setAlimentos] = useState([
    { id: 1, nombre: "Manzana", gramos: 100, calorias: 52 },
    { id: 2, nombre: "Plátano", gramos: 120, calorias: 105 },
    { id: 3, nombre: "Yogur", gramos: 200, calorias: 150 },
    { id: 4, nombre: "Pollo", gramos: 150, calorias: 239 },
    { id: 5, nombre: "Arroz", gramos: 50, calorias: 130 },
  ]);

  const handleCreateProducts = async (e) => {
    e.preventDefault();
    const { nombre, gramos } = e.target.elements;
    const productName = nombre.value.toLowerCase();

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGRmZjg3ZDhhYTczYWM5NzhkZjk0MiIsImlhdCI6MTcxMjI2NzUyNCwiZXhwIjoxNzEyMzEwNzI0fQ.fj_Ob-R87k0LOCmFNVDLKytdqJCRk6oSQG0BppqROxI";
      const response = await getProductsByQuery(
        `products/query?title=${productName}`,
        token
      );
      const productInfo = response.data[0];

      // Calcular las calorías
      const calories = calculateCalories(
        productInfo.calories,
        parseInt(gramos.value)
      );

      const currentDate = new Date();
      const formattedDate = `${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}.${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${currentDate.getFullYear()}`;
      console.log("Fecha actual:", formattedDate);
      // Enviar información al servidor
      await sendFormData(
        "dailyCalories",
        {
          weight: parseInt(gramos.value),
          product: productName,
          date: formattedDate,
          calories: calories,
        },
        token
      );

      // Actualizar el estado de los alimentos
      const existingProductIndex = alimentos.findIndex(
        (item) => item.nombre.toLowerCase() === productName
      );
      if (existingProductIndex !== -1) {
        const updatedAlimentos = [...alimentos];
        updatedAlimentos[existingProductIndex] = {
          ...updatedAlimentos[existingProductIndex],
          gramos:
            updatedAlimentos[existingProductIndex].gramos +
            parseInt(gramos.value),
          calorias: updatedAlimentos[existingProductIndex].calorias + calories,
        };
        setAlimentos(updatedAlimentos);
      } else {
        const newProduct = {
          id: alimentos.length + 1,
          nombre: productName,
          gramos: parseInt(gramos.value),
          calorias: calories,
        };
        setAlimentos((prevState) => [...prevState, newProduct]);
      }

      nombre.value = "";
      gramos.value = "";
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const calculateCalories = (caloriasPor100g, gramos) => {
    return Math.round((caloriasPor100g * gramos) / 100);
  };

  const handleDeleteProduct = (id) => {
    setAlimentos((prevState) =>
      prevState.filter((alimento) => alimento.id !== id)
    );
  };

  return (
    <div className={css.container}> 
    <nav className={css.navContainer}>
        <img
          src="/assets/logo.png"
          alt="Logo de la pagina"
        />
      <div className={css.verticalBar__container}>
        <span></span>
      </div>
      <ul className={css.navUl}>
        <li className={css.nav__item}>
          <a>DIARIO</a>
        </li>
        <li className={css.nav__item}>
          <a>CALCULADORA</a>
        </li>
      </ul>
      <Modal />
    </nav>
    <form className={css.form} onSubmit={handleCreateProducts}>
      <div className={css.form__calender}>
        <Calendario />
      </div>
      <input type="text" className={css.inputFood__Form + " " + css.mobile__form} placeholder="Ingresa el nombre del producto" name="nombre"></input>
      <input type="text" className={css.inputGrames__Form + " " + css.mobile__form} placeholder="Gramos" name="gramos"></input>
      <button type="submit" className={css.buttonAdd + " " + css.transition-color + " " + css.mobile__form}>+</button>
    </form>
    <table className={css.products__Table}>
      <tbody>
        {alimentos.map((alimento) => (
          <tr key={alimento.id}>
            <td className={css.tablebody__item}>{alimento.nombre}</td>
            <td className={css.tablebody__item}>{alimento.gramos}</td>
            <td className={css.tablebody__item}>{alimento.calorias}</td>
            <td>
              <button onClick={() => handleDeleteProduct(alimento.id)} className={css.buttondelete__Table + " " + css.transition-color}>
                -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default AddProduct;