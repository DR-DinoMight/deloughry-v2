import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataPoint from './DataPoint';
import { DatapointTypes } from '@prisma/client';
import type { HealthDataFormChangeProps, IDatapoint } from '@/lib/types/HealthData';

const DatapointTypeUnits: DatapointTypes = {
  STEPS: "steps",
  DISTANCE: "km",
  HEART_RATE: "bpm",
  BLOOD_PRESSURE: "mmHg",
  SLEEP: "hours",
  WEIGHT: "kg",
  BODY_FAT: "%"
}

type HealthDataFormProps = {
  token: string;
}

const HealthDataForm = ({ token }: HealthDataFormProps) => {
  const [datapoints, setDatapoints] = useState<IDatapoint[]>([{ id: uuidv4(), type: 'STEPS', value: '', unit: 'steps' }]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (datapoint: IDatapoint, event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const newDatapoints = datapoints.map(i => {
      if (datapoint.id === i.id) {
        console.log(datapoint);
        console.log(i);
        if (event.target.name === 'type') {
          return {
            ...i,
            type: event.target.value as DatapointTypes,
            // @ts-ignore
            unit: DatapointTypeUnits[event.target.value]
          }
        }
        else {
          return {
            ...i,
            [event.target.name as string]: event.target.value
          }
        }
      }
      return i;
    });
    // @ts-ignore
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const results = await fetch('/api/protected/submitHealthData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(datapoints)
    });

    if (results.status === 200) {
      alert('Successfully submitted health data!');
    }
    else {
      console.log('Error submitting health data!');
    }
    setLoading(false);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {
        !loading && (
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
        )
      }
    </>
  );
};

export default HealthDataForm;
