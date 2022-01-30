import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/EOM.module.css'


export const EOM = ({employee}) => {

    return(
        <>

        <Head>
            <title>Employee Of The Month</title>
        </Head>
            <div className="page-container">
                <Toolbar/>

                <div className={styles.main}>
                    <div className={styles.employeeOfTheMonth}>
                     <h1>Employee Of The Month</h1>
                    <h3>{employee.employee.name}</h3>
                    <h6>{employee.employee.position}</h6>
                    <img src={employee.employee.image}/>
                    <p>{employee.employee.description}</p> 
                    </div>
                </div>
            </div>
        </>
    )
} 

export const getServerSideProps = async pageContext => {
    const getResults = await fetch(
        'https://ksowah.github.io/UI-DASHBOARD/eom.json'
    )

    const employee = await getResults.json()

    return {
        props : {
            employee : employee
        }
    }
    
}

export default EOM