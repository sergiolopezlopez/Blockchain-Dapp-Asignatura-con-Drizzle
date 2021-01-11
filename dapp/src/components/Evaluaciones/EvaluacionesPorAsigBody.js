import {newContextComponents} from "@drizzle/react-components";
import EvaluacionesPorAsigRow from "./EvaluacionesPorAsigRow";

const {ContractData} = newContextComponents;

const EvaluacionesPorAsigBody = (props) => {
    const {drizzle, drizzleState, matriculasLength, evaluacion} = props;
    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"matriculas"}
                methodArgs={[i]}
                render={addr => <EvaluacionesPorAsigRow
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    alumnoIndex={i}
                    alumnoAddr={addr}
                    evaluacion={evaluacion}/>}
            />);
    }
    return <tbody>{rows}</tbody>;
};

export default EvaluacionesPorAsigBody;
