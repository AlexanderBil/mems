import TableComponent from './components/table/Table';
import { memesData } from './fakeData/fakeData';

export default async function Home() {
  return (
    <div className="w-screen h-screen flex items-start justify-center">
      <TableComponent memes={memesData} />
    </div>
  );
}
