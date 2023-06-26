import { DatapointTypes } from "@prisma/client";
interface IDatapoint {
  id: string;
  type: string;
  value: string;
  unit: string;
}

interface DataPointProps {
  types: string[];
  datapoint: IDatapoint;
  handleChange: (id: string, event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
}
