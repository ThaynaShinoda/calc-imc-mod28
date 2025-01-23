import { useState } from 'react'
import styles from './Calculadora.module.css'

export function Calculadora() {
  const[imc, setImc] = useState(0);
  const[classificacao, setClassificacao] = useState('________');

  function handleCalcular (event) {
    event.preventDefault()

    const altura = parseFloat(event.target.altura.value / 100);
    const peso = parseFloat(event.target.peso.value);
    
    if(altura <= 0 || peso <= 0) {
      alert('Digite um valor válido');
      setImc(0);
      setClassificacao('________');
      return;
    }

    const imcCalculo = peso / (altura*altura);
    setImc(imcCalculo);
    getClassificacao(imcCalculo);

  }

  function getClassificacao(imc) {
    if(imc < 18.5) {
      setClassificacao('Magreza');
    } else if(imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 39.9) {
      setClassificacao('Obesidade');
    } else if (imc >= 40) {
      setClassificacao('Obesidade grave');
    }
  }
  
  return (
    <div className={styles.calculadoraContainer}>
      <p>Informe os dados para que seja calculado seu IMC</p>
      <form className={styles.form} onSubmit={handleCalcular}>
        <div className={styles.valorContainer}>
          <div className={styles.valor}>
            <label htmlFor="altura">Altura (cm)</label>
            <input
              type="number"
              name="altura"
              id="altura"
              placeholder='Ex: 160'
            />
          </div>
          <div className={styles.valor}>
            <label htmlFor="peso">Peso (kg)</label>
            <input
              type="number"
              name="peso"
              id="peso"
              step="0.01"
              placeholder='Ex: 70.5'
            />
          </div>
        </div>
        <button type="submit">Calcular</button>
      </form>
      <h3 className={styles.resultadoImc}>IMC: {imc.toFixed(2)}</h3>
      <p className={styles.classificacao}>Classificação: {classificacao}</p>

      <table className={styles.tabelaImc}>
        <thead>
          <tr>
            <th>IMC</th>
            <th>CLASSIFICAÇÃO</th>
            <th>OBESIDADE(GRAU)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 18.5</td>
            <td>Magreza</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Entre 18.5 e 24.9</td>
            <td>Normal</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Entre 25.0 e 29.9</td>
            <td>Sobrepeso</td>
            <td>I</td>
          </tr>
          <tr>
            <td>Entre 30.0 e 39.9</td>
            <td>Obesidade</td>
            <td>II</td>
          </tr>
          <tr>
            <td>Maior que 40.0</td>
            <td>Obesidade grave</td>
            <td>III</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}