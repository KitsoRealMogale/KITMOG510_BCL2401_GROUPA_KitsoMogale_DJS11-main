

export const SelectComponent = ({ onSelectChange,option1,option2 }) => {

    const handleChange = (event) => {
      onSelectChange(event.target.value);
      console.log(event.target.value)
    };
  
    return (
      <div>
        <select onChange={handleChange}>
          <option value="Option 1">{option1}</option>
          <option value="Option 2">{option2}</option>
        </select>
      </div>
    );
  };