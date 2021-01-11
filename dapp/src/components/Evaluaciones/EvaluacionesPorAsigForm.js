import React from 'react';
import EvaluacionesPorAsigBody from "./EvaluacionesPorAsigBody";
import EvaluacionesPorAsigHead from "./EvaluacionesPorAsigHead";
import EvaluacionHeader from "./EvaluacionHeader";

class EvaluacionesPorAsigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { evaluacion: null };
    }

    handleChange = (event) => {
        let evaluacion = event.target.value;
        if(evaluacion >= this.props.evaluacionesLength){
            alert("No existe el id: " + evaluacion);
        }else{
            this.setState({evaluacion: evaluacion});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        let table = '';
        // Se renderizará solo cuando se cumpla la condición de evaluacion.
        if(this.state.evaluacion){
            table = <>
                <EvaluacionHeader evaluacionIndex = {this.state.evaluacion}
                                  drizzle={this.props.drizzle}
                                  drizzleState={this.props.drizzleState} />
                <table>
                    <EvaluacionesPorAsigHead evaluacion={this.state.evaluacion}/>
                    <EvaluacionesPorAsigBody drizzle={this.props.drizzle}
                                             drizzleState={this.props.drizzleState}
                                             matriculasLength={this.props.matriculasLength}
                                             evaluacion={this.state.evaluacion}/>
                </table>
            </>
        }
        return (
            <><form onSubmit={this.handleSubmit}>
                    Introduce evaluacion id: <input type='text' onChange={this.handleChange} placeholder={0}/>
                </form>
                {table}
            </>
        );
    }
}

export default EvaluacionesPorAsigForm;