"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

const DesktopTable = ({ lineObject, selectedStationData, tableId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Ajusteaza cat de mult din element trebuie sa fie vizibil pentru a declansa animatia
  });

  return (
    <motion.section
      ref={ref}
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="flex flex-col"
    >
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table id={tableId} className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                  >
                    {lineObject
                      ? lineObject.way.stopsTo[0].schedule[0].day
                      : "Loading..."}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                  >
                    {lineObject
                      ? lineObject.way.stopsTo[0].schedule[1].day
                      : "Loading..."}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="text-center py-4 whitespace-nowrap border-r">
                    <div className="flex space-x-4">
                      <div className="text-sm text-gray-900 border-r w-[50px]">
                        Ora
                      </div>
                      <div className="text-sm text-gray-500">Minutul</div>
                    </div>
                  </td>
                  <td className="text-center py-4 whitespace-nowrap border-r">
                    <div className="flex space-x-4">
                      <div className="text-sm text-gray-900 border-r w-[50px]">
                        Ora
                      </div>
                      <div className="text-sm text-gray-500">Minutul</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-4 whitespace-nowrap border-r">
                    {selectedStationData
                      ? selectedStationData.schedule[0].departures.map(
                          (departure, index) => {
                            return (
                              <div key={index} className="flex space-x-4 py-2">
                                <div className="text-sm text-gray-900 border-r w-[50px]">
                                  {departure.hour.toString().padStart(2, "0")}
                                </div>
                                <div className="text-sm text-gray-500 flex">
                                  {departure.minutes.length > 0 ? (
                                    departure.minutes.map((minute, index) => {
                                      return (
                                        <p key={index} className="mr-4">
                                          {minute.toString().padStart(2, "0")}
                                        </p>
                                      );
                                    })
                                  ) : (
                                    <p>Nu circula</p>
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )
                      : "Loading..."}
                  </td>

                  {/* Add similar logic for the second day's departures */}
                  <td className="text-center py-4 whitespace-nowrap border-r">
                    {selectedStationData
                      ? selectedStationData.schedule[1].departures.map(
                          (departure, index) => {
                            return (
                              <div key={index} className="flex space-x-4 py-2">
                                <div className="text-sm text-gray-900 border-r w-[50px]">
                                  {departure.hour.toString().padStart(2, "0")}
                                </div>
                                <div className="text-sm text-gray-500 flex">
                                  {departure.minutes.length > 0 ? (
                                    departure.minutes.map((minute, index) => {
                                      return (
                                        <p key={index} className="mr-4">
                                          {minute.toString().padStart(2, "0")}
                                        </p>
                                      );
                                    })
                                  ) : (
                                    <p>Nu circula</p>
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )
                      : "Loading..."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DesktopTable;
