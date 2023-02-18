import addData from '@/src/firebase/database/add-data';

const Home = () => {
  const handleForm = async () => {
    const data: { name: string } = {
      name: 'Bruno',
    };
    const { result, error } = await addData('users', data);
    if (error) {
      return console.log(error);
    }
  };

  return <div>TODO</div>;
};

export default Home;
