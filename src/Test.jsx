import { useState } from "react";

const services = ["Digital Marketing", "Development", "SEO"];

function Test() {
  let [name, setName] = useState("");
  let [number, setNumber] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckbox = (value, status) => {
    setSelectedServices((prevState) => {
      return status
        ? [...prevState, value]
        : prevState.filter((v) => v !== value);
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault(); // stop page refresh
          console.log(name, number, selectedServices);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="mb-2"
          name=""
          id=""
          placeholder="1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="mb-2">
          {services.map((service) => {
            return (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckbox(service, e.target.checked)}
                />
                <p>{service}</p>
              </label>
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;