import React, { useEffect, useState } from "react";
import Element from "./components/Elements";
import { FormContext } from "./FormContext";
import formJSON from './dynamic-form.json'

function App() {
  const [elements, setElements] = useState(null)
  useEffect(()=> {
    setElements(formJSON[0])
  }, [])

  const { form_name, fields } = elements ?? {}

  const handleSubmit = () => {
    console.log(elements)
  }
  const handleChange = () => {
    console.log(elements)
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>{form_name}</h3>
        <form>
          {fields ? fields.map((field, index)=> <Element key={[field.id, index].join('|')} field={field} />) : null}
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </FormContext.Provider>

  );
}

export default App;
