import {newContextComponents} from "@drizzle/react-components";


const {ContractData, ContractForm} = newContextComponents;

const CreaEvaluacion = ({drizzle, drizzleState}) => <article className="creaEvaluacion">
    <h3>Crear evaluación</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre", "Fecha", "Puntos"]}
                      />
                  }}
    />
</article>

export default CreaEvaluacion;