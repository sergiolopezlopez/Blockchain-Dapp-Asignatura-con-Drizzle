import {newContextComponents} from "@drizzle/react-components";
import CalificacionesHead from "../Calificaciones/CalificacionesHead";
import CalificacionesBody from "../Calificaciones/CalificacionesBody";
import EvaluacionesPorAsigBody from "./EvaluacionesPorAsigBody";
import EvaluacionesPorAsigHead from "./EvaluacionesPorAsigHead";
import * as React from "react";
import EvaluacionesPorAsigForm from "./EvaluacionesPorAsigForm";


const {ContractData, ContractForm} = newContextComponents;



const VerEvaluacionesPorAsig = (props) => <article className="creaEvaluacion">
    <h2>Ver calificaciones de una evaluación</h2>

    {/*Se necesitará tanto ml como el para los Handlers del form*/}
    <ContractData drizzle={props.drizzle}
                  drizzleState={props.drizzleState}
                  contract={"Asignatura"}
                  method={"matriculasLength"}
                  render={ml =>
                      <ContractData
                          drizzle={props.drizzle}
                          drizzleState={props.drizzleState}
                          contract={"Asignatura"}
                          method={"evaluacionesLength"}
                          render={el =>

                              <EvaluacionesPorAsigForm
                                  drizzle={props.drizzle}
                                  drizzleState={props.drizzleState}
                                  evaluacionesLength={el}
                                  matriculasLength={ml}/>

                          }
                      />
                  }
    />
</article>

export default VerEvaluacionesPorAsig;