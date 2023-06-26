import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataPoint from './DataPoint';
import { DatapointTypes } from '@prisma/client';
import type { IDatapoint } from '@/lib/types/HealthData';

const DatapointTypeUnits: DatapointTypes = {
  STEPS: "steps",
  DISTANCE: "km",
  HEART_RATE: "bpm",
  BLOOD_PRESSURE: "mmHg",
  SLEEP: "hours",
  WEIGHT: "kg",
  BODY_FAT: "%"
}

const HealthDataForm: React.FC = () => {
  const [datapoints, setDatapoints] = useState<IDatapoint[]>([{ id: uuidv4(), type: 'STEPS', value: '', unit: 'steps' }]);

  const handleChange = (id: string, event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const newDatapoints = datapoints.map(i => {
      if (id === i.id) {
        return { ...i, [event.target.name as keyof IDatapoint]: event.target.value as string, unit: DatapointTypeUnits[event.target.value as keyof DatapointTypes] as string }
      }
      return i;
    });
    setDatapoints(newDatapoints);
  }

  const handleAddClick = () => {
    setDatapoints([...datapoints, { id: uuidv4(), type: '', value: '', unit: '' }]);
  }

  const handleRemove = () => {
    const newDatapoints = [...datapoints];
    newDatapoints.pop();
    setDatapoints(newDatapoints);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(datapoints);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {datapoints.map((datapoint, index) => (
        <DataPoint
          key={datapoint.id}
          types={Object.keys(DatapointTypes)}
          datapoint={datapoint}
          handleChange={handleChange}
        />
      ))}
      <button type="button" onClick={handleAddClick} className="py-2 px-4 bg-blue-500 text-white rounded-md">Add datapoint</button>
      <button type="button" onClick={handleRemove} className="py-2 px-4 bg-red-500 text-white rounded-md">Remove last datapoint</button>
      <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-md">Submit</button>
    </form>
  );
};

export default HealthDataForm;
