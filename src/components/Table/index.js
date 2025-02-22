import "./index.css";

const Table = ({ columnsConfig, data }) => {
  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            {Object.keys(columnsConfig).map((key) => (
              <th>{columnsConfig[key].label}</th>
            ))}
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody>
            <tr>
              <td
                colSpan={Object.keys(columnsConfig).length}
                className="no-data"
              >
                No items found
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {data.map((row, i) => {
              return (
                <tr key={i}>
                  {Object.keys(columnsConfig).map((key) => (
                    <td className="table-cell">
                      {columnsConfig[key].customCell
                        ? columnsConfig[key].customCell(row)
                        : row?.[key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
