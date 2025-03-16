import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

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

  const rows = Array.from({ length: quantity }, (_, index) => `${resource} ${index + 1}`);
  const columns = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const weeks = Math.ceil(duration / 7);

  const [data, setData] = useState(Array(quantity).fill(Array(duration).fill("")));

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newData = data.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === colIndex ? value : cell)) : row
    );
    setData(newData);
  };

  return (
    <section className="w-[90%] mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6">Please enter data for {resource}</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {columns.map((col, index) => (
                <th key={index} className="border p-3">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: weeks }).map((_, weekIndex) => (
              <tbody key={weekIndex}>
                {rows.map((row, rowIndex) => (
                  <tr key={`${weekIndex}-${rowIndex}`}>
                    <td className="border p-3 font-bold">{row}</td>
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const colIndex = weekIndex * 7 + dayIndex;
                      return (
                        <td key={colIndex} className="border p-3">
                          {colIndex < duration ? (
                            <input
                              type="number"
                              className="w-full p-2 border rounded"
                              value={data[rowIndex][colIndex] || ""}
                              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            />
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Green separator line */}
                <tr key={`separator-${weekIndex}`} className="h-2 bg-green-500"></tr>
              </tbody>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3">Production Analysis</h3>
        <Bar
          data={{
            labels: Array.from({ length: duration }, (_, i) => `Day ${i + 1}`),
            datasets: rows.map((row, index) => ({
              label: row,
              data: data[index].map((value) => (value ? Number(value) : 0)),
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            })),
          }}
        />
      </div>
    </section>
  );
};

export default TrackingPage;