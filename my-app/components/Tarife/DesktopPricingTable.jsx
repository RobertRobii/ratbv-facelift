const DesktopTable = () => {
  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r w-[400px]"
                >
                  Titlu de calatorie
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                >
                  Tarif (lei + TVA)
                </th>
                <th
                  scope="col"
                  className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r w-[300px]"
                >
                  Valabilitate
                  <div className="flex justify-around items-center mt-2 border-t">
                    <p className="pt-2">Durata</p>
                    <p className="pt-2">Trasee</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="text-center whitespace-nowrap border-r">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">1</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Calatorie{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">2</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Pachet{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>{" "}
                        2 calatorii
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">3</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Pachet{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>{" "}
                        2 calatorii achizitionat de la sofer
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">4</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        <span className="font-semibold text-accent">
                          Bilet special cu suprataxa
                        </span>{" "}
                        achitat in mijlocul de transport
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">5</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        <span className="font-semibold text-accent">
                          Portofel electronic
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">6</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament 1 zi{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>{" "}
                        PASS
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">7</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament 3 zile{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>{" "}
                        PASS
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">8</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament lunar{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm w-[50px]">9</p>
                      <p className="py-2 text-sm w-full text-left border-l pl-2">
                        Abonament anual{" "}
                        <span className="font-semibold text-accent">
                          Metropolitan
                        </span>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center whitespace-nowrap border-r w-[200px]">
                  <div>
                    <p className="py-2 text-sm border-b">4 lei</p>
                    <p className="py-2 text-sm border-b">8 lei</p>
                    <p className="py-2 text-sm border-b">10 lei</p>
                    <p className="py-2 text-sm border-b">200 lei</p>
                    <p className="py-2 text-sm border-b">4 lei / calatorie</p>
                    <p className="py-2 text-sm border-b">12 lei</p>
                    <p className="py-2 text-sm border-b">30 lei</p>
                    <p className="py-2 text-sm border-b">150 lei</p>
                    <p className="py-2 text-sm">1500 lei</p>
                  </div>
                </td>
                <td className="text-center border-r flex justify-between items-center">
                  <div className="border-r w-[50%]">
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">In ziua incasarii</p>
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">1 zi</p>
                    <p className="py-2 text-sm border-b">3 zile</p>
                    <p className="py-2 text-sm border-b">28 - 31 zile</p>
                    <p className="py-2 text-sm">365 - 366 zile</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm">
                      Pe toate liniile din Municipiul Brasov si Zona
                      Metropolitana Brasov
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center whitespace-nowrap border-r">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">10</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament lunar
                        <span className="font-semibold text-blue-500">
                          {" "}
                          Urban
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">11</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament lunar
                        <span className="font-semibold text-blue-500">
                          {" "}
                          Urban
                        </span>{" "}
                        nenominal
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm w-[50px]">12</p>
                      <p className="py-2 text-sm w-full text-left border-l pl-2">
                        Abonament anual
                        <span className="font-semibold text-blue-500">
                          {" "}
                          Urban
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center whitespace-nowrap border-r w-[200px]">
                  <div>
                    <p className="py-2 text-sm border-b">80 lei</p>
                    <p className="py-2 text-sm border-b">120 lei</p>
                    <p className="py-2 text-sm">800 lei</p>
                  </div>
                </td>
                <td className="text-center border-r flex justify-between items-center">
                  <div className="border-r w-[50%]">
                    <p className="py-2 text-sm border-b">28 - 31 zile</p>
                    <p className="py-2 text-sm border-b">28 - 31 zile</p>
                    <p className="py-2 text-sm">365 - 366 zile</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm">
                      Pe toate liniile din Municipiul Brasov
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center whitespace-nowrap border-r">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">13</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Calatorie{" "}
                        <span className="font-semibold text-orange-500">
                          Periurban{" "}
                        </span>
                        interior locatlitate
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">14</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Pachet{" "}
                        <span className="font-semibold text-orange-500">
                          Periurban{" "}
                        </span>{" "}
                        2 calatorii interior locatlitate
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">15</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Pachet{" "}
                        <span className="font-semibold text-orange-500">
                          Periurban{" "}
                        </span>{" "}
                        2 calatorii interior locatlitate achizitionat de la
                        sofer
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">16</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament lunar
                        <span className="font-semibold text-orange-500">
                          {" "}
                          Periurban
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm border-b w-[50px]">17</p>
                      <p className="py-2 text-sm border-b w-full text-left border-l pl-2">
                        Abonament lunar
                        <span className="font-semibold text-orange-500">
                          {" "}
                          Periurban{" "}
                        </span>
                        nenominal
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="py-2 text-sm w-[50px]">18</p>
                      <p className="py-2 text-sm w-full text-left border-l pl-2">
                        Abonament anual
                        <span className="font-semibold text-orange-500">
                          {" "}
                          Periurban
                        </span>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center whitespace-nowrap border-r w-[200px]">
                  <div>
                    <p className="py-2 text-sm border-b">2 lei</p>
                    <p className="py-2 text-sm border-b">4 lei</p>
                    <p className="py-2 text-sm border-b">5 lei</p>
                    <p className="py-2 text-sm border-b">80 lei</p>
                    <p className="py-2 text-sm border-b">120 lei</p>
                    <p className="py-2 text-sm">800 lei</p>
                  </div>
                </td>
                <td className="text-center border-r flex justify-between items-center">
                  <div className="border-r w-[50%]">
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">
                      60 minute / calatorie
                    </p>
                    <p className="py-2 text-sm border-b">28 - 31 zile</p>
                    <p className="py-2 text-sm border-b">28 - 31 zile</p>
                    <p className="py-2 text-sm">365 - 366 zile</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-sm">
                      Pe toate liniile din Zona Metropolitana Brasov (fara
                      Municipiul Brasov)
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DesktopTable;
