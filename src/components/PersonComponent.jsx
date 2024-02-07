/* eslint-disable react/prop-types */
function PersonComponent({ name, age, image }) {
    return (
        <article className='p-3'>
            <h2 className='p-3 text-[18px]'>{name}</h2>
            <img
                src={image}
                alt=''
                className='w-[70px] h-[70px] rounded-[100px] mx-auto object-cover'
            />
            <p className='mt-2 text-gray-800 text-[14px]'>{age} years</p>
        </article>
    );
}
export default PersonComponent;
