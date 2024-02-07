import { useState } from 'react';
import './App.css';
import data from './data';
import ListComponent from './components/ListComponent';

function App() {
    const [people, setPeople] = useState(data);
    return (
        <main className='h-[100vh] flex justify-center items-center bg-gradient-to-br from-blue-500 to-pink-500'>
            <section className='container mx-auto w-[60%] mt-14 text-center'>
                <h3>{people.length} birthdays today!</h3>
                <ListComponent people={people} />
            </section>
        </main>
    );
}

export default App;
