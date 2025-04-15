import TableComponent from "./components/table/Table";

interface IMemes {
  id: string;
  name: string;
  img: string;
  likes: string;
  actions?: string;
}

async function getMemes(): Promise<IMemes[]>{
  const res = await fetch('http://localhost:3000/api/memes');
  const result = await res.json()
  return result
}


export default async function Home() {
  const memes = await getMemes();
  
  return (
    <div className="w-screen h-screen flex items-start justify-center">
      <TableComponent memes={memes} />
    </div>
  );
}
