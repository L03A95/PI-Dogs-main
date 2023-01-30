import Card from './Card';




export default function Cards(props) {
    return (
        <div className='prueba'>
            {
                props.dogs.map((dog) => <Card
                key={dog.id + 'a'}
                id={dog.id}
                name={dog.name}
                image={dog.image}
                temperament={dog.temperament}
                weight={dog.weight}
                />)
            }
        </div>
    )
}