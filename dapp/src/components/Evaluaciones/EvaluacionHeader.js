
import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const EvaluacionHeader = (props) => {
    const {drizzle, drizzleState, evaluacionIndex} = props;
    return <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract={"Asignatura"}
        method={"evaluaciones"}
        methodArgs={[evaluacionIndex]}
        render={ev =>
            <h4> E<sub>{evaluacionIndex}</sub> - {ev.nombre} </h4>
        }
    />;
};

export default EvaluacionHeader;