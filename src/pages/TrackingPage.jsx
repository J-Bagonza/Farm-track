import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrackingPage = () => {
  const location = useLocation();
  const { resource, quantity, duration } = location.state || {};

  if (!resource || !quantity || !duration) {
    return (
      <h2 className="text-center mt-10 text-red-500 font-bold">
        Invalid data. Please go back and enter details.
      </h2>
    );
  }

  // Generate row labels (Days)
  const rowLabels = Array.from({ length: duration }, (_, index) => `Day ${index + 1}`);

  // Generate column headers (Animals/Crops)
  const columns = Array.from({ length: quantity }, (_, index) => `${resource} ${index + 1}`);

  // Initialize production data
  const [data, setData] = useState(Array(duration).fill(Array(quantity).fill("")));

  // Handle input change
  const handleInputChange = (rowIndex, colIndex, value) => {
    const newData = data.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === colIndex ? value : cell)) : row
    );
    setData(newData);
  };
  return (
    <>
      <Navbar />

      <section className="w-[90%] mx-auto py-32">
        {/* Title with red vertical line */}
        <div className="flex items-center mb-6">
          <div className="w-2 h-10 bg-red-500 mr-4"></div>
          <h2 className="text-3xl font-extrabold text-orange-400">
            Tracking {resource} Produce
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="border p-3 text-lg">Day</th>
                {columns.map((col, index) => (
                  <th key={index} className="border p-3 text-lg">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowLabels.map((day, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}>
                  <td className="border p-3 font-bold">{day}</td>
                  {columns.map((_, colIndex) => (
                    <td key={colIndex} className="border p-3">
                      <input
                        type="number"
                        className="w-full p-2 border rounded text-center"
                        value={data[rowIndex][colIndex] || ""}
                        onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Production Analysis</h3>
          <Bar
            data={{
              labels: rowLabels,
              datasets: columns.map((col, index) => ({
                label: col,
                data: data.map((row) => (row[index] ? Number(row[index]) : 0)),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              })),
            }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TrackingPage;