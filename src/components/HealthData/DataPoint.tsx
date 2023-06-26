const DataPoint: React.FC<DataPointProps> = ({ types, datapoint, handleChange }) => {
  return (
    <div key={datapoint.id} className="flex space-x-4">
      <select
        value={datapoint.type}
        name="type"
        onChange={(event) => handleChange(datapoint.id, event)}
        className="block py-2 px-3 border rounded-md"
      >
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <input
        type="text"
        name="value"
        value={datapoint.value}
        onChange={(event) => handleChange(datapoint.id, event)}
        className="block py-2 px-3 border rounded-md"
      />
      <input
        type="text"
        name="unit"
        value={datapoint.unit}
        disabled
        className="block py-2 px-3 border rounded-md"
      />
    </div>
  );
};

export default DataPoint;
