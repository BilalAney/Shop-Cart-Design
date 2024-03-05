/** @format */

import { useState } from "react";
import "./App.css";
import Courses from "./Courses";
import CartMenu from "./components/MajorComponents/CartMenu";
import ShopMenu from "./components/MajorComponents/ShopMenu";
import Header from "./components/MajorComponents/Header";
import Btn from "./components/MinorComponents/Btn";
import Footer from "./components/MajorComponents/Footer";
import Main from "./components/MajorComponents/Main";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [cart, setCart] = useState([]);
  const [current, setCurrent] = useState(null);

  const btnProps = {
    bgColor: "var(--default-dark-color)",
    color: "#fff",
    padding: "8px",
    margin: "5px",
    fontSize: "var(--size-one)",
  };

  function handleAddCourse(course) {
    //If the course is already exist, then simply increment the quantity.
    //So I will use array.find function, this will return the course if it was
    //exist, else it will return undefined

    const theSameCourse = cart.find((ele) => ele.id === course.id);

    //if the course already exists, then get the course from the cart array
    //then modify it (manipulate the quantity)
    if (theSameCourse) {
      setCart((pre) =>
        pre.map((ele) =>
          ele.id === course.id ? { ...ele, quantity: ele.quantity + 1 } : ele
        )
      );
    } else setCart((pre) => [...pre, course]); //else, simply add it
  }

  function handleDeleteCourse(id) {
    //if the course has more than one item, then decrease it by one, else remove it permenantly
    if (cart.find((ele) => ele.id === id)?.quantity > 1) {
      setCart((pre) =>
        pre.map((ele) =>
          ele.id === id ? { ...ele, quantity: ele.quantity - 1 } : ele
        )
      );
    } //if there is onyl one quantity, => delete the item
    else setCart((pre) => pre.filter((ele) => ele.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function handleSelect(course) {
    setCurrent((pre) => (pre?.id === course.id ? null : course));
  }

  return (
    <div className="App">
      <Header />
      <main className="MainSe">
        <ShopMenu
          courses={Courses}
          handleSelect={handleSelect}
          handleAddCourse={handleAddCourse}
        >
          <Btn
            bgColor="var(--default-dark-color)"
            color="#fff"
            fontSize="var(--size-one)"
            width="100%"
          >
            REFRESH
          </Btn>
        </ShopMenu>

        <CartMenu courses={cart} handleDeleteCourse={handleDeleteCourse}>
          <Btn {...btnProps} handleClick={clearCart}>
            REMOVE ALL
          </Btn>
          <Btn {...btnProps}>CONTINUE!</Btn>
          <Btn {...btnProps}>SAVE IT FOR NOW</Btn>
        </CartMenu>
      </main>
      <Footer />
    </div>
  );
}

export default App;
