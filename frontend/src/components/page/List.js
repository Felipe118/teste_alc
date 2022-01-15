import { useEffect, useState} from 'react'
import api from '../../utils/api'
import styles from './List.module.css'

function  List() {
    const [imc,setImcs] = useState([])
    

    useEffect( () => {
      
            api.get('/imc/list')
             .then((res) => {
                  setImcs(res.data.imc)
                //   console.log(res.data.imc)
              })
              .catch((err) => {
                  console.log(err)
                 
                  return err
                })
        }, [])
   
        
  
   
    return (
            
        // <section>
        //     {imc.map((imcs) => (
        //        <p key={imcs.id}>{imcs.name}</p>
        //      ))}
        //  </section>

        <section>
           <h1 className={styles.title}>Lista IMC</h1>
            <table>
                <thead>
                    <tr>
                        <th >Nome</th>
                        <th className={styles.th}>Peso</th>
                        <th className={styles.th}>Altura</th>
                        <th className={styles.th}>IMC</th>
                        <th className={styles.th}>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                  
                    {imc.map((imcs) => (
                         <tr key={imcs.id}>
                            <td className={styles.td} key={imcs.id}>{imcs.name}</td>
                            <td className={styles.td} key={imcs.weight}>{imcs.weight}</td>
                            <td className={styles.td} key={imcs.height}>{imcs.height}</td>
                            <td className={styles.td} key={imcs.result}>{imcs.result}</td>
                            <td className={styles.td} key={imcs.classification}>{imcs.classification}</td>
                        </tr>
                     
                    ))}
                    
                   
                     
                </tbody>
            </table>
        </section>
    )
}

export default List