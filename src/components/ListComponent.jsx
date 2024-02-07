/* eslint-disable react/prop-types */
import PersonComponent from "./PersonComponent"

function ListComponent({people}) {
  return (
    <section>
        {people.map((person) => {
            return <PersonComponent key={person.id} {...person}/>
        })}
    </section>
  )
}
export default ListComponent