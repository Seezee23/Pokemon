const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <div>
                        <a href="/pokemons">Go to Home Page For Pokemons</a>
                        </div>
                        <div>
                        <a href="/pokemons/new">Create a New Pokemon</a>
                        </div>
                        <div>
                        { pokemon? <a href={`/pokemons/${pokemon._id}/edit`}> {pokemon.name} Edit Page </a> : ''}
                        </div>
                        <div>
                        { pokemon? <a href={`/pokemons/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}
                        </div>
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default