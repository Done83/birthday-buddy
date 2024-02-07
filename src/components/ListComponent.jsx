/* eslint-disable react/prop-types */
import PersonComponent from './PersonComponent';

function ListComponent({ people }) {
    return (
        <section className='rounded-3xl py-9 bg-gradient-to-br from-pink-600 to-blue-600'>
            {people.map((person) => {
                return <PersonComponent key={person.id} {...person} />;
            })}
        </section>
    );
}
export default ListComponent;
