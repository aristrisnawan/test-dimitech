import React, { useState } from "react";

export default function Layout() {
  const [inputField, setInputField] = useState([]);

  let jumlah = inputField.map((items) => items.price * items.qty);
  //   console.log(jumlah);

  //Mendapatkan grand total
  let sum = 0;
  for (let i = 0; i < jumlah.length; i++) {
    sum += jumlah[i];
  }

  var regex = "^.{1,}$";

  //   console.log(sum);

  //   console.log(inputField);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputField];
    // console.log(values);
    values[index][event.target.name] = event.target.value;
    // console.log(values);
    setInputField(values);
  };

  const handleAdd = () => {
    setInputField([
      ...inputField,
      {
        name: "",
        price: 0,
        qty: 0,
      },
    ]);
  };

  const handleRemove = (index) => {
    const values = [...inputField];
    values.splice(index, 1);

    setInputField(values);
  };
  return (
    <div className="px-28">
      <div id="tambah-col">
        <form action="" onSubmit={handleSubmit}>
          <button
            onClick={handleAdd}
            className="py-2 px-3 bg-gray-600 rounded text-white my-4"
          >
            New
          </button>
          {inputField.map((items, index) => {
            return (
              <div
                className="grid grid-cols-6 gap-x-6 justify-items-cente"
                key={index}
              >
                <div className="flex flex-col">
                  <div>Product name</div>
                  <input
                    type="text"
                    name="name"
                    value={items.name}
                    onChange={(event) => handleChangeInput(index, event)}
                    className="rounded border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col">
                  <div>Product price</div>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    value={items.price}
                    onChange={(event) => handleChangeInput(index, event)}
                    className="rounded border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col">
                  <div>Qty</div>
                  <input
                    type="number"
                    min="0"
                    name="qty"
                    value={items.qty}
                    onChange={(event) => handleChangeInput(index, event)}
                    className="rounded border-2 border-gray-500"
                  />
                  {/* {regex ? "" : "Tidak boleh"} */}
                </div>
                <div className="flex flex-col">
                  <div>Total</div>
                  <input
                    type="number"
                    value={items.price * items.qty}
                    onChange={(event) => handleChangeInput(index, event)}
                    className="rounded border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col">
                  <button
                    className={
                      index < 1
                        ? "hidden"
                        : "py-1 px-1 bg-red-600 rounded text-white mt-5"
                    }
                    onClick={() => handleRemove(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <div
            className={
              jumlah.length <= 0
                ? "hidden"
                : "flex flex-col w-24 float-right mr-96 py-5"
            }
          >
            <div>Grand total</div>
            <input
              type="text"
              className="rounded border-2 border-gray-500"
              value={sum}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
