const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.superman = props.superman
    }
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemons Index Page">
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, color, readyToEat, _id} = pokemon
                            return (
                                <li key={_id}>
                                    <a href={`/pokemons/${_id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        readyToEat? 
                                        'It\'s ready to play':
                                        'It\'s not ready to play'
                                    }
                                    <br/>
                                    <form method="POST" action={`/pokemons/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index