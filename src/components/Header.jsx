import styles from './Header.module.css'

export function Header() {
  return(
    <div>
      <h1 className={styles.logo}>Calculadora de IMC</h1>
      <div className={styles.descriptionContainer}>
        <h3>O que é IMC?</h3>
        <p>
          O Índice de Massa Corporal (IMC) é uma fórmula que calcula a relação entre o peso e a altura de uma pessoa. Ele é usado para avaliar se o indivíduo está em um peso saudável, além de indicar o risco de desenvolver doenças crônicas
        </p>
      </div>
    </div>
  )
}