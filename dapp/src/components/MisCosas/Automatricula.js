import {newContextComponents} from "@drizzle/react-components";


const {ContractData, ContractForm} = newContextComponents;

const Automatricula = ({drizzle, drizzleState}) => <article className="automatricula">
    <h3>Automatricula</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr === drizzleState.accounts[0]) {
                          return <p>"SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre", "Email"]}
                      />
                  }}
    />
</article>

export default Automatricula;