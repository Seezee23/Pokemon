const React = require('react')

class Edit extends React.Component {
    render(){
        const{name, _id, color, readyToPlay} = this.props.pokemon
        return (
            <>
            <h1>Edit This Pokemon</h1>
            <nav>
                <a href="/pokemons"> Go Back To Pokemons Home Page</a>
            </nav>
            <form method="POST" action={`/pokemons/${_id}?_method=PUT`}>
                Name: <input type="text" name="name" defaultValue={name}></input><br/>
                Color: <input type="text" name="color" defaultValue={color}></input><br/>
                Is Ready To Play: <input type="checkbox" name="readyToPlay" defaultChecked={readyToPlay}/><br/>
                <input type='submit' value="Edit Pokemon" />
            </form>
            </>
        )
    }
}

module.exports = Edit