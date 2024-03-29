# Counter App - React Introduction

## Apa yang akan kamu pelajari dari app ini?

- React state management (dengan useState)
- React life cycle (dengan useEffect)
- Bagaimana cara mengupdate state di React
- Event handling di React (onClick dan onChange)
- Membuat aplikasi dengan banyak Components
- Memberikan type untuk props dengan prop-types
- CSS Module dan dynamic className dengan classnames

&copy; wegodev | version 1.1.0

### step by step PEMBUATAN APLIKASI

1. Make UseState

```javascript
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Plus{" "}
      </button>
    </div>
  );
}
```

2. Make Navbar

   > create a new folder in src => components => Navbar
   > in folder Navbar we create index.js and Navbar.module.css
   > in file Navbar index.js we type

```javascript
   import '/style '
   import ShoppingIcon from '/public/logo192.png'

   function Navbar () {
   return (
   <>
   <Nav className ='nav'>
      <Img src={ShoppingIcon} className='nav-icon' alt='icon'>
      <h1 className= 'nav-title'> Shopping List </h1>
   </Nav>
   </>
   )
   }
```

3. SetUp Layouts

```javascript
   <Navbar />
   <Section>
      <Form>
         <input>
         <button></button>
      </Form>
   </Section>

   add useState input value
 import {useState} from 'React'

 Function App () {
   const [value, setValue] = useState ('');

   <input onChange= {(e)=> {setValue(e.target.value)}} value= {value}>
 }
```

4. create useState Todos

```javascriipt

   fuction App () {
      const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Susu",
      completed: false,
      count: 1,
    },
    {
      id: 2,
      title: "Kopi",
      completed: false,
      count: 1,
    },
    {
      id: 3,
      title: "Teh",
      completed: false,
      count: 1,
    },
  ]);


  todos.length >0 ? (
   <div className= 'todos'>
   {todos.map (todo,index) => {
      return (
         <div className= 'todo' key={index}>
         {todo.title}
         </div>
      )
   }}
   </div>
  ) : <div> Kosong nih cuy . . .  </div>
}

```

5. Library ClassName (dynamic className)

   > make a border bottom if its not a last elemet. how it is?
   > Make (+) and (-) works
   > in a <button> we add onClick listener

   ```javascript
   const HandleCount (index) => {
      const newTodos = {...todos} //spread operator for copy an array in this case todos array
   }
   ```

   > Make a tag input works

   ```javascript
      const HandleSubmit()=> {
         e.preventDefault();
         const addTodos = [...todos, {
            title: value,
            count: 1}]
      } setTodos(addTodos)
   ```

6. Improve HandleSubmit() if its a blank input
   we add a condition if its a blank input

   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();

     if (!value) {
       alert("List cannot be empty");
       return;
     }

     const addTodos = [
       ...todos,
       {
         title: value,
         count: 1,
       },
     ];
     setTodos(addTodos);
     setValue("");
   };
   ```

7. improve icon (-)
   its cannot be less than 0, if its less than 0 we set it to erase the input

   ```javascript
   const handleSubtractionCount = (index) => {
     const newTodos = [...todos];
     if (newTodos[index].count > 0) {
       //pengurangan dilakukan jika value masih > dari 0
       newTodos[index].count = newTodos[index].count - 1;
     } else {
       //Jika sudah nol tapi masih dikurangi maka akan menghapus data
       newTodos.splice(index, 1);
     }

     setTodos(newTodos);
   };
   ```

8. Create Info Section

   ```javascript
   <div className={styles.info}>
     <div className={styles.infoTotal}>
       <p>{`Total List: ${todosLength}`}</p>
     </div>
     <div className={styles.infoTotal}>
       <p>{`Total count: ${totalCounts}`}</p>
     </div>
     <button className={styles.deleteAllButton} onClick={() => setTodos([])}>
       <p>Delete All List</p>
     </button>
   </div>
   ```

   > for totalCounts we create funct

   ```javascript
   const getTotalCounts = () => {
     const totalCounts = todos.reduce((total, num) => {
       return total + num.count;
     }, 0);
     return totalCounts;
   };
   ```

9. Component Navbar

   ```javascript
   import ShoppingIcon from "/public/logo192.png";

   const Navbar = () => {
     return <Nav className="nav">/// ....</Nav>;
   };
   export default Navbar;
   ```

   > in App.js import Navbar
   > import Navbar from "./components/Navbar";
   > ...
   > return (
   > <Navbar />
   > ...
   > )

10. Component Section

```javascript
import PropTypes from "prop-types";

const Component = (props) => {
  return <Section className="section">{props.children}</Section>;
};
export default Component;
```

11. CSS Modules
    styling the component with CSS Modules

12. Add PropTypes func to Info and Todos

```

```

```

```

```

```
